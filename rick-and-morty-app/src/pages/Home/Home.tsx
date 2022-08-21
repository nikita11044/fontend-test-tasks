import React, { useEffect } from 'react';
import { CircularProgress, Pagination } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useGetAllCharactersQuery } from '../../store/api/characters';
import Character from '../../components/Character/Character';
import styles from './Home.module.scss';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setPage } from '../../store/slices/app';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector((state) => state.filter);

  const {
    data, error, isLoading, refetch,
  } = useGetAllCharactersQuery();

  useEffect(() => {
    refetch();
  }, [filter]);

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return (
      <Typography variant="h4">Error while fetching characters</Typography>
    );
  }

  if (!data) {
    return <Typography variant="h4">No characters found</Typography>;
  }

  const handlePageChange = (_: unknown, page: number) => {
    dispatch(setPage(page));
  };

  return (
    <>
      <Pagination
        count={data.info.count}
        onChange={handlePageChange}
        variant="outlined"
        color="primary"
        size="large"
      />
      <div className={styles.charactersGrid}>
        {data.results.map(({
          id, name, image, status,
        }) => (
          <Character
            key={id}
            id={id}
            name={name}
            image={image}
            status={status}
          />
        ))}
      </div>
    </>
  );
};

export default Home;

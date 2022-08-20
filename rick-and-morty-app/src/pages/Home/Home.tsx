import React from 'react';
import { CircularProgress } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useGetAllCharactersQuery } from '../../store/api/characters';
import Character from '../../components/Character/Character';
import styles from './Home.module.scss';

const Home: React.FC = () => {
  const { data, error, isLoading } = useGetAllCharactersQuery();

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

  return (
    <div className={styles.charactersGrid}>
      {data.map(({
        id, name, image, status,
      }) => (
        <Character id={id} name={name} image={image} status={status} />
      ))}
    </div>
  );
};

export default Home;

import React from 'react';
import { CircularProgress } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Navigate, useParams } from 'react-router-dom';
import { useGetCharacterByIdQuery } from '../../store/api/characters';
import styles from './CharacterInfo.module.scss';
import { Locations } from '../../components';

const CharacterInfo: React.FC = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetCharacterByIdQuery(Number(id) || 0);

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Navigate to="/" replace />;
  }

  if (!data) {
    return <Typography variant="h4">No such character</Typography>;
  }

  const {
    name, image, status, species, gender, location,
  } = data;

  return (
    <div className={styles.root}>
      <div className={styles.image}>
        <img src={image} alt={name} />
      </div>
      <div>
        <Typography variant="h3">
          {name.length > 20 ? `${name.substring(0, 20)}...` : name}
        </Typography>
        <ul className={styles.info}>
          <li>
            <Typography variant="body2">
              Status:&nbsp;
              {status}
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              Species:&nbsp;
              {species}
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              Gender:&nbsp;
              {gender}
            </Typography>
          </li>
        </ul>
        <Typography variant="h4">Featured in episodes:</Typography>
        <Locations ids={Number(location.url.split('/').pop())} />
      </div>
    </div>
  );
};

export default CharacterInfo;

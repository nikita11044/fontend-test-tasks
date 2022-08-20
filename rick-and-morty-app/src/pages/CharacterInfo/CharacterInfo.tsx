import React from 'react';
import { CircularProgress } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useGetCharacterByIdQuery } from '../../store/api/characters';
import styles from './Character.module.scss';

const CharacterInfo: React.FC = () => {
  const { data, error, isLoading } = useGetCharacterByIdQuery(1);

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography variant="h4">Error while fetching character</Typography>;
  }

  if (!data) {
    return <Typography variant="h4">No such character</Typography>;
  }

  const {
    name, image, status, species, gender,
  } = data;

  return (
    <div>
      <div className={styles.image}>
        <img src={image} alt={name} />
      </div>
      <div className={styles.info}>
        <Typography variant="h3">{name}</Typography>
        <ul>
          <li>
            <Typography variant="body2">
              Status:
              {status}
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              Species:
              {species}
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              Gender:
              {gender}
            </Typography>
          </li>
        </ul>
        <Typography variant="h4">Featured in episodes:</Typography>
      </div>
    </div>
  );
};

export default CharacterInfo;

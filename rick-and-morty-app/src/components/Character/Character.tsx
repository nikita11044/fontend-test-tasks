import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import styles from './Character.module.scss';

interface CharacterProps {
  id: number;
  name: string;
  image: string;
  status: string;
}

const Character: React.FC<CharacterProps> = ({
  id, name, image, status,
}) => (
  <Card sx={{ maxWidth: 345 }}>
    <CardMedia component="img" height="200" image={image} alt={name} />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Status:
        {' '}
        {status}
      </Typography>
    </CardContent>
    <CardActions>
      <Link className={styles.link} to={`/characters/${id}`}>
        <Button variant="outlined" size="small">
          More
        </Button>
      </Link>
    </CardActions>
  </Card>
);

export default Character;

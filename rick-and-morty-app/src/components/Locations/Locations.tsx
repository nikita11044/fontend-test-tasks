import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { LocationOnOutlined } from '@mui/icons-material';
import { Skeleton } from '@mui/material';
import { useGetLocationByIdQuery } from '../../store/api/location';

interface LocationsProps {
  ids: number;
}

const Locations: React.FC<LocationsProps> = ({ ids }) => {
  const { data, error, isLoading } = useGetLocationByIdQuery(ids);

  if (isLoading) {
    return (
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {[...Array(3)].map(() => (
          <ListItem key={Math.random()}>
            <ListItemAvatar>
              <Avatar>
                <LocationOnOutlined />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={<Skeleton variant="text" width={150} height={30} />}
              secondary={<Skeleton variant="text" width={100} height={20} />}
            />
          </ListItem>
        ))}
      </List>
    );
  }

  if (error) {
    return <Typography variant="h4">Error while fetching locations</Typography>;
  }

  if (!data) {
    return <Typography variant="h4">No such location</Typography>;
  }

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {data.map(({ id, name, type }) => (
        <ListItem key={id}>
          <ListItemAvatar>
            <Avatar>
              <LocationOnOutlined />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={name} secondary={type} />
        </ListItem>
      ))}
    </List>
  );
};

export default Locations;

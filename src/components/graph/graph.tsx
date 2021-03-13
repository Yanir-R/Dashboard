import React from 'react'
import { Card, CardActionArea, CardMedia } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    media: {
      height: 0,
      paddingTop: '50.00%', // 16:9
    },
  }),
);

export const Graph: React.FC = () => {
  const classes = useStyles();
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://precisionglobalfx.com/wp-content/uploads/2020/02/1304090.png"
          title="Graph"
        />

      </CardActionArea>
    </Card>
  );
}
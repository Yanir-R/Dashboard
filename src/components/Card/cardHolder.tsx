import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 260,
    padding: theme.spacing(1)
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 5,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
}));



interface cardProps { }

export const CardHolder: React.FC<cardProps> = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (

    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
          </Typography>
        <Typography variant="h5" component="h2">
          be{bull}nev{bull}o{bull}lent
          </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
          </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.well meaning and kindly.
            <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <Divider />
      <CardActions>
        <Button size="small">Learn More</Button>
        <Button size="small">Learn More</Button>
        <Button size="small">Learn More</Button>

      </CardActions>
    </Card>

  );
}
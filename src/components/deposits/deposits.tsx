import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Title } from '../title/title';
interface depositsProps { }
const useStyles = makeStyles({
  depositContext: {
    flex: 1,
    
  },
});
export const Deposits: React.FC<depositsProps> = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Deposits</Title>
      <Typography component="p" variant="h4">
        $3,024.00
        </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2019
        </Typography>
    </React.Fragment>
  );
}
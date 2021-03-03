import React from 'react'
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

interface titleProps {}

export const Title: React.FC<titleProps> = (props) => {
    return (
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
        {props.children}
      </Typography>     
        );
}

Title.propTypes = {
    children: PropTypes.node,
  };
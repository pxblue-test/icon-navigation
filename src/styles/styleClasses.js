/*
  This file contains class definitions for use with Material UI's 'withStyles' 
  method that allows for custom style overrides of the default component visuals.
*/
import React from 'react';

const styles = theme => ({
  toolbar:{
    paddingLeft: 0
  },
  drawer:{
    maxWidth: '85%',
    width: theme.spacing.unit * 45
  },
  header:{
    height: '180px',
    color: 'white',
    background: theme.palette.primary['500'],
    padding: '16px'
  },
  subheader:{
    paddingLeft: '15px',
    paddingRight: '15px'
  },
  listItem:{
    paddingLeft: '15px',
    paddingRight: '15px',
    '&:hover':{
     backgroundColor: 'rgba(0, 0, 0, 0.08)'
    }
  },
  listItemText:{
    paddingLeft: '1px'
  }
});
export default styles;

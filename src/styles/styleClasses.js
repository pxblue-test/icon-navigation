/*
  This file contains class definitions for use with Material UI's 'withStyles' 
  method that allows for custom style overrides of the default component visuals.
*/
import React from 'react';
import {EatonColors} from '@pxblue/themes/react/src';

const styles = theme => ({
  flush: {
    paddingLeft: theme.spacing.unit * .5
  },
  toolbar:{
    [theme.breakpoints.down('xs')]:{
      paddingLeft: 0
    },
    paddingLeft: theme.spacing.unit * 2
  },
  noPadding: {
    padding: 0
  },
  drawerMargin:{
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
    marginLeft: theme.spacing.unit * 7,
    transition: 'margin 175ms cubic-bezier(.4, 0, .2, 1)'
  },
  drawerMarginFull:{
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
    marginLeft: theme.spacing.unit * 45,
    transition: 'margin 175ms cubic-bezier(.4, 0, .2, 1)'
  },
  drawerWidthFull:{
    width: theme.spacing.unit * 45,
    transition: 'width 175ms cubic-bezier(.4, 0, .2, 1)'
  },
  drawerWidthCollapsed:{
    width: theme.spacing.unit * 7,
    transition: 'width 175ms cubic-bezier(.4, 0, .2, 1)'
  },
  drawer:{
    maxWidth: '85%',
    width: theme.spacing.unit * 45
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
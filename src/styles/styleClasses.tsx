/*
  This file contains class definitions for use with Material UI's 'withStyles'
  method that allows for custom style overrides of the default component visuals.
*/

/*eslint-disable*/
const styles: any = (theme: any) => {
    return {
        flush: {
            paddingLeft: theme.spacing.unit * 0.5,
        },
        toolbar: {
            [theme.breakpoints.down('xs')]: {
                paddingLeft: 0,
            },
            paddingLeft: theme.spacing.unit * 2,
        },
        noPadding: {
            padding: 0,
        },
        drawerMargin: {
            [theme.breakpoints.down('xs')]: {
                marginLeft: 0,
            },
            marginLeft: theme.spacing.unit * 7,
            transition: 'margin 175ms cubic-bezier(.4, 0, .2, 1)',
        },
        drawerMarginFull: {
            [theme.breakpoints.down('xs')]: {
                marginLeft: 0,
            },
            marginLeft: theme.spacing.unit * 45,
            transition: 'margin 175ms cubic-bezier(.4, 0, .2, 1)',
        },
        drawerWidthFull: {
            width: theme.spacing.unit * 45,
            transition: 'width 175ms cubic-bezier(.4, 0, .2, 1)',
        },
        drawerWidthCollapsed: {
            width: theme.spacing.unit * 7,
            transition: 'width 175ms cubic-bezier(.4, 0, .2, 1)',
        },
        drawer: {
            maxWidth: '85%',
            width: theme.spacing.unit * 45,
        },
        header: {
            height: '180px',
            color: 'white',
            background: theme.palette.primary['500'],
            padding: '16px',
        },
        subheader: {
            paddingLeft: '15px',
            paddingRight: '15px',
        },
        listItem: {
            paddingLeft: '15px',
            paddingRight: '15px',
            '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.08)',
            },
        },
        listItemSelected: {
            position: 'relative',
            '&:hover': {
                backgroundColor: 'transparent',
            },
            '&:before': {
                content: '""',
                zIndex: -1,
                position: 'absolute',
                height: '100%',
                width: 'calc(100% - 8px)',
                left: 0,
                top: 0,
                backgroundColor: theme.palette.primary['50'],
                borderRadius: '0px 24px 24px 0px',
            },
            '&$open:hover:before': {
                backgroundColor: theme.palette.primary['100'],
            },
            '& $listIcon': {
                color: theme.palette.primary['500'],
            },
        },
        listItemText: {
            paddingLeft: '1px',
        },
        // these must be defined, even if empty so we can reference them in other nested rules
        listIcon: {},
        open: {},
    };
};
export default styles;

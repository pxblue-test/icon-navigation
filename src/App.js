// React/Material/PXBlue Basics
  import { Switch, Route, NavLink } from 'react-router-dom'
  import React from 'react';
  import {EatonColors} from '@pxblue/themes/react';
  import { withStyles } from '@material-ui/core/styles';

// Material-UI Components
  import AppBar from '@material-ui/core/AppBar';
  import Divider from '@material-ui/core/Divider';
  import Drawer from '@material-ui/core/Drawer';
  import Hidden from '@material-ui/core/Hidden';
  import IconButton from '@material-ui/core/IconButton';
  import List from '@material-ui/core/List';
  import ListItem from '@material-ui/core/ListItem';
  import ListItemIcon from '@material-ui/core/ListItemIcon';
  import ListItemText from '@material-ui/core/ListItemText';
  import ListSubheader from '@material-ui/core/ListSubheader';
  import Toolbar from '@material-ui/core/Toolbar';
  import Typography from '@material-ui/core/Typography';

// Material-UI Icons
  import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
  import FlagIcon from '@material-ui/icons/Flag';
  import FolderIcon from '@material-ui/icons/Folder';
  import InfoIcon from '@material-ui/icons/Info';
  import LocalOfferIcon from '@material-ui/icons/LocalOffer';
  import MenuIcon from '@material-ui/icons/Menu';
  import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
  import SendIcon from '@material-ui/icons/Send';
  import SettingsIcon from '@material-ui/icons/Settings';
  import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';

// Main routing controller
  import Main from './router/main';

// Additional styling elements
  import './style.css';
  import styles from './styles/styleClasses';
  import Circle from './utilities/circle';

/*
The container for the entire app, including the common side-navigation panel and the main body panel.
*/
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showUserMenu: false,
      drawerOpen: false
    }
  }

  toggleDrawer() {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  }

  toggleNavMenu() {
    this.setState({ showUserMenu: !this.state.showUserMenu });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        {this.getMobileNavigationMenu()}
        <div>
          <AppBar position="static" color="primary">
            <Toolbar className={classes.toolbar}>
              <IconButton color="inherit" onClick={() => this.toggleDrawer()}>
                <MenuIcon/>
              </IconButton>
              <Typography variant="title" color="inherit">Selected Page Name</Typography>
            </Toolbar>
          </AppBar>
          
          <Main />
        </div>
      </div>
    );
  }

  /*
    The functions below have been used to abstract various pieces of the navigation
    menu. This allows them to be shared between the mobile size navigation and the 
    desktop size.
  */

  // returns the layout for the panel of main application pages
  getPrimaryNavigation(){
    const { classes } = this.props;
    return(
      <List subheader={
        <ListSubheader 
          className={classes.subheader}
          style={{
            position: 'unset'
          }}
        >
          Monitor
        </ListSubheader>
      }>
        <Divider />
        <this.NavigationListItem 
          title={'Alerts'} 
          route={'/alerts'}
          icon={<MoveToInboxIcon />} 
        />
        <this.NavigationListItem 
          title={'Schedule'} 
          route={'/schedule'}
          icon={<SendIcon />} 
        />
        <this.NavigationListItem 
          title={'Products'} 
          route={'/products'}
          icon={<FolderIcon />} 
        />
        <this.NavigationListItem 
          title={'Event Log'} 
          route={'/eventlog'}
          icon={<InfoIcon />} 
        />
        <this.NavigationListItem 
          title={'Settings'} 
          route={'/settings'}
          icon={<SettingsIcon />} 
        />
      </List>
    );
  }

  // returns the layout for the panel of secondary application pages (About, License)
  getSecondaryNavigation(){
    const {classes} = this.props;
    return (
      <List style={{flex: '0 0 auto' }} 
        subheader={
          <ListSubheader 
            className={classes.subheader}
            style={{
              position: 'unset' 
            }}
          >About
            <span 
              style={{ 
                position: 'absolute', 
                right: '0px', 
                paddingRight: '16px' 
              }}
            >Software Version v1.0.3</span>
          </ListSubheader>
        }>
        <Divider />
        <this.NavigationListItem 
          title={'User Guide'} 
          route={'/userguide'}
          icon={<FlagIcon />} 
        />
        <this.NavigationListItem 
          title={'License Agreement'} 
          route={'/license'}
          icon={<LocalOfferIcon />} 
        />
      </List>
    );
  }

  // returns the layout for the panel of user pages (Profile, Settings)
  getUserNavigation(){
    const {classes} = this.props;
    return (
      <List subheader={
        <ListSubheader 
          className={classes.subheader}
          style={{
            position: 'unset'
          }}
        >User Account</ListSubheader>
      }>
        <Divider />
        <this.NavigationListItem 
          title={'User Profile'} 
          route={'/profile'}
          icon={<SettingsIcon />} 
        />
        <this.NavigationListItem 
          title={'Log Out'} 
          route={'/logout'}
          icon={<SubdirectoryArrowRightIcon />} 
        />
      </List>
    );
  }

  // returns the layout for the user details panel (mobile-only)
  getUserDetails(){
    const {classes} = this.props;
    return (
      <div className={"flexVertBottom " + classes.header} >
        <Circle/>
        <div 
          style={{ 
            cursor: "pointer", 
            width: '100%' 
          }} 
          onClick={() => this.toggleNavMenu()}
        >
          <Typography 
            variant="subheading" 
            color="inherit" 
            style={{lineHeight:'1rem'}}
          >User Name</Typography>
          <div className={'flexHor'}>
            <Typography 
              variant="subheading" 
              color="inherit" 
              style={{lineHeight:'1rem'}}
            >username@domain.com</Typography>
            <div style={{flex: '1 1 0px'}}/>
            <ExpandMoreIcon style={this.state.showUserMenu ? {transform: 'rotate(180deg)'} : null}/>
          </div>
        </div>
      </div>
    );
  }

  // returns the navigation drawer used at mobile resolution
  getMobileNavigationMenu(){
    const { classes } = this.props;
    return (
      <Drawer 
        open={this.state.drawerOpen} 
        onClose={() => this.toggleDrawer()}
        classes={{paper: classes.drawer}}
      >
        <div 
          className={"flexVert"} 
          style={{ 
            height: '100%', 
            width: '100%' 
          }}
        > 
          {this.getUserDetails()}
          <div style={{flex: '1 1 0px', overflowY: 'auto'}}>
            {this.state.showUserMenu ? this.getUserNavigation() : this.getPrimaryNavigation()}
            <div style={{ flex: '1 1 0px' }} />
            <Divider />
            {this.getSecondaryNavigation()}
          </div>
        </div>
      </Drawer>
    );
  }

  NavigationListItem = ({title, route, icon}) => {
    const {classes} = this.props;
    const open = (this.state.drawerOpen);
    const action = () => this.setState({drawerOpen: false});
    return (
      <ListItem 
        className={classes.listItem + (open ? ' open' : '')} 
        activeClassName={'listItemSelected'}
        component={NavLink} to={route}
        onClick={() => action()} 
      >
        <ListItemIcon className="listIcon">
          {icon}
        </ListItemIcon>
        <ListItemText inset 
          className={classes.listItemText}
          primary={title}
        />
      </ListItem>
    );
  }
}
export default withStyles(styles)(App);

import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { withRouter } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import MossensLogo from '../components/Menu/images/logo.png'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1
    }
  },
  headerOptions: {
    display: "flex",
    flex: 1,
    justifyContent: "space-evenly",
  },
  navColor: {
    color: '#c1a35f',
    fontWeight: 'bolder'
  }
}));

const Header = (props) => {
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = pageURL => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const handleButtonClick = pageURL => {
    history.push(pageURL);
  };

  const menuItems = [
    {
      menuTitle: "Home",
      pageURL: "/"
    },
    {
      menuTitle: "Contact",
      pageURL: "/contact"
    },
    {
      menuTitle: "About",
      pageURL: "/about"
    },
    {
      menuTitle: "Menu",
      pageURL: "/menu"
    },
    {
      menuTitle: "Galery",
      pageURL: "/galery"
    },
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: 'black' }}>
        <Toolbar>
          <Typography
            variant="h6"
            className={classes.title}
            onClick={() => handleButtonClick("/")}
            style={{ cursor: "pointer" }}
          >
            <img style={{ width: '8em', display: 'flex' }} src={MossensLogo} alt="logo" />
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon style={{fontSize:'2em'}}/>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuItems.map(menuItem => {
                  const { menuTitle, pageURL } = menuItem;
                  return (
                    <MenuItem onClick={() => handleMenuClick(pageURL)}>
                      {menuTitle}
                    </MenuItem>
                  );
                })}
              </Menu>
            </>
          ) : (
              <div className={classes.headerOptions}>
                <Button
                  className={classes.navColor}
                  onClick={() => handleButtonClick("/")}
                >
                  HEM
              </Button>
                <Button
                  className={classes.navColor}
                  onClick={() => handleButtonClick("/menu")}
                >
                  MENY
              </Button>
                <Button
                  className={classes.navColor}
                  onClick={() => handleButtonClick("/contact")}
                >
                  KONTAKT
              </Button>
                <Button
                  className={classes.navColor}
                  onClick={() => handleButtonClick("/about")}
                >
                  OM OSS
              </Button>
                <Button
                  className={classes.navColor}
                  onClick={() => handleButtonClick("/galery")}
                >
                  GALERY
              </Button>
              </div>
            )}   
          <Button
          variant="contained"
          onClick={() => handleButtonClick('/login')}
          style={{ backgroundColor:'#c1a35f',fontWeight:'bolder' }}
          startIcon={<PersonIcon />}
          >
            Logga in
          </Button>
        </Toolbar>
      </AppBar>

    </div>
  );
};

export default withRouter(Header);
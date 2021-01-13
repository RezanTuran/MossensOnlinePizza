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
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
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
}));

const Header = props => {
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
    {
      menuTitle: "Cart",
      pageURL: "/cart"
    },
    {
      menuTitle: "Admin",
      pageURL: "/admin"
    },
   
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            className={classes.title}
            onClick={() => handleButtonClick("/")}
            style={{ cursor: "pointer" }}
          >
            Mossens Pizzeria
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
                <MenuIcon />
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
                  variant="contained"
                  onClick={() => handleButtonClick("/")}
                >
                  HEM
              </Button>
              <Button
                  variant="contained"
                  onClick={() => handleButtonClick("/menu")}
                >
                  MENY
              </Button>
                <Button
                  variant="contained"
                  onClick={() => handleButtonClick("/contact")}
                >
                  KONTAKT
              </Button>
                <Button
                  variant="contained"
                  onClick={() => handleButtonClick("/about")}
                >
                  OM OSS
              </Button>
                <Button
                  variant="contained"
                  onClick={() => handleButtonClick("/galery")}
                >
                  GALERY
              </Button>
              </div>
            )}
          <ShoppingCartIcon
            variant="contained"
            onClick={() => handleButtonClick("/cart")}
            style={{ cursor: "pointer" }}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Header);

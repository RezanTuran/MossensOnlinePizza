import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link} from "react-router-dom";
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';

export const mainListItems = (

  <div>
    
    <ListItem button >
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Admin Panel" />
    </ListItem>

    <Link to="/order" style={{ textDecoration: 'none',color:'inherit' }}>
    <ListItem button >
      <ListItemIcon>
        <ShoppingCartIcon/>
      </ListItemIcon>
      <ListItemText primary="Beställningar" />
    </ListItem>
    </Link>

    <Link to="/register" style={{ textDecoration: 'none',color:'inherit' }}>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Registera Admin" />
    </ListItem>
    </Link>

    <Link to="/insertPizza" style={{ textDecoration: 'none',color:'inherit' }}>
    <ListItem button>
      <ListItemIcon>
        <LocalPizzaIcon />
      </ListItemIcon>
      <ListItemText primary="Lägg till pizza" />
    </ListItem>
    </Link>

    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrationer" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Sparade rapporter</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Denna månad" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Förra kvartalet" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Årsskiftet" />
    </ListItem>
  </div>
);
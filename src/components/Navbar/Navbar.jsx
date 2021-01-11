import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './Navbar.css'

export default function SearchAppBar() {

  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" noWrap>
            Shorter URL
          </Typography>
        </Toolbar>
      </AppBar>
    </Router>
  );
}

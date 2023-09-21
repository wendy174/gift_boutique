import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'; 
import { useUser } from './UserContext';




export default function ButtonAppBar() {

  const { currentUser } = useUser();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: '#b96eaa', boxShadow: 'none' }}>
        <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
              <span> Welcome {currentUser ? currentUser.first_name : "Guest"}!</span>
        </Box>
          <Button color="inherit" component={Link} to='/'>Home</Button>
          <Button color="inherit" component={Link} to="/itemform">Form</Button>
          <Button color="inherit" component={Link} to='/cart'>Cart</Button>
          <Button color="inherit" component={Link} to='/login'>Login</Button>
          <Button color="inherit" component={Link} to='/signup'>Sign Up</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


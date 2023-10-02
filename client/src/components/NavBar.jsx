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
import { auth } from "./FireBase.jsx";


export default function ButtonAppBar() {

  const { currentUser, currentUserDb, updateCurrentUser } = useUser();


  function handleLogOut() { 
    signOut(auth).then(() => {
      updateCurrentUser(null, null) 
      console.log(currentUser.first_name)
    }).catch((error) => {
      console.error('Error:', error)
    });

  }


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: '#b96eaa', boxShadow: 'none' }}>
        <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
              <span> Welcome {currentUserDb ? currentUserDb.first_name : "Guest"}!</span>
        </Box>
          <Button color="inherit" component={Link} to='/'>Home</Button>
          <Button color="inherit" component={Link} to="/itemform">Form</Button>
          <Button color="inherit" component={Link} to='/cart'>Cart</Button>
          <Button color="inherit" component={Link} to='/login'>Login</Button>
          <Button color="inherit" onClick={handleLogOut} component={Link} to='/'>Logout</Button>
          <Button color="inherit" component={Link} to='/signup'>Sign Up</Button>

        </Toolbar>
      </AppBar>
    </Box>
  );
}


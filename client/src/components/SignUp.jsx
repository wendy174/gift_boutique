import { auth } from "./FireBase.jsx";
import { createUserWithEmailAndPassword } from "firebase/auth"; 
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState} from 'react'
import { useNavigate } from "react-router-dom";
import { useUser } from './UserContext';


const theme = createTheme();

export default function SignUp() {

const [newCustomer, setNewCustomer] = useState({ 
    first_name:'',
    last_name: '', 
    email: '', 
    password:'', 
})
const navigate = useNavigate(); 
const [errors, setErrors] = useState([]); 
const { updateCurrentUser } = useUser();

const handleChange = (e) => {
  setNewCustomer({...newCustomer, [e.target.name]: e.target.value})
}

const handleSubmit = async (e) => { 
  e.preventDefault();
  
  // First, sign up the user using Firebase
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, newCustomer.email, newCustomer.password);
    const user = userCredential.user;
    
    // Second, make a POST request to your API to save the user in your database
    const resp = await fetch('/api/customers', { 
      method: 'POST', 
      headers: { 
        "Content-Type": 'application/json', 
      }, 
      body: JSON.stringify({
        ...newCustomer,
        firebase_uid: user.uid  // The uid provided by Firebase
      })
    });


    if (!resp.ok) {
      throw new Error(`HTTP error! status: ${resp.status}`);
    }

    const myCustomer = await resp.json();
    
    updateCurrentUser(user, myCustomer);
    navigate('/'); 

   
  } catch(error) {
    console.error('An error occurred:', error);
    setErrors([...errors, error.message]); // Append the new error to the existing errors
  }
}


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">

        <Box
          sx={{
            marginTop: 8,
            marginBottom: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '16px', 
            border: '1px solid #ddd', 
            borderRadius: '8px' 
          }}
          style={{ backgroundColor: 'white', border: '1px solid #aaa' }}

        
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form"  noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
          <TextField
              margin="normal"
              required
              fullWidth
              id="first_name"
              label="First Name"
              name="first_name"
              autoComplete="email"
              autoFocus
              value={newCustomer.first_name}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="last_name"
              label="Last Name"
              name="last_name"
              autoFocus
              value={newCustomer.last_name}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              value={newCustomer.email}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={newCustomer.password}
              onChange={handleChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Typography component="h3" variant="h6" style={{ color: 'purple', textAlign: 'center'}}>
                {errors? <div>{errors}</div>:null}
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: '#b96eaa', }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );

}

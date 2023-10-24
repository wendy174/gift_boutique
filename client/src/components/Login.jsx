import { auth, googleProvider, githubProvider } from "./FireBase.jsx";
import { browserSessionPersistence, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, setPersistence } from "firebase/auth"; 
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState} from 'react'
import { useNavigate, Link } from "react-router-dom";
import GoogleIcon from './GoogleIcon';
import { useUser } from './UserContext';



const theme = createTheme();

export default function SignIn() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const [errors, setErrors] = useState([])
  const { currentUser, updateCurrentUser } = useUser();

  

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
  } catch (error) {
    console.error(error);
  }
};

const handleSignIn = async (e) => {
  e.preventDefault();

  try {
    // Firebase login
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user; // userCred contains user related data
    const token = await user.getIdToken(); // authen token 

    // fetch additional customer data
    // token in headers to ensure request is authorized
    const resp = await fetch(`/api/customers/${user.uid}`, { 
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (resp.ok) { 
      const userInfoFromDb = await resp.json(); // user info from db
      updateCurrentUser(user, userInfoFromDb); 
      navigate('/')
   
    } else {
      throw new Error('Could not fetch additional user info');
    }

  } catch (error) {
    console.error('Error during login:', error);
    setErrors([...errors, error.message]);
  }
};


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
            border: '1px solid #aaa',
            borderRadius: '8px'
          }}
          style={{ backgroundColor: 'white', border: '1px solid #aaa' }}

        
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form"  noValidate sx={{ mt: 1 }}  onSubmit={handleSignIn}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
             {/* {errors.length > 0 && <div>Errors: {errors.join(', ')}</div>} */}
            <Typography component="h3" variant="h6" style={{ color: 'purple', textAlign: 'center'}}>
                {errors? <div>{errors}</div>:null}
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSignIn}
            >
              Sign In
            </Button>
            <Button
                variant="outlined"
                color="primary"  
                fullWidth
                startIcon={<GoogleIcon />}
                onClick = {signInWithGoogle}
                >
                Sign in with Google
            </Button>
            <Grid container>
              <Grid item xs>
              
              </Grid>
              <br>
              </br>
              <Grid item>
                <Link to={`/signup`}>Don't have an account? Sign up</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>

      </Container>
    </ThemeProvider>
  );
}


// Combines Firebase basic user data and additional user info from api 
      // user = firebase basic user data 
      // userInfo user info from api 
      // const completeUserInfo = { ...user, ...userInfo };
      // console.log("user in login is:", user, "and userInfo is", userInfo);
    


      // Update your app's state with the logged-in user info
      // updateCurrentUser(completeUserInfo);
import { auth } from "./FireBase.jsx";
import { createUserWithEmailAndPassword } from "firebase/auth"; 
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
import GithubIcon from './GithubIcon.jsx'



const theme = createTheme();

export default function SignIn() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const [errors, setErrors] = useState([])

//   console.log(auth?.currentUser?.email)

  const handleSignIn = async () => { 
    try { 
    await createUserWithEmailAndPassword(auth, email, password)
    } catch (err) { 
        console.error(err)
    }
}



  return (

    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '16px', 
            border: '1px solid #ddd', 
          borderRadius: '8px' 
          }}
        
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onClick= {handleSignIn} noValidate sx={{ mt: 1 }}>
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
            <Typography component="h3" variant="h6" style={{ color: 'purple', textAlign: 'center'}}>
                {errors? <div>{errors}</div>:null}
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Button
                variant="outlined"
                color="primary"  // or any other standard color
                fullWidth
                startIcon={<GoogleIcon />}
                // use startIcon instead of startDecorator
                >
                Sign in with Google
            </Button>
            <Button
                variant="outlined"
                color="primary"  // or any other standard color
                fullWidth
                startIcon={<GithubIcon />}
              // use startIcon instead of startDecorator
                >
                Sign in with Google
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
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

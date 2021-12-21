import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
    Grid, 
    TextField, 
    Button, 
    Avatar,
    CssBaseline,
    Box,
    Typography,
    Container
} from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { loginUser } from '../../actions/authActions';
import Navbar from '../partials/Navbar';

const theme = createTheme();

const Login = (props) => {
    const [ errors, setErrors ] = useState({});
    const emailRef = useRef();
    const passwordRef = useRef();

    useEffect(() => {
        if(props.auth.isAuthenticated) props.history.push("/dashboard");
        if(props.errors !== errors) setErrors(props.errors);
    }, [props, errors]);

    const handleClick = e => {
        e.preventDefault();

        const userData = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };

        props.loginUser(userData);
    }

    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                >
                    
                <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                    <LockIcon color="secondary" />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <Box component="form" noValidate sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField 
                                id="email" 
                                label="Email Address" 
                                variant="outlined"
                                fullWidth 
                                required 
                                type="email"
                                inputRef={emailRef} 
                                error={Boolean(errors.email) || Boolean(errors.incorrect)} 
                                helperText={errors.email || errors.incorrect} 
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                                id="password" 
                                label="Password" 
                                variant="outlined" 
                                fullWidth 
                                required 
                                type="password" 
                                inputRef={passwordRef} 
                                error={Boolean(errors.password) || Boolean(errors.incorrect)} 
                                helperText={errors.password}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        color="primary" 
                        onClick={handleClick}
                        style={{ marginTop: 23 }}
                    >
                        Login
                    </Button>
                    <Grid item style={{ marginTop: 23 }}>
                        <Link to="/register">
                            Don't have an account? Register
                        </Link>
                    </Grid>
                </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);

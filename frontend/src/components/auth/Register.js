import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
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
import { registerUser } from '../../actions/authActions';
import Navbar from '../partials/Navbar';

const theme = createTheme();

const Register = (props) => {
    const [ errors, setErrors ] = useState({});
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const password2Ref = useRef();

    useEffect(() => {
        if (props.auth.isAuthenticated) props.history.push('/dashboard');
        if (props.errors !== errors) setErrors(props.errors);
    }, [props, errors]);

    const handleClick = (e) => {
        e.preventDefault()

        const userData = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password2: password2Ref.current.value
        }

        props.registerUser(userData, props.history);
    }

    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 18,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                        <LockIcon color="secondary" />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Register
                    </Typography>
                <Box component="form" noValidate sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField 
                            id="name" 
                            label="Name" 
                            variant="outlined"
                            placeholder="Enter your name" 
                            fullWidth 
                            required 
                            type="text" 
                            inputRef={nameRef} 
                            error={Boolean(errors.name)} 
                            helperText={errors.name} 
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            id="email" 
                            label="Email Address" 
                            variant="outlined"
                            fullWidth 
                            required 
                            inputRef={emailRef} 
                            error={Boolean(errors.email) || Boolean(errors.incorrect)} 
                            helperText={errors.email || errors.incorrect} 
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            id="password" 
                            label="Password" 
                            fullWidth 
                            required 
                            type="password" 
                            variant="outlined"
                            inputRef={passwordRef} 
                            error={Boolean(errors.password) || Boolean(errors.incorrect)} 
                            helperText={errors.password}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            id="password2" 
                            label="Confirm Password" 
                            variant="outlined"
                            fullWidth 
                            required 
                            type="password"
                            inputRef={password2Ref} 
                            error={Boolean(errors.password2)} 
                            helperText={errors.password2}
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
                        Register
                    </Button>
                    <Grid item style={{ marginTop: 23 }}>
                        <Link to="/login">
                            Already have an account? Login
                        </Link>
                    </Grid>
                </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(Register);

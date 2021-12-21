import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Container, Grid, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
        height: "75vh"
    },
    gridContainer: {
        height: "inherit"
    },
    bodyText: {
        fontSize: "23px",
        color: theme.palette.secondary.main
    },
    link: {
        textDecoration: "none",
        marginLeft: "23px",
    },
    btns: {
        width: "135px",
        fontSize: "18px",
        background: theme.palette.secondary.main
    }
}));

const Landing = () => {
    const classes = useStyles();
    
    return (
        <Container className={classes.container}>
            <Grid 
                container 
                direction="column" 
                justifyContent="center" 
                alignItems="center" 
                className={classes.gridContainer}
            >
                <Grid 
                    container 
                    direction="column" 
                    justifyContent="center" 
                    alignItems="center" 
                    item
                >
                    <h1 style={{ marginTop: "23px", color: "#0f076e"}}>
                        Base Login/Auth App
                    </h1>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    item
                >
                    <Link to="/register" className={classes.link}>
                        <Button 
                            className={classes.btns}
                            variant="contained" 
                            color="primary"
                        >
                            Register
                        </Button>
                    </Link>
                    <Link to="/login" className={classes.link}>
                        <Button 
                            className={classes.btns}
                            variant="contained" 
                            color="primary"
                        >
                            Login
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Landing;

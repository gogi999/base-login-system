import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { makeStyles, Container, Grid, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import API from '../../utils/apiHelper';

const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        height: "75vh",
        justifyContent: "center",
        alignItems: "center"
    },
    gridContainer: {
        height: "inherit",
    },
    bodyText: {
        color: theme.palette.secondary.contrastText
    },
    link: {
        color: "white",
        textDecoration: "none"
    }
}));

const Dashboard = (props) => {
    const { user } = props.auth;
    const classes = useStyles();

    useEffect(() => {
        API
            .getUser()
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }, []);

    const handleLogout = (e) => {
        e.preventDefault();
        props.logoutUser();
    }

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
                    <h4>
                        <b>Hey there,</b> {user.name}!
                        <p>
                            You are logged into a <b>Base Login System App!</b> 
                        </p>
                    </h4>
                    <Button 
                        variant="contained" 
                        color="secondary" 
                        onClick={handleLogout}     
                    >
                        <Link to="/" className={classes.link}>
                            Logout
                        </Link>
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
}

Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, { logoutUser })(Dashboard);

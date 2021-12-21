import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Typography } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  }
}));


const Navbar = () => {
    const classes = useStyles();
    return (
        <AppBar 
            className={classes.appBar} 
            position="static" 
            color="inherit"
        >
            <div className={classes.brandContainer}>
                <Link to="/">
                    <HomeIcon
                        style={{
                            color: "#ab132b",
                            fontSize: 50
                        }} 
                    />
                </Link>
                <Typography 
                    component={Link} 
                    to="/" 
                    className={classes.heading} 
                    variant="h2" 
                    align="center"
                />
            </div>
        </AppBar>
    );
};

export default Navbar;
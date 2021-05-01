import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

export default function SimpleMenu() {
    const useStyles = makeStyles((theme) => ({
        link: {
            margin: theme.spacing(1, 1.5),
        },
        toolbarTitle: {
            flexGrow: 1,
        },
    }));

	const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          Menu
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}
            href="#"
            color="primary"
            variant="outlined"
            className={classes.link}
            component={NavLink}
            to="/"            
          >Home</MenuItem>            
          <MenuItem onClick={handleClose}
            href="#"
            color="primary"
            variant="outlined"
            className={classes.link}
            component={NavLink}
            to="/about"            
          >About Me</MenuItem>
          <MenuItem onClick={handleClose}
            href="#"
            color="primary"
            variant="outlined"
            className={classes.link}
            component={NavLink}
            to="/projects"            
          >Projects</MenuItem>
          <MenuItem onClick={handleClose}
            href="#"
            color="primary"
            variant="outlined"
            className={classes.link}
            component={NavLink}
            to="/contact"            
          >Contact</MenuItem>                    
        </Menu>
      </div>
    );
}
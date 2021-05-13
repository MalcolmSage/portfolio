import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import SimpleMenu from './menu'
import PropTypes from 'prop-types';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';


const useStyles = makeStyles((theme) => ({
	appBar: {
		borderBottom: `2px solid #4E5B31`,
		backgroundColor: 'rgba(250, 250, 250, 0.90)',
	},
	toolbarTitle: {
		flexGrow: 1,
	},
}));

function ElevationScroll(props) {
	const { children, window } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
	  disableHysteresis: true,
	  threshold: 0,
	  target: window ? window() : undefined,
	});
  
	return React.cloneElement(children, {
	  elevation: trigger ? 4 : 0,
	});
  }
  
  ElevationScroll.propTypes = {
	children: PropTypes.element.isRequired,
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
  };

function Header(props) {
	const classes = useStyles();
	return (
		<React.Fragment >
			<ElevationScroll {...props} >
				<AppBar
					elevation={0}
					className={classes.appBar}
				>
					<Toolbar className={classes.toolbar} >
						<Typography
							variant="h6"
							color="black"
							noWrap
							className={classes.toolbarTitle}
							
						>
							<Link
								component={NavLink}
								to="/"
								underline="none"
								color="textPrimary"
								
							>
								Malcolm Sage
							</Link>
						</Typography>
						< SimpleMenu />
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<br/>
		</React.Fragment>
	);
}

export default Header;
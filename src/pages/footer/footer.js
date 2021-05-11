import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	footer: {
		borderTop: `1px solid ${theme.palette.divider}`,
		marginTop: theme.spacing(8),
		// paddingTop: theme.spacing(3),
		paddingBottom: theme.spacing(1),
		[theme.breakpoints.up('sm')]: {
			paddingTop: theme.spacing(6),
			paddingBottom: theme.spacing(6),
		},
	},
}));

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="">
				Malcolm Sage
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

function Footer() {
	const classes = useStyles();
	return (
		<React.Fragment>
			<Container maxWidth="md" component="footer" className={classes.footer}>
				<Box >
					<Copyright />
				</Box>
			</Container>
		</React.Fragment>
	);
}

export default Footer;
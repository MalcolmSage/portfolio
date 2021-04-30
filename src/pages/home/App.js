import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';

import Featured from './featured'
import AboutMe from './aboutme'
import Blog from './blog'
import Social from './social'




const useStyles = makeStyles((theme) => ({
	root: {
	  flexGrow: 1,
	  
	},
	paper: {
	  padding: theme.spacing(2),
	  textAlign: 'center',
	  color: theme.palette.text.secondary,
	},
  }));

function App() {
	const classes = useStyles();
	return (
		<React.Fragment>
		<CssBaseline />
			<div className={classes.root}>
				<Grid container spacing={1} justify='center'>
					<Featured/>
					<AboutMe />
					<Blog />
					<Social />
				</Grid>
			</div>
		</React.Fragment>
	);
}
export default App;
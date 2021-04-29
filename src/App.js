import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



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
			<div className={classes.root}>
				<Grid container spacing={1}>
					<Grid item xs={12}>
					<Paper className={classes.paper}>xs=12</Paper>
					</Grid>
					<Grid item xs={12} sm={4}>
					<Paper className={classes.paper}>xs=6 sm=3</Paper>
					</Grid>
					<Grid item xs={12} sm={4}>
					<Paper className={classes.paper}>xs=6 sm=3</Paper>
					</Grid>
					<Grid item xs={12} sm={4}>
					<Paper className={classes.paper}>xs=6 sm=3</Paper>
					</Grid>
				</Grid>
			</div>
		</React.Fragment>
	);
}
export default App;
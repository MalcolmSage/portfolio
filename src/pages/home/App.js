import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Featured from './featured'
import AboutMe from './aboutme'
import Blog from './blog'
import Social from './social'

const useStyles = makeStyles((theme) => ({

}));

function App() {
    const classes = useStyles();
	return (
		<React.Fragment>
		<CssBaseline />
			<Grid container spacing={1} justify='flex-start'>
				<Featured/>
				<AboutMe />
				<Blog />
				<Social />
			</Grid>
		</React.Fragment>
	);
}
export default App;
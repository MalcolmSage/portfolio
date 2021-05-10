import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Featured from './featured'
import About from '../about/about'
import Projects from '../projects/App'
import Contact from '../contact/contact'

function App() {
	return (
		<React.Fragment>
			<Grid container spacing={2} justify='flex-start'>
                <About />
                <Projects />
                <Contact />
            </Grid>
		</React.Fragment>
	);
}
export default App;
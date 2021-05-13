import React from 'react';
import Grid from '@material-ui/core/Grid';
import About from '../about/about'
import Projects from '../projects/App'
import Contact from '../contact/contact'

function App() {
	return (
		<React.Fragment>
			<Grid container spacing={2} justify='flex-start'>
                <About />
                <Projects id='Projects'/>
                <Contact />
            </Grid>
		</React.Fragment>
	);
}
export default App;
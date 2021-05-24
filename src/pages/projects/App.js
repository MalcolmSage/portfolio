import React from 'react';

import Projects from './components/projects';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: 10,
    },
}));


function Project() {
    const classes = useStyles();

    return (
        <Grid item xs={12} md={12} id="projects">
        <Card className={classes.root} square elevation='1'>
            <CardContent>
                <Typography variant="h4" gutterBottom >
                    Projects
                </Typography>
                <Projects /> 
            </CardContent>            
        </Card>
    </Grid> 
    );
}

export default Project;
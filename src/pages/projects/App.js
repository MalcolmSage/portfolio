import React, { useEffect, useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Projects from './components/projects';
import ProjectLoadingComponent from './components/projectLoading';
import Featured from './components/featured';
import FeaturedLoadingComponent from './components/featuredLoading';
import axiosInstance from '../../axios';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: 10,
    },
}));


function Project() {
    const classes = useStyles();
    const ProjectLoading = ProjectLoadingComponent(Projects);
    const FeaturedLoading = FeaturedLoadingComponent(Featured);
    const [projectState, setProjectState] = useState({
        loading: true,
        fLoading: true,
        projects: null,
        featured: null,
    });
    useEffect(() => {
        axiosInstance.get('projects/').then((res) => {
            const allProjects = res.data;
            const allFeatured = allProjects.filter(project => project.featured === true)
            setProjectState({ loading: false, projects: allProjects, featured: allFeatured });
            // console.log(allFeatured)
            // console.log(allProjects)
        });
    }, [setProjectState]);

    return (
        <div className='Project'>
        <Grid container>   
            <Grid container justify='center' className={classes.root}>
                <Box bgcolor="#4E5B31" p={.5} marginTop='11px' borderRadius="borderRadius">
                    <Typography variant="h3" align='center'>
                        <Box color="white">
                            Featured Projects
                        </Box>
                    </Typography>
                </Box>
            </Grid>
            <FeaturedLoading isLoading={projectState.loading} projects={projectState.featured} />
            <Grid container justify='center' className={classes.root} >
                <Box bgcolor="#4E5B31" p={.5} marginTop='11px' borderRadius="borderRadius" >
                    <Typography variant="h4" align='center' >
                        <Box color="white">
                            All Projects
                        </Box>
                    </Typography>
                </Box>
            </Grid>


            <ProjectLoading isLoading={projectState.loading} projects={projectState.projects} />
        </Grid> 
        </div>
    );
}

export default Project;
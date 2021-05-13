import React, { useEffect, useState } from 'react';
import Projects from './components/projects';
import ProjectLoadingComponent from './components/projectLoading';
// import Featured from './components/featured';
// import FeaturedLoadingComponent from './components/featuredLoading';
import axiosInstance from '../../axios';

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
    const ProjectLoading = ProjectLoadingComponent(Projects);
    // const FeaturedLoading = FeaturedLoadingComponent(Featured);
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
        <Grid item xs={12} md={12} id="projects">
        <Card className={classes.root} square elevation='1'>
            <CardContent>
                <Typography variant="h4" gutterBottom >
                    Projects
                </Typography>
                {/* <FeaturedLoading isLoading={projectState.loading} projects={projectState.featured} /> */}
                <ProjectLoading isLoading={projectState.loading} projects={projectState.projects} /> 
            </CardContent>            
                {/* <Grid container justify='center' className={classes.root} >
                    <Box bgcolor="#4E5B31" p={.5} marginTop='11px' borderRadius="borderRadius" >
                        <Typography variant="h4" align='center' >
                            <Box color="white">
                                All Projects
                            </Box>
                        </Typography>
                    </Box>
                </Grid> */}
                {/* <ProjectLoading isLoading={projectState.loading} projects={projectState.projects} /> */}
        </Card>
    </Grid> 
    );
}

export default Project;
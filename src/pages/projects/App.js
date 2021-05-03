import React, { useEffect, useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Projects from './components/projects';
import ProjectLoadingComponent from './components/projectLoading';
import axiosInstance from '../../axios';

function Project() {
    const ProjectLoading = ProjectLoadingComponent(Projects);
    const [projectState, setProjectState] = useState({
        loading: true,
        projects: null,
    });

    useEffect(() => {
        axiosInstance.get().then((res) => {
            const allProjects = res.data;
            setProjectState({ loading: false, projects: allProjects });
        });
    }, [setProjectState]);

    return (
        <div className='Project'>
            <h1>Projects</h1>
            <ProjectLoading isLoading={projectState.loading} projects={projectState.projects} />
        </div>
    );
}

export default Project;
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjects } from '../redux/projectsSlice';

function ProjectList() {
    const projects = useSelector((state) => state.projects.items);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProjects());
    }, [dispatch]);

    return (
        <div>
            {projects.map((project) => (
                <div key={project.id}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <p>Status: {project.status}</p>
                </div>
            ))}
        </div>
    );
}

export default ProjectList;

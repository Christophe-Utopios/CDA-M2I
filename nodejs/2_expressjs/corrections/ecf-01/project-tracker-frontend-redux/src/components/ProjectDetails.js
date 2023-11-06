import React from 'react';
import { useSelector } from 'react-redux';

function ProjectDetails({ match }) {
    const { projectId } = match.params;
    const project = useSelector((state) => 
        state.projects.items.find(p => p.id === Number(projectId))
    );

    if (!project) return <p>Projet introuvable!</p>;

    return (
        <div>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <p>Status: {project.status}</p>
            
        </div>
    );
}

export default ProjectDetails;

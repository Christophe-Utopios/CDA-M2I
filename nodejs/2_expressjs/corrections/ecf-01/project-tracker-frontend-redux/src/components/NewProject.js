import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProject } from '../redux/projectsSlice';

function NewProject() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('Non débuté');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProject = { name, description, status };
        dispatch(addProject(newProject));
        setName('');
        setDescription('');
    };

    return (
        <div>
            <h2>Ajouter un projet</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Nom du projet"
                />
                <textarea 
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder="Description"
                />
                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
}

export default NewProject;

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
const DATA_PATH = './data.json';

app.use(cors());
app.use(bodyParser.json());

const loadData = () => {
    try {
        const data = fs.readFileSync(DATA_PATH, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
};

const saveData = (data) => {
    fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
};

app.get('/projects', (req, res) => {
    const status = req.query.status;
    const projects = loadData();
    if (status) {
        res.json(projects.filter(project => project.status === status));
    } else {
        res.json(projects);
    }
});

app.post('/projects', (req, res) => {
    const projects = loadData();
    const newProject = req.body;
    newProject.id = Date.now().toString();
    projects.push(newProject);
    saveData(projects);
    res.json(newProject);
});

app.get('/projects/:projectId', (req, res) => {
    const projects = loadData();
    const project = projects.find(p => p.id === req.params.projectId);
    res.json(project);
});

app.put('/projects/:projectId', (req, res) => {
    const projects = loadData();
    const index = projects.findIndex(p => p.id === req.params.projectId);
    Object.assign(projects[index], req.body);
    saveData(projects);
    res.json(projects[index]);
});

app.put('/projects/:projectId/status', (req, res) => {
    const projects = loadData();
    const project = projects.find(p => p.id === req.params.projectId);
    if (!project) {
        return res.status(404).json({ error: "Project not found" });
    }
    project.status = req.body.status;
    saveData(projects);
    res.json(project);
});


app.delete('/projects/:projectId', (req, res) => {
    const projects = loadData();
    const newProjects = projects.filter(p => p.id !== req.params.projectId);
    saveData(newProjects);
    res.json({ status: "deleted" });
});

app.listen(3001);

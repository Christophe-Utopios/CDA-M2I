import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProjects = createAsyncThunk(
  'projects/fetchAll',
  async () => {
    const response = await axios.get('http://localhost:3001/projects');
    return response.data;
  }
);

export const addProject = createAsyncThunk(
  'projects/add',
  async (project) => {
    const response = await axios.post('http://localhost:3001/projects', project);
    return response.data;
  }
);

const projectsSlice = createSlice({
  name: 'projects',
  initialState: { items: [], status: 'idle', error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addProject.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export default projectsSlice.reducer;

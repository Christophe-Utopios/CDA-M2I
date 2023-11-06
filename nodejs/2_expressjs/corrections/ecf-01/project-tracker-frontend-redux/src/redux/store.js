import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from './projectsSlice';

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
  },
});

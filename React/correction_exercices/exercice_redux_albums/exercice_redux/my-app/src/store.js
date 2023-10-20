import { configureStore } from '@reduxjs/toolkit'
import authSlice from './components/auth/authSlice'
import albumSlice from './components/album/albumSlice'


const store = configureStore({
  reducer: {
    auth: authSlice,
    albums: albumSlice
  }
})

export default store
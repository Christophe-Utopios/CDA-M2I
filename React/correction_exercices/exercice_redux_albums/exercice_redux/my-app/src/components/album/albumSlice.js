import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_DB_URL } from "../../firebaseConfig.js";

export const fetchAlbumsAction = createAsyncThunk(
  "albums/fetchAlbumsAction",
  async () => {
    const response = await fetch(`${BASE_DB_URL}albums.json`)

    if (!response.ok) {
      throw new Error("Something went wrong when getting albums...")
    }
    
    const data = await response.json()
    
    const tmpArray = []
    
    for (const key in data) {
      tmpArray.push({id: key, ...data[key]})
    }
    
    return tmpArray
  }
  )
  
  export const deleteAlbumAction = createAsyncThunk(
    'albums/deleteAlbumAction',
    async (albumId, { getState }) => {
      // const token = getState().auth.user.idToken
      const token = localStorage.getItem('token')
      if (token) {
        const response = await fetch(`${BASE_DB_URL}albums/${albumId}.json?auth=${token}`, {
          method: "DELETE"
        })
        
        if (!response.ok) {
        throw new Error("Something went wrong when deleting albums...")
        }
  
        return albumId
      }
  }
)

export const editAlbumAction = createAsyncThunk(
  "albums/editAlbumAction",
  async ({id, ...album}, { getState }) => {
    // const token = getState().auth.user.idToken
    const token = localStorage.getItem('token')
    if (token) {
      const response = await fetch(`${BASE_DB_URL}albums/${id}.json?auth=${token}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(album)
      })
  
      if (!response.ok) {
        throw new Error("Something went wrong when editing album...")
      }
  
      const data = await response.json()
  
      return {id, ...data}
    }
  }
)

export const addAlbumAction = createAsyncThunk(
  "albums/addAlbumAction",
  async (album, { getState }) => {
    // const token = getState().auth.user.idToken
    const token = localStorage.getItem('token')
    if (token) {
      const response = await fetch(`${BASE_DB_URL}albums.json?auth=${token}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(album)
      })
  
      if (!response.ok) {
        throw new Error("Something went wrong when adding album...")
      }
  
      const data = await response.json()
  
      return {id: data.name, ...album}
    }
  }
)

const albumsSlice = createSlice({
  name: "albums",
  initialState: {
    albums: [],
    isLoading: false,
    formMode: "",
    error: null,
    selectedAlbum: null
  },
  reducers: {
    setFormMode : (state, action) => {
        state.formMode = action.payload
        console.log(state.formMode);
    },
    setSelectedAlbum : (state, action) => {
        state.selectedAlbum = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAlbumsAction.pending, (state) => {
      state.isLoading = true
      state.error = null
      state.albums = []
    })

    builder.addCase(fetchAlbumsAction.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
    
    builder.addCase(fetchAlbumsAction.fulfilled, (state, action) => {
      state.isLoading = false
      state.albums = action.payload
    })

    builder.addCase(deleteAlbumAction.fulfilled, (state, action) => {
      state.albums = state.albums.filter(a => a.id !== action.payload)
    })

    builder.addCase(addAlbumAction.fulfilled, (state, action) => {
      state.albums.push(action.payload)
    })

    builder.addCase(editAlbumAction.fulfilled, (state, action) => {
      state.albums = [...state.albums.filter(a => a.id !== action.payload.id), action.payload]
    })
  }
})

export const {setFormMode, setSelectedAlbum} = albumsSlice.actions
export default albumsSlice.reducer
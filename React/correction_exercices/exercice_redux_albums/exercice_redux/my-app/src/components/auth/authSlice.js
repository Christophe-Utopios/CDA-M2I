import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SIGN_IN_URL, SIGN_UP_URL } from "../../firebaseConfig";

export const signInAction = createAsyncThunk(
  "auth/signInAction",
  async (credentials) => {
    const response = await fetch(SIGN_IN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })

    if (!response.ok) {
      throw new Error("Something went wrong when Signing in...")
    }

    const data = await response.json()

    return data
  }
)

export const signUpAction = createAsyncThunk(
  "auth/signUpAction",
  async (credentials) => {
    const response = await fetch(SIGN_UP_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })

    if (!response.ok) {
      throw new Error("Something went wrong when Signing up...")
    }

    const data = await response.json()

    return data
  }
)

const authSlice = createSlice({
  name: "auth",
  initialState: {
    authMode: "Se connecter",
    user: null
  },
  reducers: {
    logOutAction(state, action) {
      state.user = null
      localStorage.removeItem('token')
    },
    setAuthMode: (state, action) => {
        state.authMode = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(signInAction.fulfilled, (state, action) => {
      state.user = action.payload
      console.log(state.user);
      localStorage.setItem('token', action.payload.idToken)
    })
    
    builder.addCase(signUpAction.fulfilled, (state, action) => {
      state.user = action.payload
      console.log(state.user);
      localStorage.setItem('token', action.payload.idToken)
    })
  }
})

export const { logOutAction, setAuthMode } = authSlice.actions

export default authSlice.reducer
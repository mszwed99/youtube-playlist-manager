import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from 'services';
import { LoginPayloadI, RegisterPayloadI } from 'services/AuthService/AuthService.types';
import { AuthStateI } from './authSlice.types';

const initialState: AuthStateI = {
  jwtToken: null,
  isLoading: false,
};

export const register = createAsyncThunk('auth/register', async (payload: RegisterPayloadI) => {
  return await API.AuthService.register(payload);
});

export const login = createAsyncThunk('auth/signup', async (payload: LoginPayloadI) => {
  return await API.AuthService.login(payload);
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: state => {
      state.jwtToken = null;
    },
  },
  extraReducers: {
    [login.pending.toString()]: state => {
      state.isLoading = true;
    },
    [login.rejected.toString()]: (state, action) => {
      state.isLoading = false;
    },
    [login.fulfilled.toString()]: (state, action) => {
      state.isLoading = false;
      state.jwtToken = action.payload.data.accessToken;
    },
    [register.pending.toString()]: state => {
      state.isLoading = true;
    },
    [register.rejected.toString()]: state => {
      state.isLoading = false;
    },
    [register.fulfilled.toString()]: state => {
      state.isLoading = false;
    },
  },
});

export const { logOut } = authSlice.actions;

export default authSlice.reducer;

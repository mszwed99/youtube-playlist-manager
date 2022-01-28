import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from 'services';
import { LoginPayloadI, RegisterPayloadI } from 'services/AuthService/AuthService.types';
import { toast } from 'react-toastify';
import { AuthStateI } from './authSlice.types';

const initialState: AuthStateI = {
  jwtToken: localStorage.getItem('access-token') || null,
  wasAccountCreated: false,
  isLoading: false,
  userInfo: JSON.parse(localStorage.getItem('userInfo')) || null,
};

export const register = createAsyncThunk('auth/register', async (payload: RegisterPayloadI) => {
  return await API.AuthService.register(payload);
});

export const login = createAsyncThunk('auth/signup', async (payload: LoginPayloadI) => {
  return await API.AuthService.login(payload);
});

export const getUserInfo = createAsyncThunk('auth/info', async () => {
  return await API.AuthService.getUserInfo();
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: state => {
      state.jwtToken = null;
      localStorage.removeItem('access-token');
    },
    enterAccountCreatedScreen: state => {
      state.wasAccountCreated = false;
    }
  },
  extraReducers: {
    [login.pending.toString()]: state => {
      state.isLoading = true;
    },
    [login.rejected.toString()]: (state, action) => {
      state.isLoading = false;
      if (action.error.message === 'Request failed with status code 401') {
        toast.error('Login i/lub hasło są błędne');
      } else {
        toast.error(action.error.message);
      }
    },
    [login.fulfilled.toString()]: (state, action) => {
      state.isLoading = false;
      state.jwtToken = action.payload.data.accessToken;
      window.localStorage.setItem('access-token', action.payload.data.accessToken);
    },
    [register.pending.toString()]: state => {
      state.isLoading = true;
    },
    [register.rejected.toString()]: (state, action) => {
      state.isLoading = false;
      if (action.error.message === 'Request failed with status code 409') {
        toast.error('Konto o podanym loginie już istnieje');
      } else {
        toast.error(action.error.message);
      }
    },
    [register.fulfilled.toString()]: (state) => {
      state.isLoading = false;
      state.wasAccountCreated = true;
    },
    [getUserInfo.fulfilled.toString()]: (state, action) => {
      state.userInfo = action.payload.data;
      window.localStorage.setItem('userInfo', JSON.stringify(action.payload.data));
    }
  },
});

export const { logOut, enterAccountCreatedScreen } = authSlice.actions;

export default authSlice.reducer;

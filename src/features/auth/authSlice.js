import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    login: {
      currentUser: null,
      token: '',
      isFetching: false,
      error: false
    },
    logout: {
      isFetching: false,
      error: false
    },
    register: {
      isFetching: false,
      error: false
    }
  },
  reducers: {
    loginStart: (state) => {
      state.login.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.login.isFetching = false;
      state.login.currentUser = action.payload.data;
      state.login.token = action.payload.token;
      state.login.error = false;
    },
    loginFailed: (state) => {
      state.login.isFetching = false;
      state.login.error = true;
    },

    // Logout
    logoutStart: (state) => {
      state.logout.isFetching = true;
      state.logout.error = false;
    },
    logoutSuccess: (state) => {
      state.logout.isFetching = false;
      state.login.currentUser = null;
      state.logout.error = false;
    },
    logoutFailed: (state) => {
      state.logout.isFetching = false;
      state.logout.error = true;
    },

    registerStart: (state) => {
      state.register.isFetching = true;
      state.register.error = false;
    },
    registerSuccess: (state) => {
      state.register.isFetching = false;
      state.register.error = false;
    },
    registerFailed: (state) => {
      state.register.isFetching = false;
      state.register.error = true;
    }
  }
});

export const {
  loginStart,
  loginSuccess,
  loginFailed,

  logoutStart,
  logoutSuccess,
  logoutFailed,

  registerStart,
  registerSuccess,
  registerFailed
} = authSlice.actions;

export default authSlice.reducer; // Exports the reducer as default

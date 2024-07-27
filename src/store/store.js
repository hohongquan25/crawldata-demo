import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'; // Import the default export which is the reducer
// Khôi phục trạng thái từ localStorage
const preloadedState = {
  auth: {
    login: {
      currentUser: !localStorage.getItem('user')
        ? null
        : JSON.parse(localStorage.getItem('user')),
      token: localStorage.getItem('token') || '',
      isFetching: false,
      error: false
    }
  }
};

const store = configureStore({
  reducer: {
    auth: authReducer
  },
  preloadedState
});

export default store;

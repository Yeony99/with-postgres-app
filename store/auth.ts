import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from './index';

interface AuthState {
  user: {
    id: string;
    email: string;
    name: string;
  } | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<{ id: string; email: string, name: string }>) => {
      state.isLoading = false;
      state.user = {...action.payload};
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isLoading = true;
      state.user = null; 
    }
  },
});

export const { loginStart, loginSuccess, loginFailure, logout} = authSlice.actions;

export const login = (email: string, password: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(loginStart());
    // make API request to login
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      const error = await response.text();
      throw new Error(error);
    }
    const { id, name } = await response.json();
    dispatch(loginSuccess({ id, email, name }));
  } catch (error:any) {
    dispatch(loginFailure(error?.message ?? 'error'));
    throw new Error(error.message)
  }
};

export default authSlice.reducer;

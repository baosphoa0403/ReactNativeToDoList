import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchLoginAsyncAction} from './User.action';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {BaseError} from './User.type';
export interface UserState {
  message: string;
  status: 'success' | 'loading' | 'failed';
  isSignOut: boolean;
  isLogin: boolean;
}

const initialState: UserState = {
  message: '',
  status: 'success',
  isSignOut: false,
  isLogin: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logoutUser: state => {
      state.isSignOut = true;
    },
    login: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
    resetMessage: state => {
      state.message = '';
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchLoginAsyncAction.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(fetchLoginAsyncAction.fulfilled, (state, action) => {
      state.status = 'success';
      state.message = action.payload.message;
      AsyncStorage.setItem('token', action.payload.access_token);
    });
    builder.addCase(fetchLoginAsyncAction.rejected, (state, action) => {
      state.status = 'failed';
      state.message = (action.payload as BaseError).message;
    });
  },
});
export const {logoutUser, login, resetMessage} = userSlice.actions;
export default userSlice.reducer;

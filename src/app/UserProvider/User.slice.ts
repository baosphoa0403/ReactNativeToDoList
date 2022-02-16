import {createSlice} from '@reduxjs/toolkit';
import {fetchLoginAsyncAction} from './User.action';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {BaseError} from './User.type';
export interface UserState {
  message: string;
  status: 'success' | 'loading' | 'failed';
}

const initialState: UserState = {
  message: '',
  status: 'success',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchLoginAsyncAction.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(fetchLoginAsyncAction.fulfilled, (state, action) => {
      console.log('run');
      state.status = 'success';
      state.message = action.payload.message;
      AsyncStorage.setItem('token', action.payload.access_token);
    });
    builder.addCase(fetchLoginAsyncAction.rejected, (state, action) => {
      console.log(action);
      state.status = 'failed';
      state.message = (action.payload as BaseError).message;
    });
  },
});
export default userSlice.reducer;

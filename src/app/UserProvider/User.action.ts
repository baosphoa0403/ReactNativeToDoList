import {createAsyncThunk} from '@reduxjs/toolkit';
import {restAPI} from '../../config/api';
import {fetchUserLogin} from './User.service';
import {LoginRequestPayload, LoginResponse} from './User.type';

export const fetchLoginAsyncAction = createAsyncThunk(
  'user/fetchLogin',
  async (payload: LoginRequestPayload, {rejectWithValue}) => {
    try {
      const response: LoginResponse = await fetchUserLogin(payload, restAPI);
      return response;
    } catch (exception) {
      return rejectWithValue(
        Object.assign({response: {data: {}}}, exception).response.data,
      );
    }
  },
);

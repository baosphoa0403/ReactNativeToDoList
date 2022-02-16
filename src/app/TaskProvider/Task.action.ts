import {createAsyncThunk} from '@reduxjs/toolkit';
import {restAPI} from '../../config/api';
import {fetchListTask} from './Task.service';
import {Task} from './Task.type';

export const fetchListTaskActionAsync = createAsyncThunk(
  'user/fetchLogin',
  async (payload: any, {rejectWithValue}) => {
    try {
      const response: Task[] = await fetchListTask(restAPI);
      console.log('fetchListTaskActionAsync');
      console.log(response);

      return response;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  },
);

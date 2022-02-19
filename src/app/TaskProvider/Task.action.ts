import {createAsyncThunk} from '@reduxjs/toolkit';
import {restAPI} from '../../config/api';
import {fetchListTask} from './Task.service';
import {Task} from './Task.type';

export const fetchListTaskActionAsync = createAsyncThunk(
  'user/fetchLogin',
  async (_, {rejectWithValue}) => {
    try {
      // const token = await AsyncStorage.getItem('token');
      const response: Task[] = await fetchListTask(restAPI);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

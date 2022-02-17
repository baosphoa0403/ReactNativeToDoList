import AsyncStorage from '@react-native-async-storage/async-storage';
import {RestClient} from '../../config/api';
import {CreateTask} from '../../pages/Modal/Modal';
import {Task} from './Task.type';

export const fetchListTask = async (
  restClient: RestClient,
): Promise<Task[]> => {
  const token = await AsyncStorage.getItem('token');
  const {data: response} = await restClient.get('/task', {
    headers: {Authorization: `Bearer ${token}`},
  });
  console.log(response);
  return response;
};

export const fetchCreateTask = async (
  data: CreateTask,
  restClient: RestClient,
): Promise<Task> => {
  const token = await AsyncStorage.getItem('token');
  const dataResponse = await restClient.post('/task', data, {
    headers: {Authorization: `Bearer ${token}`},
  });
  return dataResponse.data;
};

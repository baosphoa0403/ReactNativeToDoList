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

export const fetchRemoveTask = async (
  data: number,
  restClient: RestClient,
): Promise<Task> => {
  const token = await AsyncStorage.getItem('token');
  const dataResponse = await restClient.delete(`/task/${data}`, {
    headers: {Authorization: `Bearer ${token}`},
  });
  return dataResponse.data;
};
export const fetchUpdateStatusTask = async (
  data: number,
  restClient: RestClient,
  status: string,
): Promise<Task> => {
  const token = await AsyncStorage.getItem('token');
  console.log(token);
  const dataResponse = await restClient.patch(
    `/task/${data}?status=${status}`,
    {
      headers: {Authorization: `Bearer ${token}`},
    },
  );
  // console.log({...dataResponse});
  return dataResponse.data;
};

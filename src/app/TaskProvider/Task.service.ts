import AsyncStorage from '@react-native-async-storage/async-storage';
import {RestClient} from '../../config/api';
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

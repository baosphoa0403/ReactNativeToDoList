import AsyncStorage from '@react-native-async-storage/async-storage';
import {RestClient} from '../../config/api';
import {LoginRequestPayload, LoginResponse, User} from './User.type';

export const fetchUserLogin = async (
  payload: LoginRequestPayload,
  restClient: RestClient,
): Promise<LoginResponse> => {
  const {data: response} = await restClient.post<LoginResponse>(
    '/user/login',
    payload,
  );
  return response;
};

export const getMe = async (restClient: RestClient): Promise<User> => {
  const token = await AsyncStorage.getItem('token');
  const {data: response} = await restClient.get('/user/getMe', {
    headers: {Authorization: `Bearer ${token}`},
  });
  return response;
};

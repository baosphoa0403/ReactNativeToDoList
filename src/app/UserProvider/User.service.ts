import {RestClient} from '../../config/api';
import {LoginRequestPayload, LoginResponse} from './User.type';

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

export interface LoginRequestPayload {
  username: string;
  password: string;
}
export interface LoginResponse {
  access_token: string;
  message: string;
}
export interface BaseError {
  statusCode: number;
  message: string;
}

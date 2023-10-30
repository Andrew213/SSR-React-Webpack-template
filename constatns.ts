export const API_URL = 'https://ya-praktikum.tech/api/v2';

export const BASE_URL_AUTH = `${API_URL}/auth`;

export const URL_AUTH_SIGN_IN = `${BASE_URL_AUTH}/signin`;

export const URL_AUTH_SIGN_UP = `${BASE_URL_AUTH}/signup`;

export const URL_AUTH_LOGOUT = `${BASE_URL_AUTH}/logout`;

export const URL_AUTH_USER = `${BASE_URL_AUTH}/user`;

export const BASE_URL_OAUTH = `${API_URL}/oauth`;

export const URL_OAUTH_YANDEX = `${BASE_URL_OAUTH}/yandex`;

export const URL_OAUTH_SERVICE_ID = `${URL_OAUTH_YANDEX}/service-id`;

export const REDIRECT_URI =
  typeof window === 'undefined' ? '' : window.location.origin;
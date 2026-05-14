import { apiClient } from './apiClient';

type LoginData = {
  email: string;
  password: string;
};

type RegisterData = {
  name: string;
  email: string;
  password: string;
  venueManager?: boolean;
};

export type AuthProfile = {
  name: string;
  email: string;
  avatar?: {
    url: string;
    alt: string;
  };
  banner?: {
    url: string;
    alt: string;
  };
  venueManager: boolean;
};

type AuthResponse = {
  data: AuthProfile & {
    accessToken: string;
  };
};

export async function loginUser(loginData: LoginData) {
  return apiClient<AuthResponse>('/auth/login?_holidaze=true', {
    method: 'POST',
    body: loginData,
  });
}

export async function registerUser(registerData: RegisterData) {
  return apiClient<AuthResponse>('/auth/register', {
    method: 'POST',
    body: registerData,
  });
}
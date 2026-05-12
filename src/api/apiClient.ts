import { API_BASE_URL, API_KEY_STORAGE_KEY, TOKEN_STORAGE_KEY } from './constants';

const apiKey = import.meta.env.VITE_API_KEY;

type ApiOptions = {
  method?: string;
  body?: unknown;
  requiresAuth?: boolean;
};

export async function apiClient<T>(
  endpoint: string,
  options: ApiOptions = {},
): Promise<T> {
  const token = localStorage.getItem(TOKEN_STORAGE_KEY);
  const storedApiKey = localStorage.getItem(API_KEY_STORAGE_KEY);

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

 
  if (options.requiresAuth) {
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    if (apiKey) {
      headers['X-Noroff-API-Key'] = storedApiKey || apiKey;
    }
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: options.method || 'GET',
    headers,
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  if (!response.ok) {
    throw new Error('Something went wrong with the API request');
  }

  if (response.status === 204) {
    return {} as T;
  }

  return response.json();
}
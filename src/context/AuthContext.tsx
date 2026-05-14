import { createContext, useEffect, useState } from 'react';
import { TOKEN_STORAGE_KEY } from '../api/constants';
import type { AuthProfile } from '../api/authApi';

type AuthContextType = {
  user: AuthProfile | null;
  token: string | null;
  isLoggedIn: boolean;
  login: (user: AuthProfile, token: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

type AuthProviderProps = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<AuthProfile | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const savedToken = localStorage.getItem(TOKEN_STORAGE_KEY);
    const savedUser = localStorage.getItem('holidaze_user');

    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
    }
  }, []);

  function login(userData: AuthProfile, accessToken: string) {
    setUser(userData);
    setToken(accessToken);

    localStorage.setItem('holidaze_user', JSON.stringify(userData));
    localStorage.setItem(TOKEN_STORAGE_KEY, accessToken);
  }

  function logout() {
    setUser(null);
    setToken(null);

    localStorage.removeItem('holidaze_user');
    localStorage.removeItem(TOKEN_STORAGE_KEY);
  }

  return (
    <AuthContext.Provider value={{ user, token, isLoggedIn: !!token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
import React from 'react';

export interface AppState {
  user: { name: string, email: string, password: string } | null;
  isAuthenticated: boolean
}

export interface AppContextProps {
  login: (user: LoginParams) => Promise<boolean>
  signup: (user: SignupParams) => Promise<boolean>
  logout: () => void
  user: { name: string, email: string, password: string } | null;
}

export interface LoginParams {
  email: string;
  password: string;
}
export interface SignupParams {
  name: string;
  email: string;
  password: string;
}

const AppContext = React.createContext<AppContextProps | undefined>(undefined);

export default AppContext;

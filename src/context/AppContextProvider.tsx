import React, { FC, useEffect, useState } from "react";
import AppContext, {
  AppContextProps,
  AppState,
  LoginParams,
  SignupParams,
} from "./AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  validateEmail,
  validateLogin,
  validatePassword,
  validateName,
} from "utils/validation";

export const AppContextProvider: FC<any> = ({ children }) => {
  const [state, setState] = useState<AppState>({
    user: null,
    isAuthenticated: false,
  });

  useEffect(() => {
    const retrieveUser = async () => {
      const data = await AsyncStorage.getItem("user");
      if (data) {
        const user = JSON.parse(data);
        setState({ user, isAuthenticated: true });
      }
    };

    retrieveUser();
  }, []);

  const signup = async (user: SignupParams) => {
    const { name, email, password } = user;
    if (
      validateName(name) &&
      validateEmail(email) &&
      validatePassword(password)
    ) {
      await AsyncStorage.setItem("user", JSON.stringify(user));
      setState(() => ({
        user,
        isAuthenticated: true,
      }));
      return true;
    }
    return false
  };

  const login = async (user: LoginParams) => {
    if (await validateLogin(user.email, user.password)) {
      const user = JSON.parse((await AsyncStorage.getItem("user")) as string);
      setState(() => ({
        user,
        isAuthenticated: true,
      }));
      return true;
    }
    return false;
  };

  const logout = async () => {
    setState({ user: null, isAuthenticated: false });
  };

  const value: AppContextProps = { login, logout, signup, user: state.user };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

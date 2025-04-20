import AsyncStorage from "@react-native-async-storage/async-storage";

export const validateName = (name: string) => {
  if (name === "") {
    throw new Error("Name is required");
  }
  if (name.length > 20) {
    throw new Error("Maximum 20 characters");
  }
  return true;
};

export const validateEmail = (email: string) => {
  if (email === "") {
    throw new Error("Email is required");
  }
  if (!/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(email)) {
    throw new Error("Invalid email format");
  }
  return true;
};

export const validatePassword = (password: string) => {
  if (password.length < 6) {
    throw new Error("Minimum 6 characters");
  }
  if (
    !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{6,}$/.test(
      password
    )
  ) {
    throw new Error(
      "Minimum 6 characters, at least one uppercase letter, one lowercase letter, one number and one special character"
    );
  }
  return true;
};

export const validateLogin = async (email: string, password: string) => {
  if (email === "") {
    throw new Error("Email is required");
  }
  if (password === "") {
    throw new Error("Password is required");
  }
  const data = await AsyncStorage.getItem("user");
  if (data) {
    const recentUser = JSON.parse(data);
    if (recentUser.email !== email) {
      throw new Error("Invalid email");
    }
    if (recentUser.password !== password) {
      throw new Error("Invalid password");
    }
    return true;
  } else {
    throw new Error("No user found");
  }
};

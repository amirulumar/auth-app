import * as React from "react";
import { useState } from "react";
import { Pressable, TextInput, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import styles from "./styles";
import AppContext from "@context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import ErrorMessage from "components/ErrorMessage";
import CustomButton from "components/CustomButton";

export default function Signup() {
  const context = React.useContext(AppContext);
  const { goBack } = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  const handleSubmit = async () => {
    try {
      if (await context?.signup({ name, email, password })) {
        handleLogin();
      }
    } catch (e) {
      if (e instanceof Error) setError(e.message);
    }
  };

  const handleLogin = () => {
    goBack();
  };

  return (
    <View style={styles.container}>
      <ErrorMessage message={error} />
      <TextInput
        placeholder="Name"
        inputMode="text"
        autoComplete="name"
        keyboardType="default"
        value={name}
        onChangeText={(text) => setName(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        inputMode="email"
        autoComplete="email"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Password"
          autoComplete="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={hidePassword}
          style={styles.input}
        />
        <Pressable
          style={styles.verifyButton}
          onPress={() => setHidePassword(!hidePassword)}
        >
          <Feather name={hidePassword ? "eye" : "eye-off"} size={24} />
        </Pressable>
      </View>
      <CustomButton title="Sign Up" onPress={handleSubmit} />
      <CustomButton title="Go to Login" onPress={handleLogin} />
    </View>
  );
}

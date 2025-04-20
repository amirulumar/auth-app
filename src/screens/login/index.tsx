import * as React from "react";
import { useState } from "react";
import { Pressable, TextInput, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import styles from "./styles";
import AppContext from "@context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import ErrorMessage from "components/ErrorMessage";
import CustomButton from "components/CustomButton";

export default function Home() {
  const context = React.useContext(AppContext);
  const { navigate } = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  const handleSubmit = async () => {
    try {
      if (await context?.login({ email, password })) {
        handleHome();
      }
    } catch (e) {
      if (e instanceof Error) setError(e.message);
    }
  };

  const handleHome = () => {
    navigate("Home" as never);
  };

  const handleSignup = () => {
    navigate("Signup" as never);
  };

  return (
    <View style={styles.container}>
      <ErrorMessage message={error} />
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
          <Feather size={24} name={hidePassword ? "eye" : "eye-off"} />
        </Pressable>
      </View>
      <CustomButton title="Submit" onPress={handleSubmit} />
      <CustomButton title="Go to Signup" onPress={handleSignup} />
    </View>
  );
}

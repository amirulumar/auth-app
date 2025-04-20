import * as React from "react";
import { View, Text } from "react-native";
import AppContext from "@context/AuthContext";
import styles from "./styles";
import CustomButton from "components/CustomButton";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const context = React.useContext(AppContext);
  const { navigate, goBack } = useNavigation();

  const handleLogout = () => {
    context?.logout();
    goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Name: {context?.user?.name}</Text>
      <Text style={styles.heading}>Email: {context?.user?.email}</Text>
      <CustomButton title="Logout" onPress={handleLogout} />
    </View>
  );
}

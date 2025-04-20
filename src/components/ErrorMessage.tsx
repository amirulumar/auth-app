import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";

type ErrorMessageProps = {
  message: string;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

const ErrorMessage = ({
  message,
  containerStyle,
  textStyle,
}: ErrorMessageProps) => {
  if (!message) {
    return null;
  }

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.message, textStyle]}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffe0b2",
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ffb300",
    width: "100%"
  },
  message: {
    color: "#000",
    textAlign: "center",
  },
});

export default ErrorMessage;

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  verifyButton: {
    position: 'absolute',
    right: 10,
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding:10
  },
  input: {
    width: "100%",
    fontSize: 16,
    color: '#212121',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderColor: '#BDBDBD',
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    marginBottom: 16,
  },
  passwordContainer: {
    width: "100%",
    alignItems: "center"
  }
});

export default styles;

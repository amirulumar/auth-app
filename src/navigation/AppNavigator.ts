import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@screens/home";
import Login from "@screens/login";
import Signup from "@screens/signup";

const RootStack = createNativeStackNavigator({
  screens: {
    Login,
    Signup,
    Home,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default Navigation;

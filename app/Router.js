import React from "react";
import { Platform, StatusBar } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";
import { FontAwesome } from "react-native-vector-icons";

import SignUp from "./screens/Signup";
import SignIn from "./screens/Signin";
import Home from "./screens/Home";
import Profile from "./screens/Profile";

const headerStyle = {
  marginTop: Platform.OS === 'android' ? StatusBar.currentHeight: 0
};

export const SignedOutStack = createStackNavigator({
  SignUp:{
    screen: SignUp,
    navigationOptions: {
      "title": "Sign Up",
      headerStyle
    }
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      "title": "Sign In",
      headerStyle
    }
  }
});

export const SignInStack = createBottomTabNavigator(
  {
  Home: {
    screen: Home,
    navigationOptions:{
      tabBarLabel: "Home",
      tabBarIcon: ({tintColor}) => (
        <FontAwesome name="home" size={30} color={tintColor} />
      )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions:{
      tabBarLabel: "Profile",
      tabBarIcon:({tintColor}) => (
        <FontAwesome name="user" size={30} color={tintColor} />
      )
    }
  }
},
{
  tabBarOptions: {
    style: {
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight:0
    }
  }
}
);

const createRootNavigator = (signedIn = false) => {
  return createSwitchNavigator(
    {
      SignedIn: {
        screen: SignInStack
      },
      SignedOut: {
        screen: SignedOutStack
      }
    },
    {
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};

export default createAppContainer(createRootNavigator);

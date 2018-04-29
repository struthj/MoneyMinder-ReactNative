import React from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet} from 'react-native';
import { Login } from "./lib/login";
import { Home } from "./lib/home";


export default StackNavigator({
    Login: {
      screen: Login,
    },
    Home: {
      screen: Home,
    }
  },
  {
    initialRouteName: 'Login',
    headerMode:'none'
  }
);

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import LoginScreen from "./screens/loginScreen";
import HomeScreen from './screens/homeScreen';
import ProductDetails from "./screens/productDetailScreen";

const navigator = createStackNavigator(
  {
    Login : LoginScreen , 
    Home: HomeScreen,
    Product : ProductDetails
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      title: 'Assignment',
    },
  }
);

export default createAppContainer(navigator);

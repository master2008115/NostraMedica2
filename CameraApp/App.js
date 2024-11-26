import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from './SignUpScreen';
import LoginScreen from './LoginScreen';

const Stack = createStackNavigator();

export default function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isLogin ? 'Login' : 'SignUp'}>
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import React from "react";
import HomeScreen from "../components/HomeScreen";
import Login from "../components/Login/Login";
import Profile from "../components/Profile";
import Register from "../components/Register/Register";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const HomeStackScreen = () => {
    
  const Stack = createNativeStackNavigator();
  
    return (
    <Stack.Navigator>
  
        <Stack.Screen name = "LoginScreen" component= {Login} options={{headerShown: false,}}/>
        <Stack.Screen name = "RegisterScreen" component= {Register} options={{headerShown: false,}}/>
        <Stack.Screen name = "Home" component={HomeScreen} options={{title:"My Home"}}/>
        <Stack.Screen name = "Profile" component= {Profile} options={{title:"My Profile"}}/>
      </Stack.Navigator>
    );
  };

  export default HomeStackScreen;
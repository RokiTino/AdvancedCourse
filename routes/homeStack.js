import React from "react";
import HomeScreen from "../components/HomeScreen";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const HomeStackScreen = () => {
    
  const Stack = createNativeStackNavigator();
  
    return (
    <Stack.Navigator initialRouteName={'Login'}>
  
        <Stack.Screen name = "LoginScreen" component= {Login} options={{headerShown: false,}}/>
        <Stack.Screen name = "RegisterScreen" component= {Register} options={{headerShown: false,}}/>
        <Stack.Screen name = "Home" component={HomeScreen} options={{title:"Wall Suggestions"}}></Stack.Screen>
      </Stack.Navigator>
    );
  };

  export default HomeStackScreen;
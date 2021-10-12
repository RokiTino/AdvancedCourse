import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeStackScreen from './routes/homeStack';


export default function App() {
  return (
    <NavigationContainer>
      <HomeStackScreen/>
    </NavigationContainer>
  );
  }

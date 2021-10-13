import React,{ useState } from 'react'
import { View, Text,SafeAreaView,TouchableOpacity,ScrollView,TextInput } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import {useNavigation} from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '../Register/Register';
import HomeScreen from '../HomeScreen';
const Login = ({navigation}) => {
    const[username,setUserName] = useState('');
    const[password,setPassword] = useState('');
    
    const handeSubmit=() => {
        if(username=='' && password==''){
            alert('Enter the Username and the password')
        }
        else {
            navigation.navigate('Home', { screen: 'HomeScreen', params:{user:{username,password}} });
        }
    }
    const Stack = createNativeStackNavigator();
    return (
        <SafeAreaView>
        <ScrollView>
        <View style={tw`m-10`}>
            <View >
                <Text style={tw`text-gray-500 p-10 mt-10 text-xl font-bold tracking-widest text-center`}>Log in</Text>
            </View>
            <View style={tw`m-2 p-2`}>
                <TextInput style={tw`text-black text-center rounded-md border-gray-400 border border-opacity-25 border-solid h-10 shadow`} value={username} placeholder='UserName' onChangeText={(e) => setUserName(e)}/>
            </View>
            <View style={tw`m-2 p-2`}>
                <TextInput style={tw`text-black text-center rounded-md border-gray-400 border border-opacity-25 border-solid h-10 shadow`} 
                secureTextEntry={true} value={password} placeholder='Password' onChangeText={(e) => setPassword(e)}/>
            </View>
        </View>
        
        <View style={tw`bg-pink-300 m-2 p-4 rounded-md border-gray-400 border border-opacity-25 border-solid w-40 mx-20 shadow`}>
            <TouchableOpacity onPress={()=>handeSubmit()}>
                <Text style={tw`text-center text-white font-bold`}>Login</Text>
            </TouchableOpacity>
            </View>
            <View style={tw`mx-10 mt-5`}>
                <TouchableOpacity  onPress={() => navigation.navigate('RegisterScreen', { screen: 'Register' })}>
                <Text>Not a member ? Register Here</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Login
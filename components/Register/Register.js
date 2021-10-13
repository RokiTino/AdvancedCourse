import React,{useState} from 'react'
import { View, Text,SafeAreaView,ScrollView,TextInput,TouchableOpacity } from 'react-native'
import tw from 'tailwind-react-native-classnames'

export default function Register() {

    
    const[username,setUserName] = useState('');
    const[password,setPassword] = useState('');
    
    const[name,setName] = useState('');
    
    const[surname,setSurName] = useState('');
    
    const[email,setEmail] = useState('');
    
    const handeSubmit=() => {
        if(username=='' && password==''){
            alert('Enter the Username and the password')
        }
        else {
            navigation.navigate('HomeScreen')
        }
    }

    return (
        <SafeAreaView>
            <ScrollView>
            <View style={tw`m-10`}>
                <Text style={tw`text-gray-500 p-10 mt-10 text-xl font-bold tracking-widest text-center`}>Register</Text>
            </View>
            <View style={tw`m-2 p-2`}>
                <TextInput style={tw`text-black text-center rounded-md border-gray-400 border border-opacity-25 border-solid h-10 shadow`} value={name} placeholder='Name' onChangeText={(e) =>setName(e)}></TextInput>
            </View>
            <View style={tw`m-2 p-2`}>
                <TextInput style={tw`text-black text-center rounded-md border-gray-400 border border-opacity-25 border-solid h-10 shadow`} value={surname} placeholder='Surname' onChangeText={(e) =>setSurName(e)}></TextInput>
            </View>
            <View style={tw`m-2 p-2`}>
                <TextInput style={tw`text-black text-center rounded-md border-gray-400 border border-opacity-25 border-solid h-10 shadow`} value={email} placeholder='E-Mail' onChangeText={(e) =>setEmail(e)}></TextInput>
            </View>
            <View style={tw`m-2 p-2`}>
                <TextInput style={tw`text-black text-center rounded-md border-gray-400 border border-opacity-25 border-solid h-10 shadow`} value={username} placeholder='User Name' onChangeText={(e) =>setUserName(e)}></TextInput>
            </View>
            <View style={tw`m-2 p-2`}>
                <TextInput style={tw`text-black text-center rounded-md border-gray-400 border border-opacity-25 border-solid h-10 shadow`} value={password} placeholder='Password' secureTextEntry={true} onChangeText={(e) =>setPassword(e)}></TextInput>
            </View>
            <View style={tw`bg-pink-300 m-2 p-4 rounded-md border-gray-400 border border-opacity-25 border-solid w-40 mx-20 shadow`}>
            <TouchableOpacity onPress={()=>handeSubmit()}>
                <Text style={tw`text-center text-white font-bold`}>Register</Text>
            </TouchableOpacity>
            </View>
            </ScrollView>
        </SafeAreaView>
    );
}


import React,{useState} from 'react'
import { View, Text,SafeAreaView,ScrollView,TextInput,StyleSheet,FlatList, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';

export default function HomeScreen({navigation}) {
  
  const [initialElements, changeEl]  = useState([
    { id : Math.random(), text : "Initial Object"},
  ]);
  
const Item = ({ title }) => (
  <View style={tw`m-2 p-2 bg-red-100 rounded-md border-gray-400 border border-opacity-25 border-solid`}>
    <Text style={tw`text-gray-500 p-10 mt-10 text-xl font-bold tracking-widest text-center`}>{title}</Text>
  </View>
);
const renderItem = ({ item }) => (
  <Item title={item.text} />
);


const [exampleState, setExampleState] = useState(initialElements);


const addElement = () => {
  var newArray = [...initialElements , {id : Math.random(), text: wallText }];
  console.log(initialElements.length);
  setExampleState(newArray);
  changeEl(newArray);
}
  const[wallText,setText] = useState('');
    return (
      <ScrollView>
        <View style={tw`m-5 p-2`}>
        <TextInput
            style={styles.postInput}
            value={wallText}
            onChangeText={(e) => setText(e)}
            multiline={true}
            numberOfLines={3}
            placeholder="Write On the Wall"
            underlineColorAndroid='transparent'
            require={true}/>
            </View>
            <View style={tw`m-2 p-2`}>
                <TouchableOpacity style={tw`bg-pink-300 m-2 p-4 rounded-md border-gray-400 border border-opacity-25 border-solid w-40 mx-20 shadow`} onPress={addElement}>
                  <Text style={tw`text-center text-white font-bold`}>Add your suggestion</Text></TouchableOpacity>
              </View>
            <View style={tw`m-2 p-5 bg-pink-100`}>
                <FlatList 
                data={exampleState}
                renderItem={renderItem}
                keyExtractor={item => item.id}/>
            </View>
      </ScrollView>
    )
}

     
const styles = StyleSheet.create({              
  postInput: {
  fontSize: 24,
  borderColor:'#42435b',
  borderWidth:1,
  textAlign:'center',
  alignContent:'center',
  margin:10,
  }})

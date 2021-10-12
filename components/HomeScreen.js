import React from 'react'
import { View, Text,SafeAreaView } from 'react-native'
import tw from 'tailwind-react-native-classnames'

import {useNavigation} from '@react-navigation/native';

export default function HomeScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>{navigation.params}</Text>
        </View>
    )
}

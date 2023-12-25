import { Text, SafeAreaView, View, Image } from 'react-native' // [important] import SafeAreaView from react-native for low import cost
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    /** set the layout without the header zone */
    navigation.setOptions({ 
      // headerTitle: 'testing',
      headerShown: false,
    })
  }, []);

  return (
    /** you can put things inside the safe area no matter in which device users are using */
    <SafeAreaView>
      {/* <Text className='text-red-500'>HomeScreen</Text> */}

      {/* Header */}
      <View>
        <Image
          source={
            require('../assets/avatar.png')
            // { uri: '../assets/avatar.png'},
          }
          style={{ width: 28, height: 28 }}
          className='h-7 w-7 bg-gray-300 p-4 rounded-full'
        />     
      </View>
    </SafeAreaView>
  )
}

// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import { color } from 'react-native-reanimated';
import { FontAwesome5,Entypo } from '@expo/vector-icons';



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={
        {
          headerStyle: {
            backgroundColor: "#075e54",
            shadowOpacity: 0,
            elevation: 0
            
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: 'bold',
          }
      }}> 
        <Stack.Screen name="Home" component={HomeScreen} 
        options={
          {
            title : "WhatsApp",
            headerRight: () => {
              return <View style={
                {
                  flexDirection: 'row', width:60, justifyContent:'space-between',
                  marginRight: 10, 
              }
                }>
                <FontAwesome5 name="search" size={24} color="white" />
                <Entypo name="dots-three-vertical" size={24} color="white" />
              </View>
            }
          }
        }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
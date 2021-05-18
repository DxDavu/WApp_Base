import React from 'react';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CameraScreen from "./CameraScreen";
import ChatsScreen from "./ChatsScreen";

const Tab = createMaterialTopTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator initialRouteName="Chats">
      <Tab.Screen name="Camera" component={CameraScreen} />
      <Tab.Screen name="Chats" component={ChatsScreen} />
    </Tab.Navigator>
  );
};

export default HomeScreen;

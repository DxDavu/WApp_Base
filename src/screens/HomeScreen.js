import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CameraScreen from "./CameraScreen";
import ChatsScreen from "./ChatsScreen";
import { Entypo } from "@expo/vector-icons";

const Tab = createMaterialTopTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Chats"
      tabBarOptions={{
        activeTintColor: "#fff",
        style: {
          backgroundColor: "#075e54",
        },
        indicatorStyle: {
          backgroundColor: "white",
        },
        labelStyle: {
          fontWeight: "bold",
        },
        showIcon: true,
      }}
    >
      <Tab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarIcon: () => <Entypo name="camera" size={24} color="white" />,
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen name="Chats" component={ChatsScreen} />
    </Tab.Navigator>
  );
};

export default HomeScreen;

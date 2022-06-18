import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeTab } from './HomeTab';
import { useSelector } from 'react-redux';
import Login from "../components/login/Login";
import Icono from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from "react-native";

const Stack = createNativeStackNavigator();

//si esta sin token
const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerTitleAlign: 'center', headerShown: false }}
      />
    </Stack.Navigator>
  );
};

//si esta con token => logueado
const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeTab"
        component={HomeTab}
        options={{
          headerTitleAlign: 'center', 
          headerTitle: 'Nombre de la empresa',
          headerRight: () => (
            <TouchableOpacity>
              <Icono
                name="reorder-three-outline"
                size={30}
              />
            </TouchableOpacity>
          ),
          //headerShown: false 
        }}
      />
    </Stack.Navigator>
  );
};

export const MyRute = () => {
  const stateToken = useSelector(state => state.token);
  console.log("stateToken", stateToken);

  return (
    <>
      {stateToken ? <AuthStack /> : <AppStack />}
    </>

  );
};
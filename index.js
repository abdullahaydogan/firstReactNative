/**
 * @format
 */

import {AppRegistry, Text, View, StyleSheet,FlatList} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CoursesScreen from './src/screens/CoursesScreen';
import HomeScreen from './src/screens/HomeScreen';
import CoursesInformationScreen from './src/screens/CoursesInformationScreen';
import CounterScreen from './src/screens/CounterScreen';
import BoxScreen from './src/screens/BoxScreen';


const Stack = createNativeStackNavigator();
    export default function App(){

      return(
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="CoursesScreen" component={CoursesScreen}/>
          <Stack.Screen name="CoursesInformationScreen" component={CoursesInformationScreen}/>
          <Stack.Screen name="CounterScreen" component={CounterScreen}/>
          <Stack.Screen name="Kutu Uygulaması" component={BoxScreen}/>

        </Stack.Navigator>
      </NavigationContainer>
      );
}

const styles = StyleSheet.create({});


AppRegistry.registerComponent('myfirst', () => App);

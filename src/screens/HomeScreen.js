import React from "react";
import { Text, View,StyleSheet, Button } from "react-native";



export default function HomeScreen({navigation}){
   
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen </Text>
        <Button
        title="My Courses"
        onPress={ () => navigation.navigate('CoursesScreen')}
        />
        <Button
        title="My Courses Information"
        onPress={ () => navigation.navigate('CoursesInformationScreen')}
        />
        <Button
        title="Sayaç Ugulaması"
        onPress={ () => navigation.navigate('CounterScreen')}
        />
         <Button
        title="Kutu Ugulaması"
        onPress={ () => navigation.navigate('Kutu Uygulaması')}
        />

       
      </View>
    )
}
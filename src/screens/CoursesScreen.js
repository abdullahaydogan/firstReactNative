import React from "react";
import { StyleSheet, Text, View,FlatList } from "react-native";



export default function CoursesScreen(){

    const courses = [
        {name:'Java', id:1},
        {name:'React Native', id:2},
        {name:'SpringBoot', id:3},
        {name:'C ', id:4},
        {name:'Bootstrap', id:5}
    ]



    return(
        <FlatList
        data={courses}
       // horizontal
       //  showsHorizontalScrollIndicator={false}
       keyExtractor={(item)=> item.id}
        renderItem={({item})=> {
            return <Text style={styles.content}  >{item.name} </Text>
        }}
       />
    )
}

const styles = StyleSheet.create({
        content : {
          fontSize:20,
          backgroundColor:'yellow',
          marginVertical:10,
          padding:20
        }
      
});
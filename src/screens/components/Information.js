import React from "react";
import { Text, View,Image, StyleSheet,Dimensions  } from "react-native";


export default function Information({title,imageSource,desc}){
    return(
        <View>
            <Image
            style={styles.img}
            source={imageSource}
            />
                <View style={styles.descTitle}>
                    <Text style={styles.title}>{title} </Text>
                    <Text style={styles.textDesc}>{desc} </Text>
                </View>
        </View>
    );
}
const styles = StyleSheet.create({
    img:{
        width:'100%',
        height: Dimensions.get('window').width * 0.67,
    },
    descTitle:{
        alignItems:'center',
        paddingVertical:20,
    },
    title:{
        fontSize:30,
    },
    textDesc:{
        fontSize:20,
    }
});




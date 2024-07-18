import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import Information from "./components/Information";

export default function CoursesInformationScreen(){
    return(
        <ScrollView>
           <Information 
           title="Java" 
           imageSource={require('../../assets/java.png') }
           desc="Kapsamlı Java Eğitimi."
          />

            <Information 
            title="SpringBoot" 
           imageSource={require('../../assets/springBoot.png') }
           desc="Kapsamlı Spring  Eğitimi."
          />

            <Information
            title="React Native" 
           imageSource={require('../../assets/reactNative.png') }
           desc="Kapsamlı React Native Eğitimi."
          />
   
        </ScrollView>
    );
}

const styles = StyleSheet.create({});





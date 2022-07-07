import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import Api from '../pages/Api';



export default function Home(){
  return(
     <View style={estilo.container}>
     <ImageBackground  style={estilo.imagem} source={require('../assets/info.png')}>
         </ImageBackground>
       
       <StatusBar style="auto" />
     </View>
  );   
 }
 
 const estilo = StyleSheet.create({
     container: {
       flex: 1,
       backgroundColor: '#fff',
       alignItems: 'center',
       justifyContent: 'center',
     },
     imagem:{
         flex:1,
         width:411,
         height:'99%',
     }
   });







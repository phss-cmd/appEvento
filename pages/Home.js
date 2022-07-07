import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';

export default function Home(){
 return(

    <View style={estilo.container}>
    <Image  style={estilo.imagem} source={require('../assets/dezembro.png')}/>
      
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
        width:411
    }
  });
import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text, View, StyleSheet,TextInput,TouchableOpacity,Alert} from 'react-native';
import Api from '../pages/Api';

export default function Pesquisa(){
function pesquisarFruta(){
  Alert.alert('Atenção','Estamos fora do ar.')
}
//--comentario --//

 return(
    <View style={estilo.container}>
     <Text style={estilo.titulo}>Qual sua duvida?</Text>
      <TextInput 
      placeholder='Digite sua duvida.'
      style={estilo.textInput}
      />
      
      <TouchableOpacity style={estilo.botao} onPress={()=> pesquisarFruta()}>
          <Text style={estilo.textoBotao} >Pesquisar</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
 );   
}

const estilo = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#540d6e',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textInput:{
      borderColor:'#7209b7',
      color:'#fff',
      fontSize:20,
      width:'80%',
      height:30,
      borderWidth:2,
      borderRadius:8,
      marginTop:30,
      paddingHorizontal:10
    },
    botao:{
      backgroundColor:"#7209b7",
      marginTop:15,
      padding:10,
      borderRadius:15,
      width:'80%',
      justifyContent:'center',
      alignItems:'center'
    },
    textoBotao:{
      fontSize: 18,
      fontWeight: '700',
      color:'#fff'
    },
    titulo:{
      fontSize:30,
      color:"#fff"
    }
  });
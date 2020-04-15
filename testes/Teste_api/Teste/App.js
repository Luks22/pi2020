import React, { useState } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import * as Network from 'expo-network';
import Api from './services/Api';

export default function App() {
  const [text, setText] = useState("");
  
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Button title = "teste" onPress = {() => {getMac2()}}/>
    </View>
  );


  async function getMac(){
    const response = await Api.get('/usuario/4');
    const data = response.data;

    data.map(num => {
      if(num.id === 3){
        setText(num.ssid);
      }
    });
  }

  async function getMac1(){
    
    const data = {
      nome: "teste", 
      login: "teste", 
      senha: "teste",
      localizacao: "ali",
      ip: "teste",
      numero: "15975325846"
  }
    
    const response = await Api.post('/cadastrar/', data);
    
  }

  async function getMac2(){
    let id = 4;
    const response = await Api.get(`/usuario/${id}`);
    const data = response.data;

    setText(data.login + " " + data.localizacao);
  }

  async function getMac3(){
    const response = await Api.get('/usuario/5');
    const data = response.data;

    const data2 = {
      nome: data.nome,
      login: "olha o teste ai",
      senha: "to no teste" 
    }

    const update = await Api.put('/atualizaUsuario/5', data2);
    
  }

  async function getMac4(){
    let id = 4;
    const response = await Api.get(`/usuario/${id}`);
    const data = response.data;

    const data2 = {
      localizacao: "159752846"
    }

    const update = await Api.put(`/atualizaUsuario/${id}/Localizacao`, data2);
    
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

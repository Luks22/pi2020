import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  PermissionsAndroid,
} from 'react-native';

import WifiManager from "react-native-wifi-reborn";
import GetLocation from 'react-native-get-location';
import Api from './api';


export default function App() {

  const [altitude, setAltitude] = useState("teste");



  async function getPermission() {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'AndoridPermissionExample App Camera Permission',
        message: 'AndoridPermissionExample App needs access to your camera ',
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("Permitiu");
    } else {
      console.log("Nao Permitiu");
    }

    WifiManager.loadWifiList(
      wifiList => {
        let wifiArray = JSON.parse(wifiList);
        wifiArray.map((value, index) =>
          console.log(`Wifi ${index + 1} - ${value.SSID} - ${value.BSSID} - ${value.level}`)
        );
      },
      error => console.log(error)
    );


    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        setAltitude(location.altitude);

      })

  }

  async function teste() {
    let id = 3;
    const response = await Api.get(`/usuario/${id}`);
    const data = response.data;

    setAltitude(data.celular.numero + "  " + data.login);
  }

  async function getMac1(){
    
    const data = {
      nome: "jose", 
      login: "teste234", 
      senha: "teste",
      localizacao: "ali",
      ip: "teste",
      numero: "2"
  }
    
    const response = await Api.post('/cadastrar/', data);
    
  }

  async function getMac3(){
    const response = await Api.get('/usuario/3');
    const data = response.data;

    const data2 = {
      nome: "Lucas",
      login: "luks",
      senha: "123" 
    }

    const update = await Api.put('/atualizaUsuario/3', data2);

    const data3 = {
      numeroNovo: 159,
    }

    const secondUpdate = await Api.put('/atualizarCelular/3/', data3);
    
  }


  async function getMac4(){

    const data2 = {

      localizacao: "293",
      roteador: "teste"
    }

    const update = await Api.put('/atualizaUsuario/3/Localizacao', data2);

    
  }

  async function getMac5(){

    const data2 = {
      login: "luks",
      senha: "123"
    }

    const update = await Api.post('/login', data2);

    console.log(update.data.celular);
  }

  async function getMac6(){

    let amigos = [];
    
    const update = await Api.get('/amigos/3');

    amigos = update.data;

    amigos.map(amigo => {
      console.log(amigo);
      console.log("--------------------------")
    });
  }


  async function getMac7(){
  
      const data3 = {
        numeroAmigo: 3,
      }
  
      const secondUpdate = await Api.post('/insereAmigo/3', data3);
    }


  return (
    <View style={{ padding: 50 }}>
      <View>
        {/* usuário irá inserir lembretes aqui*/}
        <Text>{altitude}</Text>
        <Button
          title="+"
          onPress={() => { getMac5() }}
        />
      </View>
      <View>
        {/*Aqui será exibida a lista de lembretes*/}
      </View>
    </View>
  );
}
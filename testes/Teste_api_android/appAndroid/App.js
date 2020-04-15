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
    let id = 6;
    const response = await Api.get(`/usuario/${id}`);
    const data = response.data;

    setAltitude(data.celular.numero + "  " + data.login);
  }

  async function getMac1(){
    
    const data = {
      nome: "jose", 
      login: "teste", 
      senha: "teste",
      localizacao: "ali",
      ip: "teste",
      numero: "987654321"
  }
    
    const response = await Api.post('/cadastrar/', data);
    
  }

  async function getMac3(){
    const response = await Api.get('/usuario/6');
    const data = response.data;

    const data2 = {
      nome: data.nome,
      login: "olha o teste ai",
      senha: "to no teste" 
    }

    const update = await Api.put('/atualizaUsuario/6', data2);

    const data3 = {
      numeroNovo: 877777888,
    }

    const secondUpdate = await Api.put('/atualizarCelular/6/', data3);
    
  }


  return (
    <View style={{ padding: 50 }}>
      <View>
        {/* usuário irá inserir lembretes aqui*/}
        <Text>{altitude}</Text>
        <Button
          title="+"
          onPress={() => { teste() }}
        />
      </View>
      <View>
        {/*Aqui será exibida a lista de lembretes*/}
      </View>
    </View>
  );
}
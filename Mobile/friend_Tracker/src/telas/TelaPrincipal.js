import React, { useState, useEffect } from 'react'
import { Button, View, StyleSheet, Text, FlatList } from 'react-native'
import WifiManager from 'react-native-wifi-reborn';
import { NetworkInfo } from "react-native-network-info";
import AmigoItem from '../components/AmigoItem';
import Api from '../services/Api';

const TelaPrincipal = (props) => {
    const [usuario, setUsuario] = useState(props.usuarioLogado)
    const [listaAmigos, setListaAmigos] = useState([]);
    const [roteadores, setRoteadores] = useState([]);
    const [localizacao, setLocalizacao] = useState({ roteador: '', localizacao: '' })
    const [teste, setTeste] = useState('');

    async function carregarAmigos() {
        const response = await Api.get(`/amigos/${usuario.id}`);

        setListaAmigos(response.data);
    }


    async function roteadoresNasProximidades() {

        WifiManager.loadWifiList(
            wifiList => {
                let wifiArray = JSON.parse(wifiList);
                setRoteadores(wifiArray);
            },
            error => console.log(error)
        );


        for (let i = 0; i < roteadores.length; i++) {
            let r = roteadores[i];
            let ssid = r.SSID;
            let bssid = r.BSSID;
            const roteador = { bssid: bssid, ssid: ssid };
            const response = await Api.post("/insereRoteador", roteador)
        }
    }


    async function localizacaoAtual() {

        NetworkInfo.getBSSID().then(bssidAtual => {

            let sinal = 0;
            let frequencia = 0;

            roteadores.map(roteador => {
                if (bssidAtual === roteador.BSSID) {
                    sinal = roteador.level;
                    frequencia = roteador.frequency;
                }
            });

            let distance = Math.ceil(Math.pow(10.0, (27.55 - (20 * Math.log10(frequencia)) + Math.abs(sinal)) / 20));

            setLocalizacao({ roteador: bssidAtual, localizacao: distance.toString() });
        });

        const response = await Api.put(`/atualizaUsuario/${usuario.id}/Localizacao`, localizacao)

    }

    useEffect(() => {

        setTimeout(() => { carregarAmigos() }, 1000);
        setTimeout(() => { roteadoresNasProximidades() }, 1000);
        setTimeout(() => { localizacaoAtual() }, 1000);
    }, [usuario]);



    console.log(listaAmigos);

    return (
        <View style={styles.tela}>
            <View style={styles.leftView}>
                <View style={styles.buttonView} >
                    <View style={{ paddingLeft: 8, marginBottom: 8 }}>
                        <Button title='Editar Perfil' />
                    </View>
                    <View style={{ paddingLeft: 8 }}>
                        <Button title='Sair'
                            onPress={props.onSair}
                        />
                    </View>
                    <View style={{ paddingLeft: 8, marginTop: 35 }}>
                        <Button
                            title='Add Amigos'
                            onPress={props.onAddAmigo}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.rightView}>
                <AmigoItem />
                <AmigoItem />
                <AmigoItem />
                <AmigoItem />
            </View>
        </View>

    )

}
const styles = StyleSheet.create({
    tela: {
        paddingVertical: 50,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    buttonView: {
        flexDirection: 'column',
        width: '80%',
        marginRight: 20,
    },
    rightView: {
        borderWidth: 1,
    },
    leftView: {
        alignItems: 'center',
    }

})

export default TelaPrincipal
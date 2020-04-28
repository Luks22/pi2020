import React, { useState, useEffect } from 'react'
import { Button, View, StyleSheet, Text, FlatList, ScrollView } from 'react-native'
import WifiManager from 'react-native-wifi-reborn';
import { NetworkInfo } from "react-native-network-info";
import AmigoItem from '../components/AmigoItem';
import Api from '../services/Api';

const TelaPrincipal = (props) => {
    const [usuario, setUsuario] = useState(props.usuarioLogado)
    const [listaAmigos, setListaAmigos] = useState([]);
    const [roteadores, setRoteadores] = useState([]);

    async function deletarAmigo(idAmigo) {

        const response = await Api.get(`/usuario/${idAmigo}`);

        let numero = response.data.celular.numero;
        let numeroUsuario = usuario.celular.numero;

        const deletarAmigo = await Api.delete(`/deletarAmigo/${usuario.id}/numeroAmigo=${numero.toString()}`);

        const deletarUsuarioDoAmigo = await Api.delete(`/deletarAmigo/${idAmigo}/numeroAmigo=${numeroUsuario.toString()}`);

        alert(deletarAmigo.data);


    }

    const loadAmigos = async () => {
        const response = await Api.get(`/amigos/${usuario.id}`);

        setListaAmigos(response.data);
    }


    useEffect(() => {

        async function carregarAmigos() {

            const response = await Api.get(`/amigos/${usuario.id}`);

            setListaAmigos(response.data);
        }

        carregarAmigos();

    }, [usuario]);

    useEffect(() => {

        const roteadoresNasProximidades = async () => {

            WifiManager.loadWifiList(
                wifiList => {
                    let wifiArray = JSON.parse(wifiList);
                    setRoteadores(wifiArray);
                },
                error => console.log(error)
            );

            roteadores.map(roteador => {
                let router = {ssid: roteador.SSID, bssid: roteador.BSSID};
                const response = Api.post("/insereRoteador", router);
            })
        }

        roteadoresNasProximidades();
    }, [listaAmigos]);

    useEffect(() => {

        const localizacaoAtual = () => {

            NetworkInfo.getBSSID().then(async bssidAtual => {

                let sinal = 0;
                let frequencia = 0;

                roteadores.map(roteador => {
                    if (bssidAtual == roteador.BSSID) {
                        sinal = roteador.level;
                        frequencia = roteador.frequency;
                    }
                });

                let distance = Math.ceil(Math.pow(10.0, (27.55 - (20 * Math.log10(frequencia)) + Math.abs(sinal)) / 20));

                const localizacao = ({ roteador: bssidAtual, localizacao: distance.toString() });

                if (localizacao.roteador != "" && localizacao.localizacao != "" &&  localizacao.localizacao != "Infinity") {

                    const response = await Api.put(`/atualizaUsuario/${usuario.id}/Localizacao`, localizacao)

                }
            });
        }

        localizacaoAtual();

    }, [roteadores]);


    return (
        <ScrollView>
            <View style={styles.tela}>
                <View style={styles.leftView}>
                    <View style={styles.buttonView} >
                        <View style={{ paddingLeft: 8, marginBottom: 8 }}>
                            <Button title='Editar Perfil'
                                onPress={props.onEditar}
                            />
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
                        <View style={{ paddingLeft: 8, marginTop: 35 }}>
                            <Button
                                title='Carregar amigos'
                                onPress={loadAmigos}
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
        </ScrollView>

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
import React, { useState, useEffect } from 'react'
import { Button, View, StyleSheet, Text, FlatList, ScrollView } from 'react-native'
import WifiManager from 'react-native-wifi-reborn';
import { NetworkInfo } from "react-native-network-info";
import AmigoItem from '../components/AmigoItem';
import Api from '../services/Api';
import GetLocation from 'react-native-get-location';
import ListaAmigos from '../components/ListaAmigos';
import calcDistance from '../utils/CalcDistance';
import calcAndar from '../utils/calcAndar';

const TelaPrincipal = ({navigation}) => {
    const [usuario, setUsuario] = useState(navigation.getParam('usuario'));
    const [listaAmigos, setListaAmigos] = useState([]);
    const [roteadores, setRoteadores] = useState([]);
    const [amigosPerto, setAmigosPerto] = useState([]);

    async function deletarAmigo(idAmigo) {

        const response = await Api.get(`/usuario/${idAmigo}`);

        let numero = response.data.celular.numero;
        let numeroUsuario = usuario.celular.numero;

        const deletarAmigo = await Api.delete(`/deletarAmigo/${usuario.id}/numeroAmigo=${numero.toString()}`);

        const deletarUsuarioDoAmigo = await Api.delete(`/deletarAmigo/${idAmigo}/numeroAmigo=${numeroUsuario.toString()}`);

        loadAmigos();

        alert(deletarAmigo.data);


    }

    const loadAmigos = async () => {
        const response = await Api.get(`/amigos/${usuario.id}`);

        setListaAmigos(response.data);

        setAmigosPerto([]);
    }

    const amigosNasProximidades = async () => {              
        const response = await Api.get(`/amigos/${usuario.id}`);
        const user = await Api.get(`/usuario/${usuario.id}`);

        setListaAmigos(response.data);
        setUsuario(user.data);

        let amigoNaArea = { id: 0, nome: '', numero: '', altura: 0, distancia: 0 }

        let amigosNasProximidades = [];

        listaAmigos.map((amigo) => {
            if (usuario.roteadorBssid === amigo.roteadorBssid && usuario.localizacao >= amigo.localizacao) {
                let distancia = Math.ceil(calcDistance(usuario.latitude, amigo.latitude, usuario.longitude, amigo.longitude) * 1000);
                
                let altura1 = Math.floor(usuario.altitude);
                let altura2 = Math.floor(amigo.altitude);
                
                let andar = calcAndar(altura1, altura2);

                amigoNaArea = { id: amigo.id, nome: amigo.nome, numero: amigo.celular.numero, altitude: andar, distancia: distancia };

                amigosNasProximidades.push(amigoNaArea);
            }
        });

        if (amigosNasProximidades.length <= 0) {
            alert("Voce nao tem amigos nas proximidades");
            return;
        }

        setAmigosPerto(amigosNasProximidades);
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
                let router = { ssid: roteador.SSID, bssid: roteador.BSSID };
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

                const localizacao = ({
                    roteador: bssidAtual,
                    localizacao: distance.toString(),
                });

                if (localizacao.roteador != "" && localizacao.localizacao != "" && localizacao.localizacao != "Infinity") {

                    const response = await Api.put(`/atualizaUsuario/${usuario.id}/Localizacao`, localizacao)

                }
            });

        }

        localizacaoAtual();

    }, [roteadores]);

    useEffect(() => {

        const coordenadasAtuais = () => {

            GetLocation.getCurrentPosition({
                enableHighAccuracy: true,
                timeout: 15000,
            }).then(async location => {

                let altitude = 0;
                let longitude = 0;
                let latitude = 0;

                altitude = location.altitude;
                longitude = location.longitude;
                latitude = location.latitude;

                const localizacao = ({
                    altitude: altitude,
                    latitude: latitude,
                    longitude: longitude
                });

                const response = await Api.put(`/atualizaUsuario/${usuario.id}/Coordenadas`, localizacao)

            });
        }

        coordenadasAtuais();

    }, []);



    let conteudo = <FlatList
        data={listaAmigos}
        renderItem={
            friend => (
                <ListaAmigos
                    chave={friend.item.id}
                    nome={friend.item.nome}
                    celular={friend.item.celular.numero}
                    onExcluirAmigo={deletarAmigo}
                />
            )
        }
    />

    if (amigosPerto.length > 0) {
        conteudo = <FlatList
            data={amigosPerto}
            renderItem={
                friend => (
                    <AmigoItem
                        chave={friend.item.id}
                        nome={friend.item.nome}
                        celular={friend.item.numero}
                        andar={friend.item.altitude}
                        distancia={friend.item.distancia}
                        onExcluirAmigo={deletarAmigo}
                    />
                )
            }
        />
    }


    return (
        <View style={styles.tela}>
            <View style={styles.leftView}>
                <View style={styles.buttonView} >
                    <View style={{ paddingLeft: 8, marginBottom: 8 }}>
                        <Button title='Editar Perfil'
                            onPress={() => {
                                navigation.navigate('Editar', {usuario: usuario})}}
                        />
                    </View>
                    <View style={{ paddingLeft: 8 }}>
                        <Button title='Sair'
                            onPress={() => {
                                navigation.navigate('Login')}}
                        />
                    </View>
                    <View style={{ paddingLeft: 8, marginTop: 35 }}>
                        <Button
                            title='Add Amigos'
                            onPress={() => {
                                navigation.navigate('AdicionarAmigo', {usuario: usuario})}}
                        />
                    </View>
                    <View style={{ paddingLeft: 8, marginTop: 35 }}>
                        <Button
                            title='Listar Amigos'
                            onPress={loadAmigos}
                        />
                    </View>
                    <View style={{ paddingLeft: 8, marginTop: 35 }}>
                        <Button
                            title='Amigos nas proximidades'
                            onPress={amigosNasProximidades}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.rightView}>
                {conteudo}
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    tela: {
        marginTop: 15,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buttonView: {
        flexDirection: 'column',
        width: '70%',
        marginRight: 20,
    },
    rightView: {
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 6,
        borderRadius: 30,
    },
    leftView: {
        flex: 1,
        alignItems: 'center',
    }

})

export default TelaPrincipal
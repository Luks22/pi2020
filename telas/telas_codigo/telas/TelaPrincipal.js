import React, { useState } from 'react'
import { Button, View, StyleSheet, Text, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import AmigoItem from '../components/AmigoItem'

const TelaPrincipal = (props) => {
    const [friends, setFriends] = useState([
        { key: 1, nome: "Matheeeeeeeeeeeeeeeeeeeeeeeeeus", celular: "977773333", andar: "2º andar", distancia: "500m" },
        { key: 2, nome: "Teste teste teste teste teste teste", celular: "977773333", andar: "2º andar", distancia: "500m" },
        { key: 3, nome: "Teste3", celular: "977773333", andar: "2º andar", distancia: "500m" },
        { key: 4, nome: "Teste4", celular: "977773333", andar: "2º andar", distancia: "500m" },
        { key: 5, nome: "Teste5", celular: "977773333", andar: "2º andar", distancia: "500m" },
        { key: 6, nome: "Teste6", celular: "977773333", andar: "2º andar", distancia: "500m" },
        { key: 7, nome: "Teste7", celular: "977773333", andar: "2º andar", distancia: "500m" },
        { key: 8, nome: "Teste8", celular: "977773333", andar: "2º andar", distancia: "500m" },
    ])

    return (
        <View style={styles.tela}>
            <View style={styles.leftView}>
                <View style={styles.buttonView} >
                    <View style={{ paddingLeft: 8, marginBottom: 8 }}>
                        <TouchableOpacity
                            onPress={props.onEditar}
                        >
                            <View style={styles.buttons}>
                                <Text style={styles.buttonText}>EDITAR PERFIL</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingLeft: 8 }}>
                    <TouchableOpacity
                            onPress={props.onSair}
                        >
                            <View style={styles.buttons}>
                                <Text style={styles.buttonText}>SAIR</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingLeft: 8, marginTop: 35 }}>
                    <TouchableOpacity
                            onPress={props.onAddAmigo}
                        >
                            <View style={styles.buttons}>
                                <Text style={styles.buttonText}>ADD AMIGOS</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.rightView}>
                <FlatList
                    data={friends}
                    renderItem={
                        friend => (
                            <AmigoItem
                                chave={friend.item.key}
                                nome={friend.item.nome}
                                celular={friend.item.celular}
                                andar={friend.item.andar}
                                distancia={friend.item.distancia}
                            />
                        )
                    }
                />
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
        backgroundColor: "#d4faff66",
    },
    leftView: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20
    },
    buttons: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d4faff',
        height: 40,
        elevation: 3,
        borderRadius: 10,
        width: '100%'
    },
    buttonText: {
        fontSize: 13,
        textAlign: 'center'
    }

})

export default TelaPrincipal
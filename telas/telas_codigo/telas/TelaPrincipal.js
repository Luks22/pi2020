import React, { useState } from 'react'
import { Button, View, StyleSheet, Text, FlatList, ScrollView } from 'react-native'
import AmigoItem from '../components/AmigoItem'

const TelaPrincipal = (props) => {
    const [friends, setFriends] = useState([
        {key: 1, nome: "Matheeeeeeeeeeeeeeeeeeeeeeeeeus", celular: "977773333", andar: "2º andar", distancia: "500m"},
        {key: 2, nome: "Teste teste teste teste teste teste", celular: "977773333", andar: "2º andar", distancia: "500m"},
        {key: 3, nome: "Teste3", celular: "977773333", andar: "2º andar", distancia: "500m"},
        {key: 4, nome: "Teste4", celular: "977773333", andar: "2º andar", distancia: "500m"},
        {key: 5, nome: "Teste5", celular: "977773333", andar: "2º andar", distancia: "500m"},
        {key: 6, nome: "Teste6", celular: "977773333", andar: "2º andar", distancia: "500m"},
        {key: 7, nome: "Teste7", celular: "977773333", andar: "2º andar", distancia: "500m"},
        {key: 8, nome: "Teste8", celular: "977773333", andar: "2º andar", distancia: "500m"},
    ])

    return (
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
    },
    leftView: {
        flex: 1,
        alignItems: 'center',
    }

})

export default TelaPrincipal
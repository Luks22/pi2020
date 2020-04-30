import React, { useState } from 'react'
import { Button, View, StyleSheet, Text, FlatList, ScrollView } from 'react-native'
import AmigoItem from '../components/AmigoItem'

const TelaPrincipal = (props) => {
    const [users, setUsers] = useState([
        {key: 1, nome: "Teste1", usuario: "test1", senha: "2222", celular: "977773333"},
        {key: 2, nome: "Teste2", usuario: "test2", senha: "2222", celular: "977773333"},
        {key: 3, nome: "Teste3", usuario: "test3", senha: "2222", celular: "977773333"},
        {key: 4, nome: "Teste4", usuario: "test4", senha: "2222", celular: "977773333"},
        {key: 5, nome: "Teste5", usuario: "test5", senha: "2222", celular: "977773333"},
        {key: 6, nome: "Teste6", usuario: "test6", senha: "2222", celular: "977773333"},
        {key: 7, nome: "Teste7", usuario: "test7", senha: "2222", celular: "977773333"},
        {key: 8, nome: "Teste8", usuario: "test8", senha: "2222", celular: "977773333"},
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
                    data={users}
                    renderItem={
                        user => (
                            <AmigoItem
                                chave={user.item.key}
                                nome={user.item.nome}
                                celular={user.item.celular}
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
        width: '80%',
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
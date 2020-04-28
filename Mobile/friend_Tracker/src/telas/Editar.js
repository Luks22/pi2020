import React, { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native'
import Api from '../services/Api'

const Editar = (props) => {
    const [usuarioAtual, setUsuarioAtual] = useState(props.usuarioLogado)
    const [user, setUser] = useState({ nome: usuarioAtual.nome, login: usuarioAtual.login.login, senha: usuarioAtual.login.senha});
    const [celular, setCelular] = useState({numeroNovo: usuarioAtual.celular.numero})
    
    const capturarNome = (nome) => {
        let nomeUser = nome

        setUser({
            nome: nomeUser,
            login: user.login,
            senha: user.senha,
        })
    }
    const capturarUsuario = (login) => {
        let loginUser = login;
        setUser({
            nome: user.nome,
            login: loginUser,
            senha: user.senha,
        })
    }
    const capturarSenha = (senha) => {
        let senhaUser = senha
        setUser({
            nome: user.nome,
            login: user.login,
            senha: senhaUser,
        })
    }
    const capturarCelular = (celular) => {
        let celularUser = celular
        setCelular({numeroNovo: celularUser});
        
    }

    const atualizarUsuario = async () => {
        const response = await Api.put(`/atualizaUsuario/${usuarioAtual.id}`, user);

        const number = await Api.put(`/atualizarCelular/${usuarioAtual.id}`, celular);

        props.onUpdateUsuario(usuarioAtual.id);
    }

    return (
        <ScrollView>
            <View style={styles.tela}>
                <Text style={styles.cadastroText}>Editar Perfil</Text>
                <View style={styles.editView}>
                    <View style={styles.editInput}>
                        <Text>Nome Completo: </Text>
                        <TextInput
                            style={styles.fieldInput}
                            value={user.nome}
                            onChangeText = {capturarNome}

                        />
                    </View>
                    <View style={styles.editInput}>
                        <Text>Usuário: </Text>
                        <TextInput
                            style={styles.fieldInput}
                            value={user.login}
                            onChangeText = {capturarUsuario}

                        />
                    </View>
                    <View style={styles.editInput}>
                        <Text>Senha: </Text>
                        <TextInput
                            style={styles.fieldInput}
                            value={user.senha}
                            onChangeText = {capturarSenha}
                        />
                    </View>
                    <View style={styles.editInput}>
                        <Text>Número do celular: </Text>
                        <TextInput
                            style={styles.fieldInput}
                            value={celular.numeroNovo.toString()}
                            onChangeText = {capturarCelular}

                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Aplicar alterações"
                            onPress = {atualizarUsuario}
                        />
                        <Button
                            title="voltar"
                            onPress={props.onVoltar}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    tela: {
        flex: 1,
        marginTop: 35,
        justifyContent: 'center',
    },
    editInput: {
        alignItems: 'center',
        marginBottom: 13,
    },
    editView: {
        flexDirection: 'column',
        borderWidth: 1,
        borderRadius: 20,
        padding: 20,
        marginHorizontal: 10,
    },
    fieldInput: {
        borderWidth: 1,
        width: '80%',
        borderColor: '#00000066',
        marginTop: 4,
        paddingHorizontal: 2,
    },
    button: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        marginVertical: 30,
    },
    cadastroText: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 35,
    }
})

export default Editar
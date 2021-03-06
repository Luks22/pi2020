import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button, Keyboard, ScrollView, TouchableOpacity } from 'react-native'

const Cadastro = (props) => {
    const [user, setUser] = useState({ nome: "", usuario: "", senha: "", celular: "" })

    const capturarNome = (nome) => {
        let nomeUser = nome
        let usuario = user.usario
        let senha = user.senha
        let celular = user.celular
        setUser({
            nome: nomeUser,
            usuario: usuario,
            senha: senha,
            celular: celular
        })
    }
    const capturarUsuario = (usuario) => {
        let nome = user.nome
        let usuarioUser = usuario
        let senha = user.senha
        let celular = user.celular
        setUser({
            nome: nome,
            usuario: usuarioUser,
            senha: senha,
            celular: celular
        })
    }
    const capturarSenha = (senha) => {
        let nome = user.nome
        let usuario = user.usuario
        let senhaUser = senha
        let celular = user.celular
        setUser({
            nome: nome,
            usuario: usuario,
            senha: senhaUser,
            celular: celular
        })
    }
    const capturarCelular = (celular) => {
        let nome = user.nome
        let usuario = user.usuario
        let senha = user.senha
        let celularUser = celular
        setUser({
            nome: nome,
            usuario: usuario,
            senha: senha,
            celular: celularUser
        })
    }

    const cadastrar = () => {
        if (user.nome == "" || user.usuario == "" || user.senha == "" || user.celular == "") {
            alert("Todos os campos são obrigatórios")
            return
        }
        console.log(user)

        setUser({
            nome: '',
            usuario: '',
            senha: '',
            celular: ''
        })
    }

    return (
        <ScrollView>
            <View style={styles.tela}>
                <View style={styles.telaCadastro}>
                    <Text style={styles.cadastroText}>Cadastro</Text>
                    <View style={styles.fieldView}>
                        <Text>Nome Completo: </Text>
                        <TextInput
                            style={styles.fieldInput}
                            onChangeText={capturarNome}
                            value={user.nome}
                        />
                    </View>
                    <View style={styles.fieldView}>
                        <Text>Usuário: </Text>
                        <TextInput
                            style={styles.fieldInput}
                            onChangeText={capturarUsuario}
                            value={user.usuario}
                        />
                    </View>
                    <View style={styles.fieldView}>
                        <Text>Senha: </Text>
                        <TextInput
                            style={styles.fieldInput}
                            onChangeText={capturarSenha}
                            value={user.senha}
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={styles.fieldView}>
                        <Text>Número do celular: </Text>
                        <TextInput
                            style={styles.fieldInput}
                            onChangeText={capturarCelular}
                            value={user.celular}
                        />
                    </View>
                    <View style={styles.buttonView}>
                        <TouchableOpacity
                            onPress={cadastrar}
                        >
                            <View style={styles.buttonCadastrar}>
                                <Text style={styles.buttonText}>CADASTRAR</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={props.onVoltarLogin}
                        >
                            <View style={styles.buttonVoltar}>
                                <Text style={styles.buttonText}>VOLTAR</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    tela: {
        flex: 1,
        marginTop: 35,
        justifyContent: 'center',
    },
    telaCadastro: {
        flexDirection: 'column',
        borderWidth: 1,
        borderRadius: 20,
        padding: 20,
        marginHorizontal: 10,
        backgroundColor: "#d4faff44",
    },
    fieldView: {
        alignItems: 'center',
        marginBottom: 13,
    },
    fieldInput: {
        borderWidth: 1,
        width: '80%',
        borderColor: '#00000066',
        marginTop: 4,
        paddingHorizontal: 2,
    },
    buttonView: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 45,
        marginVertical: 10
    },
    cadastroText: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 35,
        marginBottom: 24
    },
    buttonVoltar: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d4faff',
        height: 36,
        width: 76,
        elevation: 2,
        borderRadius: 10
    },
    buttonCadastrar: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d4faff',
        height: 36,
        width: 110,
        elevation: 2,
        borderRadius: 10
    },
    buttonText: {
        fontSize: 14,
    }
});

export default Cadastro
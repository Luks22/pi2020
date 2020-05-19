import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native'
import Api from '../services/Api';
import image from '../constants/Imagem';

const Editar = ({ navigation }) => {
    const [usuarioAtual, setUsuarioAtual] = useState(navigation.getParam('usuario'));
    const [user, setUser] = useState({ nome: usuarioAtual.nome, login: usuarioAtual.login.login, senha: usuarioAtual.login.senha });
    const [celular, setCelular] = useState({ numeroNovo: usuarioAtual.celular.numero })

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
        setCelular({ numeroNovo: celularUser });

    }

    const atualizarUsuario = async () => {
        const response = await Api.put(`/atualizaUsuario/${usuarioAtual.id}`, user);

        const number = await Api.put(`/atualizarCelular/${usuarioAtual.id}`, celular);

        if (response.data == 0) {
            alert("Nome de Login Já Existe");
            return;
        } else if (number.data == 0) {
            alert("Numero Já Existe");
            return;
        }


        const usuario = await Api.get(`/usuario/${usuarioAtual.id}`);

        navigation.push('TelaPrincipal', { usuario: usuario.data });
    }

    return (
        <View style={styles.tela}>
            <ImageBackground source={image.imagem} style={styles.image} />
            <View style={styles.editView}>
                <Text style={styles.editText}>Editar Perfil</Text>
                <View style={styles.editInput}>
                    <Text>Nome Completo: </Text>
                    <TextInput
                        style={styles.fieldInput}
                        onChangeText={capturarNome}
                        value={user.nome}

                    />
                </View>
                <View style={styles.editInput}>
                    <Text>Login: </Text>
                    <TextInput
                        style={styles.fieldInput}
                        onChangeText={capturarUsuario}
                        value={user.login}

                    />
                </View>
                <View style={styles.editInput}>
                    <Text>Senha: </Text>
                    <TextInput
                        style={styles.fieldInput}
                        onChangeText={capturarSenha}
                        value={user.senha}
                    />
                </View>
                <View style={styles.editInput}>
                    <Text>Número do celular: </Text>
                    <TextInput
                        style={styles.fieldInput}
                        onChangeText={capturarCelular}
                        value={celular.numeroNovo.toString()}

                    />
                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity onPress={atualizarUsuario}>
                        <View style={styles.buttonAplicar}>
                            <Text style={styles.buttonText}>APLICAR ALTERAÇÕES</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.push('TelaPrincipal', { usuario: usuarioAtual })
                        }}
                    >
                        <View style={styles.buttonVoltar}>
                            <Text style={styles.buttonText}>VOLTAR</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    tela: {
        flex: 1,
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
        backgroundColor: "#d4faff44",
    },
    fieldInput: {
        borderWidth: 1,
        width: '80%',
        borderColor: '#000066',
        marginTop: 4,
        paddingHorizontal: 2,
    },
    buttonView: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        marginVertical: 30,
    },
    editText: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 35,
        marginBottom: 24,
    },
    buttonAplicar: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d4faff',
        height: 36,
        width: 165,
        elevation: 2,
        borderRadius: 10

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
    buttonText: {
        fontSize: 14,
        textAlign: 'center'
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
})

export default Editar
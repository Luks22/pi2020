import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, PermissionsAndroid, ScrollView, ImageBackground } from 'react-native';
import Api from '../services/Api';
import image from '../constants/Imagem'

const Login = ({ navigation }) => {
    const [user, setUser] = useState({ login: '', senha: '' })

    const capturarLogin = (login) => {
        let nomeLogin = login;

        setUser({
            login: nomeLogin,
            senha: user.senha
        })
    }
    const capturarSenha = (senha) => {
        let senhaUser = senha;
        setUser({
            login: user.login,
            senha: senhaUser
        })
    }

    async function Logar() {

        if (user.login == '' || user.senha == '') {
            alert("Todos os campos são obrigatórios");
            return;
        }

        const response = await Api.get(`/login/username=${user.login}&password=${user.senha}`);

        if (response.data.id <= 0) {
            alert("Usuario ou senha inválidos");
            setUser({ login: '', senha: '' });
            return;
        }

        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: 'Friend Tracker precisa de sua permissão para logar:',
                message: 'Este aplicativo requer acesso a sua localização',
            }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            navigation.navigate('TelaPrincipal', { usuario: response.data });
            setUser({ login: '', senha: '' });
            alert("Bem vindo!!!");
        } else {
            return;
        }
    }


    return (

           <View style={styles.tela}>
               <ImageBackground source={image.imagem} style={styles.image} />
                <Text style={styles.loginText}>Login</Text>
                <View style={styles.telaLogin}>
                    <View style={styles.fieldView}>
                        <Text>Usuário</Text>
                        <TextInput
                            style={styles.fieldInput}
                            onChangeText={capturarLogin}
                            value={user.login}
                        />
                    </View>
                    <View style={styles.fieldView}>
                        <Text>Senha</Text>
                        <TextInput
                            style={styles.fieldInput}
                            onChangeText={capturarSenha}
                            value={user.senha}
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={styles.buttonView}>
                        <TouchableOpacity
                            onPress={() => { Logar() }}>
                            <View style={styles.buttons}>
                                <Text style={styles.buttonText}>LOGAR</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.buttonCadastro}>
                            <Text style={{ textAlign: 'center', fontSize: 13 }}>Não possui uma conta?</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    setUser({ login: '', senha: '' });
                                    navigation.navigate('Cadastro')
                                }}
                            >
                                <View style={styles.buttons}>
                                    <Text style={styles.buttonText}>CADASTRAR</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
    );

}

const styles = StyleSheet.create({
    tela: {
        flex: 1,
        justifyContent: 'center',

    },
    telaLogin: {
        flexDirection: 'column',
        borderWidth: 1,
        borderRadius: 20,
        padding: 30,
        marginHorizontal: 30,
        backgroundColor: "#d4faff44",
        elevation: 2
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
    loginText: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 35,
        marginBottom: 24,
    },
    buttonView: {
        paddingHorizontal: 40,
        marginTop: 18,
    },
    buttonCadastro: {
        marginTop: 18
    },
    buttons: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d4faff',
        height: 36,
        elevation: 2,
        borderRadius: 10
    },
    buttonText: {
        fontSize: 14,
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
});

export default Login
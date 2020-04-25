import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Api from '../services/Api';

const Login = (props) => {
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

    async function Logar(){
        
        if(user.login == '' || user.senha == ''){
            alert("Todos os campos são obrigatórios");
            return;
        }
        
        const response = await Api.get(`/login/username=${user.login}&password=${user.senha}`);

        if(response.data.id<=0){
            alert("Usuario ou senha inválidos");
            setUser({login: '', senha: '' });
            return;
        }

        props.onLogar(response.data);

    }


    return (
        <View style={styles.tela}>
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
                    />
                </View>
                <View style={styles.buttonView}>
                    <Button
                        title="Logar"
                        onPress={() => {Logar()}}
                    />
                    <View style={styles.buttonCadastro}>
                        <Text style={{ textAlign: 'center', fontSize: 13 }}>Não possui uma conta?</Text>
                        <Button
                            title="Cadastrar"
                            onPress={props.onCadastro}
                        />
                    </View>
                </View>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    tela: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
    },
    telaLogin: {
        flexDirection: 'column',
        borderWidth: 1,
        borderRadius: 20,
        padding: 30,
        marginHorizontal: 30,
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
    },
    buttonView: {
        paddingHorizontal: 40
    },
    buttonCadastro: {
        marginTop: 18
    }
});

export default Login
import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button, Keyboard } from 'react-native'
import Api from '../services/Api';
import NetInfo from "@react-native-community/netinfo";

const Cadastro = (props) => {
    const [user, setUser] = useState({ nome: "", login: "", senha: "", numero: "", ip: "" })

    const capturarNome = (nome) => {
        let nomeUser = nome

        setUser({
            nome: nomeUser,
            login: user.login,
            senha: user.senha,
            numero: user.numero,
            ip: user.ip
        })
    }
    const capturarUsuario = (login) => {
        let loginUser = login;
        setUser({
            nome: user.nome,
            login: loginUser,
            senha: user.senha,
            numero: user.numero,
            ip: user.ip
        })
    }
    const capturarSenha = (senha) => {
        let senhaUser = senha
        setUser({
            nome: user.nome,
            login: user.login,
            senha: senhaUser,
            numero: user.numero,
            ip: user.ip
        })
    }
    const capturarCelular = (celular) => {
        let celularUser = celular
        setUser({
            nome: user.nome,
            login: user.login,
            senha: user.senha,
            numero: celularUser,
            ip: user.ip
        })
    }

     async function cadastrar(){
        NetInfo.fetch().then((state) => {
            let ipD = state.details.ipAddress;
            setUser({
                nome: user.nome,
                login: user.login,
                senha: user.senha,
                numero: user.numero,
                ip: ipD
            })
        })
        
        if(user.nome == "" || user.usuario == "" || user.senha == "" || user.numero == ""){
            alert("Todos os campos são obrigatórios")
            return
        }
        
        const response = await Api.post('/cadastrar/', user);

        props.onCadastroConcluido();

        Keyboard.dismiss()

    }

    return (
        <View style={styles.tela}>
            <Text style={styles.cadastroText}>Cadastro</Text>
            <View style={styles.telaCadastro}>
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
                <View style={styles.button}>
                    <Button
                        title="Cadastrar"
                        onPress={cadastrar}
                    />
                    <Button
                        title = "voltar"
                        onPress = {props.onVoltarLogin}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    tela: {
        flex: 1,
        padding: 0,
        justifyContent: 'center',
    },
    telaCadastro: {
        flexDirection: 'column',
        borderWidth: 1,
        borderRadius: 20,
        padding: 20,
        marginHorizontal: 10,
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
    button: {
        alignItems: 'center',
        paddingVertical: 2,
        marginTop: 2,
    },
    cadastroText: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 35,
    }
});

export default Cadastro
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';

const Login = (props) => {

    return (
        <ScrollView>
            <View style={styles.tela}>

                <View style={styles.telaLogin}>
                    <Text style={styles.loginText}>Login</Text>
                    <View style={styles.fieldView}>
                        <Text>Usuário</Text>
                        <TextInput style={styles.fieldInput} />
                    </View>
                    <View style={styles.fieldView}>
                        <Text>Senha</Text>
                        <TextInput style={styles.fieldInput} />
                    </View>
                    <View style={styles.buttonView}>
                        <TouchableOpacity
                            onPress={props.onLogar}>
                            <View style={styles.buttons}>
                                <Text style={styles.buttonText}>LOGAR</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.buttonCadastro}>
                            <Text style={{ textAlign: 'center', fontSize: 13 }}>Não possui uma conta?</Text>
                            <TouchableOpacity
                                onPress={props.onCadastro}
                            >
                                <View style={styles.buttons}>
                                    <Text style={styles.buttonText}>CADASTRAR</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
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
    }
});

export default Login
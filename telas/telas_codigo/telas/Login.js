import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const Login = (props) => {

    return (
        <View style={styles.tela}>
            <Text style={styles.loginText}>Login</Text>
            <View style={styles.telaLogin}>
                <View style={styles.fieldView}>
                    <Text>Usuário</Text>
                    <TextInput style={styles.fieldInput} />
                </View>
                <View style={styles.fieldView}>
                    <Text>Senha</Text>
                    <TextInput style={styles.fieldInput} />
                </View>
                <View style={styles.buttonView}>
                    <Button
                        title="Logar"
                        onPress={props.onLogar}
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
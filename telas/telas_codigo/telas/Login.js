import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

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
    }
});

export default Login
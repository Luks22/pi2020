import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput, Button, Alert, ScrollView } from 'react-native'
import Api from '../services/Api';

const AdicionarAmigo = ({navigation}) => {

    const [usuario, setUsuario] = useState(navigation.getParam('usuario'));
    const [numero, setNumero] = useState({ numeroAmigo: '' });

    const capturarNumero = (numero) => {
        let amigo = numero;
        setNumero({ numeroAmigo: amigo });
    }

    async function addAmigo() {

        if (numero.numeroAmigo <= 0) {
            alert("Insira um numero válido");
            return;
        }

        const response = await Api.post(`/insereAmigo/${usuario.id}`, numero);

        if (response.data == 0) {
            setNumero({ numeroAmigo: 0 });
            alert("Você não pode adicionar você mesmo");
            return;
        } else if (response.data == 2) {
            setNumero({ numeroAmigo: 0 });
            alert("Amigo já adicionado");
            return;
        } else if (response.data == 3) {
            setNumero({ numeroAmigo: 0 });
            alert("Número não encontrado");
            return;
        }

        alert(`Numero ${numero.numeroAmigo} adicionado com sucesso!!!!`);
        setNumero({ numeroAmigo: '' });
        navigation.push('TelaPrincipal', {usuario: usuario});
    }


    return (
        <ScrollView>
            <View style={styles.tela}>
                <Text style={styles.addText}>Adicionar Amigos</Text>
                <View style={styles.addView}>
                    <View>
                        <Text>Digite o número do celular</Text>
                    </View>
                    <TextInput style={styles.addInput}
                        value={numero.numeroAmigo}
                        keyboardType="number-pad"
                        onChangeText={capturarNumero}
                    />
                    <View style={styles.buttonView}>
                        <Button
                            title="Adicionar"
                            onPress={addAmigo}
                        />
                        <Button
                            title="Voltar"
                            onPress={() => {
                                setNumero({ numeroAmigo: '' });
                                navigation.push('TelaPrincipal', {usuario: usuario})}
                            }
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
        paddingHorizontal: 20
    },
    addText: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 35,
    },
    addView: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 20,
        padding: 12,
    },
    addInput: {
        width: '80%',
        borderWidth: 1,
        marginRight: 10,
        paddingHorizontal: 2
    },
    buttonView: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 45,
        marginVertical: 30
    }
})

export default AdicionarAmigo
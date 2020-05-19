import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Alert, ImageBackground } from 'react-native'
import Api from '../services/Api';
import image from '../constants/Imagem';

const AdicionarAmigo = ({ navigation }) => {

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
        navigation.push('TelaPrincipal', { usuario: usuario });
    }


    return (
        <View style={styles.tela}>
            <ImageBackground source={image.imagem} style={styles.image} />
            <View style={styles.addView}>
                <Text style={styles.addText}>Adicionar Amigos</Text>
                <View>
                    <Text>Digite o número do celular</Text>
                </View>
                <TextInput style={styles.addInput}
                    value={numero.numeroAmigo}
                    keyboardType="number-pad"
                    onChangeText={capturarNumero}
                />
                <View style={styles.buttonView}>
                    <TouchableOpacity onPress={addAmigo}>
                        <View style={styles.buttons}>
                            <Text style={styles.buttonText}>ADICIONAR</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setNumero({ numeroAmigo: '' });
                        navigation.push('TelaPrincipal', { usuario: usuario })
                    }}>
                        <View style={styles.buttons}>
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
        paddingHorizontal: 20
    },
    addText: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 35,
        marginBottom: 24
    },
    addView: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 20,
        padding: 12,
        backgroundColor: "#d4faff44",
    },
    addInput: {
        width: '80%',
        borderWidth: 1,
        marginRight: 10,
        paddingHorizontal: 2,
        borderColor: '#000066',
    },
    buttonView: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 36,
        marginVertical: 30
    },
    buttons: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d4faff',
        width: 100,
        height: 38,
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
})

export default AdicionarAmigo
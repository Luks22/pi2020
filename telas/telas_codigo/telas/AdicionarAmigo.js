import React from 'react'
import { View, StyleSheet, Text, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native'

const AdicionarAmigo = (props) => {

    return (
        <ScrollView>
            <View style={styles.tela}>
                <View style={styles.addView}>
                    <Text style={styles.addText}>Adicionar Amigos</Text>
                    <View>
                        <Text>Digite o número do celular</Text>
                    </View>
                    <TextInput style={styles.addInput} />
                    <View style={styles.buttonView}>
                        <TouchableOpacity>
                            <View style={styles.buttons}>
                                <Text style={styles.buttonText}>ADICIONAR</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={props.onVoltar}>
                            <View style={styles.buttons}>
                                <Text style={styles.buttonText}>VOLTAR</Text>
                            </View>
                        </TouchableOpacity>
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
        borderColor: '#00000066',
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
    }
})

export default AdicionarAmigo
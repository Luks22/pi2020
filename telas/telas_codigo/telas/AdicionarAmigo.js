import React from 'react'
import { View, StyleSheet, Text, TextInput, Button, ScrollView } from 'react-native'

const AdicionarAmigo = (props) => {

    return (
        <ScrollView>
            <View style={styles.tela}>
                <Text style={styles.addText}>Adicionar Amigos</Text>
                <View style={styles.addView}>
                    <View>
                        <Text>Digite o número do celular</Text>
                    </View>
                    <TextInput style={styles.addInput} />
                    <View style={styles.buttonView}>
                        <Button
                            title="Adicionar"
                        />
                        <Button
                            title="Voltar"
                            onPress={props.onVoltar}
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
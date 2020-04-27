import React from 'react'
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native'

const Editar = (props) => {
    return (
        <ScrollView>
            <View style={styles.tela}>
                <Text style={styles.cadastroText}>Editar Perfil</Text>
                <View style={styles.editView}>
                    <View style={styles.editInput}>
                        <Text>Nome Completo: </Text>
                        <TextInput
                            style={styles.fieldInput}

                        />
                    </View>
                    <View style={styles.editInput}>
                        <Text>Usuário: </Text>
                        <TextInput
                            style={styles.fieldInput}

                        />
                    </View>
                    <View style={styles.editInput}>
                        <Text>Senha: </Text>
                        <TextInput
                            style={styles.fieldInput}

                        />
                    </View>
                    <View style={styles.editInput}>
                        <Text>Número do celular: </Text>
                        <TextInput
                            style={styles.fieldInput}

                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Aplicar alterações"
                        />
                        <Button
                            title="voltar"
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
    },
    editInput: {
        alignItems: 'center',
        marginBottom: 13,
    },
    editView: {
        flexDirection: 'column',
        borderWidth: 1,
        borderRadius: 20,
        padding: 20,
        marginHorizontal: 10,
    },
    fieldInput: {
        borderWidth: 1,
        width: '80%',
        borderColor: '#00000066',
        marginTop: 4,
        paddingHorizontal: 2,
    },
    button: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        marginVertical: 30,
    },
    cadastroText: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 35,
    }
})

export default Editar
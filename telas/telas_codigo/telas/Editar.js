import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'

const Editar = (props) => {
    return (
        <ScrollView>
            <View style={styles.tela}>
                <View style={styles.editView}>
                    <Text style={styles.editText}>Editar Perfil</Text>
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
                    <View style={styles.buttonView}>
                        <TouchableOpacity>
                            <View style={styles.buttonAplicar}>
                                <Text style={styles.buttonText}>APLICAR ALTERAÇÕES</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={props.onVoltar}
                        >
                            <View style={styles.buttonVoltar}>
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
        backgroundColor: "#d4faff44",
    },
    fieldInput: {
        borderWidth: 1,
        width: '80%',
        borderColor: '#00000066',
        marginTop: 4,
        paddingHorizontal: 2,
    },
    buttonView: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        marginVertical: 30,
    },
    editText: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 35,
        marginBottom: 24,
    },
    buttonAplicar: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d4faff',
        height: 36,
        width: 165,
        elevation: 2,
        borderRadius: 10

    },
    buttonVoltar: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d4faff',
        height: 36,
        width: 76,
        elevation: 2,
        borderRadius: 10
    },
    buttonText: {
        fontSize: 14,
        textAlign: 'center'
    }
})

export default Editar
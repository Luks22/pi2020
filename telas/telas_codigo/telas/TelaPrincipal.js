import React from 'react'
import { Button, View, StyleSheet, Text, FlatList, ScrollView } from 'react-native'
import AmigoItem from '../components/AmigoItem'

const TelaPrincipal = (props) => {
    return (
        <ScrollView>
            <View style={styles.tela}>
                <View style={styles.leftView}>
                    <View style={styles.buttonView} >
                        <View style={{ paddingLeft: 8, marginBottom: 8 }}>
                            <Button title='Editar Perfil' 
                                onPress={props.onEditar}
                            />
                        </View>
                        <View style={{ paddingLeft: 8 }}>
                            <Button title='Sair'
                                onPress={props.onSair}
                            />
                        </View>
                        <View style={{ paddingLeft: 8, marginTop: 35 }}>
                            <Button
                                title='Add Amigos'
                                onPress={props.onAddAmigo}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.rightView}>
                    <AmigoItem />
                    <AmigoItem />
                    <AmigoItem />
                    <AmigoItem />
                </View>
            </View>
        </ScrollView>
    )

}
const styles = StyleSheet.create({
    tela: {
        marginTop: 35,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buttonView: {
        flexDirection: 'column',
        width: '80%',
        marginRight: 20,
    },
    rightView: {
        borderWidth: 1,
        paddingBottom: 20,
        borderRadius: 30,
        padding: 6
    },
    leftView: {
        alignItems: 'center',
    }

})

export default TelaPrincipal
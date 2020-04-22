import React from 'react'
import { Button, View, StyleSheet, Text, FlatList } from 'react-native'
import AmigoItem from '../components/AmigoItem'

const TelaPrincipal = (props) => {
    return (
        <View style={styles.tela}>
            <View style = {styles.leftView}>
                <View style={styles.buttonView} >
                    <View style = {{paddingLeft: 8, marginBottom: 8}}>
                        <Button title='Editar Perfil' />
                    </View>
                    <View style = {{paddingLeft: 8}}>
                        <Button title='Sair' />
                    </View>
                    <View style = {{paddingLeft: 8, marginTop: 35}}>
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

    )

}
const styles = StyleSheet.create({
    tela: {
        paddingVertical: 50,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    buttonView: {
        flexDirection: 'column',
        width: '80%',
        marginRight: 20,
    },
    rightView: {
        borderWidth: 1,
    },
    leftView: {
        alignItems: 'center',
    }

})

export default TelaPrincipal
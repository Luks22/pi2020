import React from 'react'
import { Button, View, StyleSheet, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const ListaAmigos = (props) => {

    return (

        <View style={styles.amigoItem} >
            <View style={styles.itemLista}>
                <View>
                    <View style={styles.textField}>
                        <Text style={styles.text}>Nome: </Text>
                        <Text>{props.nome}</Text>
                    </View>
                    <View style={styles.textField}>
                        <Text style={styles.text}>Telefone: </Text>
                        <Text>{props.celular}</Text>
                    </View>
                </View>
                <View style={styles.buttonView}>
                    <Icon.Button
                        name="trash"
                        iconStyle={{ marginRight: 0 }}
                        borderRadius={8}
                        size={18}
                        backgroundColor="#fa6464"
                        onPress={props.onExcluirAmigo.bind(this, props.chave)}
                    />
                </View>
            </View>
        </View>

    )

}
const styles = StyleSheet.create({
    amigoItem: {
        paddingHorizontal: 6,
    },
    buttonView: {
        justifyContent: 'flex-start',
        paddingLeft: 18,
        paddingRight: 8
    },
    itemLista: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#000066',
        marginVertical: 8,
        marginHorizontal: 6,
        paddingVertical: 12,
        paddingLeft: 8
    },
    textField: {
        flexDirection: 'row',
        marginBottom: 2
    },
    text: {
        fontWeight: 'bold',
        fontSize: 15,
    }
})

export default ListaAmigos;
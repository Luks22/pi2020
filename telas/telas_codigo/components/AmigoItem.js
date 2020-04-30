import React from 'react'
import { Button, View, StyleSheet, Text } from 'react-native'

const AmigoItem = (props) => {

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
                    <View style={{ marginRight: 6 }}>
                        <Button title='Localizar' />
                    </View>
                    <View>
                        <Button
                            title='Excluir'
                            color='#fa6464'
                        />
                    </View>
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
        flexDirection: 'row',
        padding: 15,
    },
    itemLista: {
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: '#00000066',
        marginVertical: 8,
        marginHorizontal: 6,
        paddingTop: 8,
        paddingHorizontal: 6
    },
    textField: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 15,
    }
})

export default AmigoItem
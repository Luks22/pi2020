import React from 'react'
import { Button, View, StyleSheet, Text } from 'react-native'

const AmigoItem = (props) => {

    return (

        <View style={styles.amigoItem} >
            <View style={styles.itemLista}>
                <View>
                    <Text>
                        Nome: {props.nome}
                    </Text>
                    <Text>
                        Telefone : {props.celular}
                    </Text>
                </View>
                <View style={styles.buttonView}>
                    <View style={{marginRight: 6}}>
                        <Button title='Localizar' />
                    </View>
                    <View>
                        <Button title='Excluir' />
                    </View>
                </View>
            </View>
        </View>

    )

}
const styles = StyleSheet.create({
    amigoItem: {
        paddingHorizontal: 6,
        paddingTop: 15
    },
    buttonView: {
        flexDirection: 'row',
        padding: 15,
    },
    itemLista: {
        flexDirection: 'column',
        paddingLeft: 6,
        borderWidth: 1,
        marginTop: 8,
        marginHorizontal: 6
    }
})

export default AmigoItem
import React from 'react'
import { Button, View, StyleSheet, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const AmigoItem = (props) => {

    return (

        <View style={styles.amigoItem} >
            <View style={styles.itemLista}>
                <View style={styles.information}>
                    <View style={styles.textField}>
                        <Text style={styles.text}>Nome: </Text>
                        <Text>{props.nome}</Text>
                    </View>
                    <View style={styles.textField}>
                        <Text style={styles.text}>Telefone: </Text>
                        <Text>{props.celular}</Text>
                    </View>
                    <View style={styles.textField}>
                        <Text style={styles.text}>Andar: </Text>
                        <Text>{props.andar}</Text>
                    </View>
                    <View style={styles.textField}>
                        <Text style={styles.text}>Distância: </Text>
                        <Text>{props.distancia}m</Text>
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
        flex: 1,
        alignItems: 'flex-end',
        paddingRight: 4
    },
    itemLista: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        borderWidth: 1,
        borderColor: '#000066',
        marginVertical: 8,
        marginHorizontal: 6,
        paddingVertical: 12,
        paddingLeft: 8,
        backgroundColor: "#d4faff44",
    },
    textField: {
        flexDirection: 'row',
        marginBottom: 2
    },
    text: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    information: {
        width: '60%',
        maxWidth: '100%',
        paddingRight: 15,
        marginRight: 8,
    }
})

export default AmigoItem
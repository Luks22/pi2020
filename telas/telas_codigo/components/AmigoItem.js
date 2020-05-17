import React from 'react'
import { Button, View, StyleSheet, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const AmigoItem = (props) => {

    return (

        <View style={styles.amigoItem} >
            <View style={styles.itemLista}>
                <View style = {styles.information}>
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
                        <Text>{props.distancia}</Text>
                    </View>
                </View>
                <View style={styles.buttonView}>
                    <Icon.Button
                        name="trash"
                        iconStyle={{ marginRight: 0 }}
                        borderRadius={8}
                        size={18}
                        backgroundColor="#fa6464"
                        onPress={() => alert('Excluir amigo')}
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
        alignItems: 'center'
    },
    itemLista: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#00000066',
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
    },
    information: {
        width: '60%',
        maxWidth: '100%',
        paddingRight: 15,
        marginRight: 8,
    }
})

export default AmigoItem
import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

const Titulo = (props) => {
    return(
        <View style = {styles.cabecalho}>
            <Text style = {styles.titulo}> {props.titulo} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cabecalho: {
        width: '100%',
        height: 75,
        paddingTop: 20,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
    },  
    titulo: {
        color: '#000',
        fontSize: 22,
    }
})  

export default Titulo
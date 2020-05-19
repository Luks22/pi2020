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
        height: 65,
        paddingTop: 18,
        backgroundColor: '#bff7ff88',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        
    },  
    titulo: {
        color: '#000',
        fontSize: 22,
        fontFamily: 'IMFellFrenchCanonSC-Regular'
    }
})  

export default Titulo
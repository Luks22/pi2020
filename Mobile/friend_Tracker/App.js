import React, { useState, useReducer } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import Login from './src/telas/Login'
import Cadastro from './src/telas/Cadastro'
import AdicionarAmigo from './src/telas/AdicionarAmigo'
import TelaPrincipal from './src/telas/TelaPrincipal'

export default function App() {
  const [clicouCadastro, setClicouCadastro] = useState(false)
  const [clicouSair, setClicouSair] = useState(false)
  const [clicouAdd, setClicouAdd] = useState(false)
  const [clicouPrincipal, setClicouPrincipal] = useState(false)
  const [usuario, setUsuario] = useState({})

  const sair = () => {
    setClicouPrincipal(false)
  }

  const cadastro = () => {
    setClicouCadastro(true)
  }

  const addAmigo = (user) => {
    setClicouPrincipal(false)
    setClicouAdd(true)
  }

  const telaPrincipal = () => {
    setClicouAdd(false)
    setClicouPrincipal(true)
  }

  const usuarioLogou = (usuarioLogado) => {
    setUsuario(usuarioLogado);

    setClicouPrincipal(true);
  }




  const cadastroConcluido = () => {
    Alert.alert(
      'Cadastro concluido !!!',
      'Cadastro efetuado com sucesso',
      [
        {
          text: 'Ok',
          style: 'default',
          onPress: setClicouCadastro(false)
        }
      ]
    );
  }

  const voltarLogin = () => {
    setClicouCadastro(false)
  }

  let conteudo = <Login onCadastro={cadastro}
    onLogar={usuarioLogou}
  />

  if (clicouCadastro == true) {
    conteudo = <Cadastro onVoltarLogin={voltarLogin} onCadastroConcluido = {cadastroConcluido}/>
  }
  else if (clicouAdd == true) {
    conteudo = <AdicionarAmigo onVoltar={telaPrincipal} usuarioLogado = {usuario}/>
  }
  else if (clicouPrincipal == true) {
    conteudo = <TelaPrincipal onAddAmigo={addAmigo}
      onSair={sair}
      usuarioLogado={usuario}
    />
  }

  return (
    <View style={styles.tela}>
      {conteudo}
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1
  }
});
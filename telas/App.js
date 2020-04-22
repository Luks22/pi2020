import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Login from './telas/Login'
import Cadastro from './telas/Cadastro'
import AdicionarAmigo from './telas/AdicionarAmigo'
import TelaPrincipal from './telas/TelaPrincipal'

export default function App() {
  const [clicouCadastro, setClicouCadastro] = useState(false)
  const [clicouSair, setClicouSair] = useState(false)
  const [clicouAdd, setClicouAdd] = useState(false)
  const [clicouPrincipal, setClicouPrincipal] = useState(false)

  const sair = () => {
    setClicouSair(true)
  }

  const cadastro = () => {
    setClicouCadastro(true)
  }

  const addAmigo = () => {
    setClicouAdd(true)
  }

  const telaPrincipal = () => {
    setClicouPrincipal(true)
  }

  //let conteudo = <Login onCadastro={cadastro}/>
  let conteudo = <TelaPrincipal onAddAmigo={addAmigo}/>

  if(clicouCadastro == true) {
    conteudo = <Cadastro />
  }
  else if(clicouSair == true) {
    conteudo = <Login onCadastro={cadastro}/>
  }
  else if(clicouAdd == true) {
    conteudo = <AdicionarAmigo onVoltar={telaPrincipal}/>
  }
  else if(clicouPrincipal == true) {
    conteudo = <TelaPrincipal onAddAmigo={addAmigo}/>
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

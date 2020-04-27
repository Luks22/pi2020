import React, { useState } from 'react';
import { StyleSheet, View, Header } from 'react-native';
import Login from './telas/Login'
import Cadastro from './telas/Cadastro'
import AdicionarAmigo from './telas/AdicionarAmigo'
import TelaPrincipal from './telas/TelaPrincipal'
import Cabecalho from './components/Cabecalho'
import Editar from './telas/Editar'

export default function App() {
  const [clicouCadastro, setClicouCadastro] = useState(false)
  const [clicouSair, setClicouSair] = useState(false)
  const [clicouAdd, setClicouAdd] = useState(false)
  const [clicouPrincipal, setClicouPrincipal] = useState(false)
  const [clicouEditar, setClicouEditar] = useState(false)

  const sair = () => {
    setClicouPrincipal(false)
  }

  const cadastro = () => {
    setClicouCadastro(true)
  }

  const addAmigo = () => {
    setClicouPrincipal(false)
    setClicouAdd(true)
  }

  const telaPrincipal = () => {
    setClicouAdd(false)
    setClicouEditar(false)
    setClicouPrincipal(true)
  }

  const voltarLogin = () => {
    setClicouCadastro(false);
  }

  const editar = () => {
    setClicouPrincipal(false)
    setClicouEditar(true)
  }

  //let conteudo = <Login onCadastro={cadastro}/>
  let conteudo = <Login onCadastro={cadastro}
    onLogar={telaPrincipal}
  />

  if (clicouCadastro == true) {
    conteudo = <Cadastro onVoltarLogin={voltarLogin} />
  }
  else if (clicouSair == true) {
    conteudo = <Login onCadastro={cadastro} />
  }
  else if (clicouAdd == true) {
    conteudo = <AdicionarAmigo onVoltar={telaPrincipal} />
  }
  else if (clicouPrincipal == true) {
    conteudo = <TelaPrincipal onAddAmigo={addAmigo}
      onSair={sair}
      onEditar={editar}
    />
  }
  else if(clicouEditar == true) {
    conteudo = <Editar onVoltar={telaPrincipal}/>
  }

  return (
    <View style={styles.tela}>
      <Cabecalho titulo={'Friend Tracker'}/>
      {conteudo}
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
  }
});

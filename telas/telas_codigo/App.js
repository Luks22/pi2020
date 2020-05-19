import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, ScrollView } from 'react-native';
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

  const image = { uri: "https://www.desktopbackground.org/download/768x1280/2014/01/02/695204_simple-color-hd-1080p-wallpaper-color-hd-wallpaper-hd-1080p-hd_2560x1440_h.jpg" }

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
  else if (clicouEditar == true) {
    conteudo = <Editar onVoltar={telaPrincipal} />
  }

  return (
    <View style={styles.tela}>
      <ImageBackground source={image} style={styles.image} />
      <Cabecalho titulo={'Friend Tracker'} />
        {conteudo}
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
});

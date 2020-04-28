import React, { useState, useReducer } from 'react';
import { StyleSheet, View, Alert, PermissionsAndroid } from 'react-native';
import Login from './src/telas/Login'
import Cadastro from './src/telas/Cadastro'
import AdicionarAmigo from './src/telas/AdicionarAmigo'
import TelaPrincipal from './src/telas/TelaPrincipal'
import Cabecalho from './src/components/Cabecalho'
import Editar from './src/telas/Editar'
import Api from './src/services/Api';

export default function App() {
  const [clicouCadastro, setClicouCadastro] = useState(false)
  const [clicouAdd, setClicouAdd] = useState(false)
  const [clicouPrincipal, setClicouPrincipal] = useState(false)
  const [clicouEditar, setClicouEditar] = useState(false)
  const [usuario, setUsuario] = useState({})

  const sair = () => {
    setUsuario({});
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
    setClicouEditar(false);
    setClicouAdd(false);
    setClicouPrincipal(true)
  }

  const editar = () => {
    setClicouPrincipal(false)
    setClicouEditar(true)
  }

  async function usuarioLogou(usuarioLogado) {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Friend Tracker precisa de sua permissão para logar:',
        message: 'Este aplicativo requer acesso a sua localização',
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      setUsuario(usuarioLogado);
      setClicouPrincipal(true);
      alert("Bem vindo!!!");
    } else {
      return;
    }
  }


  const amigoAdicionado = (numero) => {
    Alert.alert(
      'Amigo adicionado !!!',
      `Você adicionou o número ${numero} com sucesso`,
      [
        {
          text: 'Ok',
          style: 'default',
          onPress: setClicouAdd(false)
        }
      ]
    );

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

  const atualizouUsuario = async (id) => {
    const response = await Api.get(`/usuario/${id}`);

    setUsuario(response.data);
    
    Alert.alert(
      'Edição concluido !!!',
      'Você editou seus dados',
      [
        {
          text: 'Ok',
          style: 'default',
          onPress: setClicouPrincipal(true)
        }
      ]
    );

    setClicouEditar(false);
  }

  let conteudo = <Login onCadastro={cadastro}
    onLogar={usuarioLogou}
  />

  if (clicouCadastro == true) {
    conteudo = <Cadastro onVoltarLogin={voltarLogin} onCadastroConcluido={cadastroConcluido} />
  }
  else if (clicouAdd == true) {
    conteudo = <AdicionarAmigo
      onVoltar={telaPrincipal}
      onAmigoAdicionado={amigoAdicionado}
      usuarioLogado={usuario} />
  }
  else if (clicouPrincipal == true) {
    conteudo = <TelaPrincipal onAddAmigo={addAmigo}
      onSair={sair}
      usuarioLogado={usuario}
      onEditar={editar}
    />
  } else if (clicouEditar == true) {
    conteudo = <Editar onVoltar={telaPrincipal} 
    usuarioLogado = {usuario}
    onUpdateUsuario = {atualizouUsuario}
    />
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
    flex: 1
  }
});
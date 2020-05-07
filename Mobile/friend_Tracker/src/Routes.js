import { createAppContainer } from 'react-navigation';
import  { createStackNavigator } from 'react-navigation-stack';

import Login from './telas/Login';
import Cadastro from './telas/Cadastro';
import TelaPrincipal from './telas/TelaPrincipal';
import AdicionarAmigo from './telas/AdicionarAmigo';
import Editar from './telas/Editar';

const Routes = createAppContainer(
    createStackNavigator({
        Login: {
            screen: Login,
            navigationOptions: {
                title: 'Friend Tracker'
            }
        },
        Cadastro: {
            screen: Cadastro,
            navigationOptions: {
                title: 'Cadastro'
            }
        },
        TelaPrincipal: {
            screen: TelaPrincipal,
            navigationOptions: {
                title: 'FRIEND TRACKER'
            }
        },
        AdicionarAmigo: {
            screen: AdicionarAmigo,
            navigationOptions: {
                title: 'Adicionar Amigos'
            }
        },
        Editar: {
            screen: Editar,
            navigationOptions: {
                title: 'Editar Dados'
            }
        }
    }, {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#7d40e7'
            },
            headerTintColor: '#fff',
            headerBackTitleVisible: false,
            
        }
    })
);

export default Routes;
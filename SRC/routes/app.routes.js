// pagina responsavel pela parte de navegacao do app apos login, aqui a programa ira
// procurar as paginas responsaveis por isso na pasta 'pages'

//importando bibliotecas
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//importando paginas
import Dash from './pages/Dash';

//criando stack navigatos
const AppStack = createStackNavigator();

//componentes da rota 
function AppRoutes(){
    return(
        <AppStack.Navigator>
            <AppStack.Screen name="Dash" component={Dash}/>
        </AppStack.Navigator>
    );
}

//exportando para uso externo
export default AppRoutes();
// pagina responsavel pela parte de loguin e criação de conta, aqui a programa ira
// procurar as paginas responsaveis por isso na pasta 'pages'

//importando bibliotecas
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//importando paginas
import CriarConta from './pages/CriarConta';

//criando stack navigatos
const AuthStack = createStackNavigator();

//componentes da rota 
function AuthRoutes(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen name="CriarConta" component={CriarConta}/>
        </AuthStack.Navigator>
    );
}

//exportando para uso externo
export default AuthRoutes();
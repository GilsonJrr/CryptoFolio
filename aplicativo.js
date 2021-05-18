import React from 'react';
import {View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Dash from './SRC/pages/Dash';
import Sobre from './SRC/pages/Sobre';
import Coins from './SRC/pages/Coins';
import Login from './SRC/pages/Login';
import CriarConta from './SRC/pages/CriarConta';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs(){
  return(
    <Tab.Navigator
    
    tabBarOptions={{
      style:{
        backgroundColor:'#f56643',height: '12%',
      },
      activeTintColor: '#ffff',
      inactiveTintColor: '#000000',
      labelStyle:{
        fontSize: 15,
        fontWeight:'bold'
      }
    }}

    >
      <Tab.Screen name="INICIO" component={Dash}    
      options={{
        tabBarIcon: ({ color }) => (
          <FontAwesome5 name="home" color={color} size={30} />
        ),
      }}/>
      <Tab.Screen name="MOEDAS" component={Coins}
      options={{
        tabBarIcon: ({ color }) => (
          <FontAwesome5 name="coins" color={color} size={30} />
        ),
      }}/>
      <Tab.Screen name="GRAFICOS" component={Coins}
      options={{
        tabBarIcon: ({ color }) => (
          <FontAwesome5 name="chart-line" color={color} size={30} />
        ),
      }}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{
            headerShown: false,
          }} />
        <Stack.Screen 
          name="Dash" 
          component={Tabs}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen 
          name="Sobre" 
          component={Sobre}
          options={{
            headerShown: false, 
          }} />
          <Stack.Screen 
          name="Coins" 
          component={Coins}
          options={{
            headerShown: false, 
          }} />

        <Stack.Screen 
          name="CriarConta" 
          component={CriarConta} 
          options={{
            headerShown: false,
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

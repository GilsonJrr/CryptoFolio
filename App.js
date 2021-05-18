import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {View, StatusBar } from 'react-native';
import firebase from './SRC/services/firebaseConnection' ;

import Routes from './SRC/routes/index';

export default function App(){
    return(
        <NavigationContainer>
            <Routes/>
        </NavigationContainer>
    )
}
import React, {Component,useState} from 'react';
import { View,Text, SafeAreaView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import firebase from '../../../SRC/firebaseConnection';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation ();

    function irDash(){
        navigation.navigate('Dash');
    }

    function irCriarConta(){
        navigation.navigate('CriarConta');
      }

    async function logar(){

        irDash();
        /*
        await firebase.auth().signInWithEmailAndPassword(email,password)
        .then((value)=>{
            //alert('certo');
            irDash();
        })
        .catch((error)=>{
            alert('email ou senha errado');
            return;
        })*/
    };  

    return(
        <SafeAreaView>

            <FontAwesome
                style={{alignSelf:'center',marginTop: 30}}
                name="check-circle"
                size={120}
                color="#f56643"/>
            <Text style={styles.titulo}>CryptoFolio</Text>

            <View style={styles.card}>
                <FontAwesome
                    name="user"
                    size={30}
                    color="#3d3d3d"/>
                <TextInput 
                    style={styles.input}
                    placeholder="USUARIO OU EMAIL"
                    onChangeText={(texto)=>setEmail(texto)}
                    value={email}/> 
            </View>

            <View style={styles.card}>
                <FontAwesome
                    name="lock"
                    size={30}
                    color="#3d3d3d"/>
                <TextInput 
                    style={styles.input}
                    placeholder="SENHA"
                    onChangeText={(texto)=>setPassword(texto)}
                    value={password}/> 
            </View>

            <TouchableOpacity>
                <Text style={{fontSize:15, alignSelf:'center', margin:30}} >Esqueci a senha</Text>
            </TouchableOpacity>

            <View style={styles.card2}>
                <TouchableOpacity onPress={()=>{
                    logar();
                }}>
                    <Text style={{fontSize:25, color:"#ffffff"}}>ENTRAR</Text>
                </TouchableOpacity>    
            </View>

            <TouchableOpacity onPress={irCriarConta}>
                <Text style={{fontSize:25, alignSelf:'center', margin:30}} >Criar conta</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    titulo:{
        fontSize: 25,
        alignSelf: 'center',
        fontWeight:'bold',
        marginTop: 10,
        marginBottom: 70
    },
    input:{
        fontSize: 25,
        marginLeft: 50
    },
    card:{
        flexDirection:'row',
        marginTop:30,
        marginHorizontal:20,
        padding: 20,
        justifyContent:'flex-start',
        alignItems:'stretch',
        backgroundColor: "#ffff",
        borderRadius: 20,
        borderColor: "#000", 
        width: '90%',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,  
      },
      card2:{
        flexDirection:'row',
        marginTop:30,
        marginHorizontal:20,
        padding: 20,
        justifyContent:'center',
        alignItems:'stretch',
        backgroundColor: "#f56643",
        borderRadius: 50,
        borderColor: "#000", 
        width: '90%',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,  
      },
})
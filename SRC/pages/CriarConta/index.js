import React, {Component, useState} from 'react';
import { View,Text, SafeAreaView, StyleSheet, TouchableOpacity, TextInput, CheckBox } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import firebase from '../../../SRC/firebaseConnection';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function CriarConta() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation ();

    function irLogin(){
        navigation.navigate('Login');
    }

    async function cadastrar(){
        await firebase.auth().createUserWithEmailAndPassword(email,password)
        .then((value)=>{
            alert('show');
            firebase.database().ref('user').child(value.user.uid).set({
                nome: nome, telefone:telefone
            })
        })

        irLogin();
    };

    return(
        <SafeAreaView>

            <Text style={styles.titulo}>Cria Conta</Text>

            <View style={styles.card}>
                <View style={{flexDirection:'row',marginLeft: 10}}>
                    <FontAwesome5
                        style={{marginTop:2}}
                        name="user"
                        size={20}
                        color="#3d3d3d"/>
                    <Text style={styles.texto}>Nome</Text> 
                    </View>   
                <TextInput 
                    style={styles.input}
                    onChangeText={(texto) => setNome(texto)}
                    value={nome}/> 
            </View>

            <View style={styles.card}>
                <View style={{flexDirection:'row',marginLeft: 10}}>
                    <FontAwesome5
                        style={{marginTop:2}}
                        name="envelope"
                        size={20}
                        color="#3d3d3d"/>
                    <Text style={styles.texto}>Email</Text> 
                    </View>   
                <TextInput 
                style={styles.input}
                onChangeText={(texto) => setEmail(texto)}
                value={email}/> 
            </View>

            <View style={styles.card}>
                <View style={{flexDirection:'row',marginLeft: 10}}>
                    <FontAwesome5
                        style={{marginTop:2}}
                        name="phone"
                        size={20}
                        color="#3d3d3d"/>
                    <Text style={styles.texto}>Telefone Celular</Text> 
                    </View>   
                <TextInput 
                style={styles.input}
                onChangeText={(texto) => setTelefone(texto)}
                value={telefone}/> 
            </View>

            <View style={styles.card}>
                <View style={{flexDirection:'row',marginLeft: 10}}>
                    <FontAwesome5
                        style={{marginTop:2}}
                        name="key"
                        size={20}
                        color="#3d3d3d"/>
                    <Text style={styles.texto}>Senha</Text> 
                    </View>   
                <TextInput 
                style={styles.input}
                onChangeText={(texto) => setPassword(texto)}
                value={password}/>
            </View>

            <View style={styles.card}>
                <View style={{flexDirection:'row',marginLeft: 10}}>
                    <FontAwesome5
                        style={{marginTop:2}}
                        name="shield-alt"
                        size={20}
                        color="#3d3d3d"/>
                    <Text style={styles.texto}>Confirme a Senha</Text> 
                    </View>   
                <TextInput style={styles.input}/> 
            </View>
            
            <View style={styles.card2}>
                <TouchableOpacity onPress={cadastrar}>
                    <Text style={{fontSize:20, color:"#ffffff"}}>CRIAR CONTA</Text>
                </TouchableOpacity>    
            </View>

            <TouchableOpacity onPress={irLogin}>
                <View style={{flexDirection:'row', alignSelf:'center'}}>
                    <Text style={{fontSize:20, alignSelf:'center', margin:10}} >
                    já possue uma conta ? login</Text>
                </View>
            </TouchableOpacity>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    titulo:{
        fontSize: 30,
        alignSelf: 'center',
        fontWeight:'bold',
        marginTop: 10,
        marginBottom: 10
    },
    input:{
        fontSize: 20,
        backgroundColor: "#eeee",
        borderRadius: 15,
        padding: 10,
        width: '100%'
    },
    texto:{
        fontSize: 20,
        marginLeft: 10,
        marginBottom: 15,
        fontWeight:'bold'
    },
    card:{
        flexDirection:'column',
        marginTop:15,
        marginHorizontal:20,
        padding: 6,
        justifyContent:'space-evenly',
        alignItems:'flex-start',
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
        padding: 15,
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
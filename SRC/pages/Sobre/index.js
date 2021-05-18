import React, {Component} from 'react';
import { View,Text, SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Sobre() {

    const navigation = useNavigation ();

    function irLogin(){
        navigation.navigate('Login');
      }

    return(
        <SafeAreaView>
            <View style={{padding:20, alignItems:'center'}}>
                <FontAwesome
                name="user-circle"
                size={90}
                color="#3d3d3d"/>
                <Text style={{fontSize: 30, fontWeight: 'bold', textAlign:'center'}}>Perfil</Text>
            </View>
            <View style={styles.card}>
                <View style={{flexDirection:'row'}}>
                    <FontAwesome
                    style={{marginTop:7}}
                    name="user"
                    size={20}
                    color="#3d3d3d"/>
                    <Text style={styles.Titulo}>Nome</Text>
                </View>
                <Text style={styles.Texto}>Gilson Cosme de Vasconcelos</Text>
            </View>
            <View style={styles.card}>
                <View style={{flexDirection:'row'}}>
                    <FontAwesome
                    style={{marginTop:7}}
                    name="at"
                    size={20}
                    color="#3d3d3d"/>
                    <Text style={styles.Titulo}>Email</Text>
                </View>
                <Text style={styles.Texto}>gilson99cosme@gmail.com</Text>
            </View>

            <TouchableOpacity onPress={irLogin}>
                <View style={styles.card}>
                    <Text style={styles.Titulo}>Sair</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity 
                style={{padding:20}}
                onPress={ ( ) => navigation.goBack()}>
                <Text style={{fontSize: 30, fontWeight: 'bold', textAlign:'center'}}>Voltar</Text>
            </TouchableOpacity>

            

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    card:{
        marginTop:10,
        marginHorizontal:20,
        padding: 20,
        justifyContent:'space-between',
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
    Titulo:{
        fontWeight:'bold',
        fontSize:20,
        padding:5
    },
    Texto:{
        padding:5,
        fontSize:18
    }
});
import React, {Component,useState} from 'react';
import { SafeAreaView,StyleSheet,ScrollView,View,Text,StatusBar,Modal,TextInput,TouchableOpacity,Touchable,Button,} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import firebase from '../../../SRC/firebaseConnection';

export default function Dash() {

    const [nome, setNome] = useState(firebase.database.name);

    const navigation = useNavigation();

    function irSobre(){
      navigation.navigate('Sobre');
    }

    function irCoins(){
      navigation.navigate('Coins');
    }



    return(
      <SafeAreaView style={styles.safearea}>

        <View style={{flexDirection:'row',justifyContent:'space-between', marginHorizontal:15}}>
          <FontAwesome
            style={{alignSelf:'center',marginBottom: 10}}
            name="bars"
            size={30}
            color="#ffff"/>
          <FontAwesome
            style={{alignSelf:'center',marginBottom: 10}}
            name="check-circle"
            size={60}
            color="#ffff"/>
          <FontAwesome5
            style={{alignSelf:'center',marginBottom: 10}}
            name="cog"
            size={30}
            color="#ffff"/>  
        </View>

        <View style={{backgroundColor:"#fafafa",borderTopLeftRadius:20,borderTopRightRadius:20,flex:1}}>
          <View style={styles.containerRow}>
            <View>
              <Text style={styles.texto}>Olá,</Text>
              <Text style={styles.texto}>{nome}</Text>
            </View >
            <TouchableOpacity onPress={irSobre}>
              <FontAwesome
              name="ellipsis-v"
              size={40}
              color="#3d3d3d"/>
            </TouchableOpacity>
          </View>

          <View style={styles.container}>
            <Text style={{fontSize:20}}>Valor Total</Text>
            <Text style={styles.texto,{fontSize:30,fontWeight:'bold'}}>R$: 200,00</Text>
          </View>

          <View style={styles.container}>
            <Text style={{fontSize:20}}>Minha carteira</Text>
          </View>

          <TouchableOpacity onPress={irCoins}>
            <View style={styles.card}>
              <View style={{flexDirection:'row'}}>
                <FontAwesome
                      style={{marginTop:2}}
                      name="bitcoin"
                      size={20}
                      color="#3d3d3d"/>
                <Text style={{fontSize:20}}>   Bitcoin</Text>
              </View>
              <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:20,marginTop:10,fontWeight:'bold'}}>R$: 200,00</Text>
                <Text style={{fontSize:16,marginTop:10,alignSelf:'center'}}>   -1,03% </Text>
              </View>
              <Text style={{fontSize:15,marginTop:10}}>0,000222 </Text>
            </View>
          </TouchableOpacity>
          
        </View>

      </SafeAreaView> 
      
      
      
    ) 
};

const styles = StyleSheet.create({
  safearea:{
    flex:1,
    backgroundColor:"#f56643"
  },
  containerRow:{
    //backgroundColor:"#ffff",
    marginTop:30,
    paddingHorizontal: 20,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'stretch',
  },
  container:{
    marginTop:30,
    paddingHorizontal: 20,
    justifyContent:'space-between',
    alignItems:'stretch',
  },
  texto:{
    fontSize:20,
    fontWeight:'bold', 
  },
  card:{
    marginTop:30,
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
  btn:{
    marginTop: 20
  },
  textobtn:{
    fontSize: 25
  },
});

import React, {Component} from 'react';
import { View,Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Coins() {

    const navigation = useNavigation ();

    return(
        <SafeAreaView style={{flex:1}}>  
            
            <View style={{flexDirection:'row',justifyContent:'space-between', marginHorizontal:15}}>
                <FontAwesome5
                    style={{alignSelf:'center'}}
                    name="bars"
                    size={30}
                    color="#000"/>
                <Text style={{fontSize: 30, fontWeight: 'bold', textAlign:'center',margin:10}}>
                    Moedas</Text>
                <FontAwesome5
                    style={{alignSelf:'center'}}
                    name="filter"
                    size={30}
                    color="#000"/>  
            </View>

            <TouchableOpacity>
                <View style={styles.card}>
                <View style={{flexDirection:'row'}}>
                    <FontAwesome5
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

            <TouchableOpacity>
                <View style={styles.card}>
                <View style={{flexDirection:'row'}}>
                    <FontAwesome5
                        style={{marginTop:2}}
                        name="ethereum"
                        size={20}
                        color="#3d3d3d"/>
                    <Text style={{fontSize:20}}>   Ethereum</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:20,marginTop:10,fontWeight:'bold'}}>R$: 0,00</Text>
                    <Text style={{fontSize:16,marginTop:10,alignSelf:'center'}}>   10,03% </Text>
                </View>
                <Text style={{fontSize:15,marginTop:10}}>0 </Text>
                </View>
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

})
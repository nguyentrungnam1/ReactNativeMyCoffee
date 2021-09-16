
import React, {Component, useState} from 'react';
import {StatusBar, View, Text, Button, Alert ,StyleSheet, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




export default class HomeScreen extends Component{
  render(){
    const {navigation} = this.props; 
    
    return(
      <View>
        <Button
          title = " go to detail screen"
          onPress ={()=>{
            navigation.navigate('Detail');
            // navigation.push('Detail');
          }}
        />
      </View>
    );
  }
}



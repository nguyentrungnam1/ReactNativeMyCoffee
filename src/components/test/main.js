import React, {Component} from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './mhinhA';
import DetailScreen from './mhinhB';



const Stack = createNativeStackNavigator();


export default class Main extends Component{
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name ="Home" component ={HomeScreen}/>
          <Stack.Screen name ="Detail" component ={DetailScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
        
    );
  }
}
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Order from './Order';
import Store from './Store';
import {Button, Text, View} from 'react-native';
import Notification from './Notification';
import Account from './Account';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



function HomeScreen( {navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <View>
        <Button title ="go to store"
          onPress ={
            ()=>{navigation.push("Store")}
          }
        />
        <Button title ="go to Order"
          onPress ={
            ()=>{navigation.push("Order")}
          }
        />
        <Button title ="go to Notification"
          onPress ={
            ()=>{navigation.push("Notification")}
          }
        />
        <Button title ="go to Account"
          onPress ={
            ()=>{navigation.push("Account")}
          }
        />
      </View>
      
    </View>
  );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Home = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions ={{
      tabBarActiveTintColor:'yellow',
      tabBarInactiveTintColor:'black',
      tabBarLabelStyle:{
        fontSize: 18,
      }

      }}
      >
        <Tab.Screen name= "Home " component = {HomeScreen} 
          options = {{tabBarIcon: () => (
            <FontAwesomeIcons name="home"  size={26} />
          ),}}
        />
        <Tab.Screen name= "Store " component = {Store}/>
        <Tab.Screen name= "Account" component = {Account}/>
        <Tab.Screen name= "Notification" component = {Notification}/>
        <Tab.Screen name = "Order" component = {Order}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default Home;

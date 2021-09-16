import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Order from './Order';
import Store from './Store';
import {Button, Text, View} from 'react-native';
import Notification from './Notification';
import Account from './Account';

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
const Home = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Store" component={Store} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Order" component={Order} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Home;

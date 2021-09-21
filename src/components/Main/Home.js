import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Order from './Order';
import Store from './Store';
import {
  Button,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Notification from './Notification';
import Account from './Account';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeComponent from '../ComponentSreen/HomeComponent';
import HeaderComponent from '../ComponentSreen/HeaderComponent';
import SectionComponent from '../ComponentSreen/SectionComponent';

function HomeScreen() {
  return (
    <View>
      <View>
        <HeaderComponent />
      </View>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <SectionComponent />
          <HomeComponent />
          <View style={{height: 10}}></View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Home = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'yellow',
          tabBarInactiveTintColor: 'black',
          tabBarLabelStyle: {
            fontSize: 18,
          },
          tabBarStyle: {
            backgroundColor: 'white',
            height: 70,
          },
        }}>
        <Tab.Screen
          name="Store"
          component={Store}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons name="storefront-outline" size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Order"
          component={Order}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons name="coffee-outline" size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons name="home-outline" size={26} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            tabBarIcon: () => (
              <IoniconsIcons name="ios-notifications-outline" size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons name="account-circle-outline" size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginLeft: 15,
    marginRight: 15,
  },
  // section

  //
});
export default Home;

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

function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <TouchableOpacity style={styles.buttonLogin}>
            <Image
              source={require('../../assets/icon/contact.png')}
              style={styles.imgContact}
            />
            <Text style={styles.textHeder}> Đăng nhập </Text>
          </TouchableOpacity>
        </View>
        <Image
          source={require('../../assets/icon/coffee-logo.png')}
          style={styles.imgContact}
        />
      </View>
      <ScrollView>
        <View style={styles.section}>
          <View style={styles.elementSection}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/icon/ship.png')}
                style={styles.imgElementSection}
              />
              <Text>Giao hàng</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.elementSection}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/icon/qr.png')}
                style={styles.imgElementSection}
              />
              <Text>Tích điểm</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.elementSection}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/icon/lich.png')}
                style={styles.imgElementSection}
              />
              <Text>Giao dịch</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style ={styles.special}>
        <Text>Ưu đãi</Text>
          <ScrollView>
            <View>
              <TouchableOpacity>
                <Image/>
                <Text>
                05 Combo ưu đãi hấp dẫn
                </Text>
                <Image/> 
                {/* icon */}
                <Text>
                 
                </Text>
                <Text>Xem thêm</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
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
          headerShown: false,
        }}>
        <Tab.Screen name="Store" component={Store} options={{}} />
        <Tab.Screen name="Order" component={Order} />

        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: () => <FontAwesomeIcons name="home" size={26} />,
          }}
        />
        <Tab.Screen name="Notification" component={Notification} />
        <Tab.Screen name="Account" component={Account} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  header: {
    height: 80,
    backgroundColor: '#272822',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
  },
  imgContact: {
    width: 50,
    height: 50,
  },
  textHeder: {
    justifyContent: 'center',
    marginTop: 5,
    color: '#cd9e3c',
    fontWeight: '400',
    fontSize: 25,
  },
  buttonLogin: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  // section
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 5,
    backgroundColor: 'white',
    position: 'relative',
    height: 120,
    paddingLeft: 15,
    paddingRight: 15,

    //shadow

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  imgElementSection: {
    width: 60,
    height: 60,
    borderRadius: 15,
    backgroundColor: 'black',
    borderWidth: 3,
    borderColor: '#cd9e3c',
    marginBottom: 15,
  },
});
export default Home;

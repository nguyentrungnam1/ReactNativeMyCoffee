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
        <View style={styles.special}>
          <Text style = {styles.textHederSpecial}>Ưu đãi</Text>
          <ScrollView horizontal={true}>
            <View style={styles.elementSpecial}>
              <TouchableOpacity>
                <Image
                  style={styles.imgElementSpecial}
                  source={require('../../assets/icon/uudai1.png')}
                />
                <Text style={styles.textElementSpeacial}>
                  05 Combo ưu đãi hấp dẫn
                </Text>
                <View style={styles.dateSpeacial}>
                  <Image
                    style={styles.iconLich}
                    source={require('../../assets/icon/Alarms_&_Clock_icon.png')}
                  />
                  {/* icon */}
                  <Text>05/08/2021 - 31/12/2021</Text>
                  <Text style = {styles.seeMore}>Xem thêm</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.elementSpecial}>
              <TouchableOpacity>
                <Image
                  style={styles.imgElementSpecial}
                  source={require('../../assets/icon/uudai1.png')}
                />
                <Text style={styles.textElementSpeacial}>
                  05 Combo ưu đãi hấp dẫn
                </Text>
                <View style={styles.dateSpeacial}>
                  <Image
                    style={styles.iconLich}
                    source={require('../../assets/icon/Alarms_&_Clock_icon.png')}
                  />
                  {/* icon */}
                  <Text>05/08/2021 - 31/12/2021</Text>
                  <Text style = {styles.seeMore}>Xem thêm</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.elementSpecial}>
              <TouchableOpacity>
                <Image
                  style={styles.imgElementSpecial}
                  source={require('../../assets/icon/uudai1.png')}
                />
                <Text style={styles.textElementSpeacial}>
                  05 Combo ưu đãi hấp dẫn
                </Text>
                <View style={styles.dateSpeacial}>
                  <Image
                    style={styles.iconLich}
                    source={require('../../assets/icon/Alarms_&_Clock_icon.png')}
                  />
                  {/* icon */}
                  <Text>05/08/2021 - 31/12/2021</Text>
                  <Text style = {styles.seeMore}>Xem thêm</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.elementSpecial}>
              <TouchableOpacity>
                <Image
                  style={styles.imgElementSpecial}
                  source={require('../../assets/icon/uudai1.png')}
                />
                <Text style={styles.textElementSpeacial}>
                  05 Combo ưu đãi hấp dẫn
                </Text>
                <View style={styles.dateSpeacial}>
                  <Image
                    style={styles.iconLich}
                    source={require('../../assets/icon/Alarms_&_Clock_icon.png')}
                  />
                  {/* icon */}
                  <Text>05/08/2021 - 31/12/2021</Text>
                  <Text style = {styles.seeMore}>Xem thêm</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.elementSpecial}>
              <TouchableOpacity>
                <Image
                  style={styles.imgElementSpecial}
                  source={require('../../assets/icon/uudai1.png')}
                />
                <Text style={styles.textElementSpeacial}>
                  05 Combo ưu đãi hấp dẫn
                </Text>
                <View style={styles.dateSpeacial}>
                  <Image
                    style={styles.iconLich}
                    source={require('../../assets/icon/Alarms_&_Clock_icon.png')}
                  />
                  {/* icon */}
                  <Text>05/08/2021 - 31/12/2021</Text>
                  <Text style = {styles.seeMore}>Xem thêm</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        
        <View style={styles.special}>
          <Text style = {styles.textHederSpecial}>Tin Tức</Text>
          <ScrollView horizontal={true}>
            <View style={styles.elementSpecial}>
              <TouchableOpacity>
                <Image
                  style={styles.imgElementSpecial}
                  source={require('../../assets/icon/uudai1.png')}
                />
                <Text style={styles.textElementSpeacial}>
                  05 Combo ưu đãi hấp dẫn
                </Text>
                <View style={styles.dateSpeacial}>
                  <Image
                    style={styles.iconLich}
                    source={require('../../assets/icon/Alarms_&_Clock_icon.png')}
                  />
                  {/* icon */}
                  <Text>05/08/2021 - 31/12/2021</Text>
                  <Text style = {styles.seeMore}>Xem thêm</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.elementSpecial}>
              <TouchableOpacity>
                <Image
                  style={styles.imgElementSpecial}
                  source={require('../../assets/icon/uudai1.png')}
                />
                <Text style={styles.textElementSpeacial}>
                  05 Combo ưu đãi hấp dẫn
                </Text>
                <View style={styles.dateSpeacial}>
                  <Image
                    style={styles.iconLich}
                    source={require('../../assets/icon/Alarms_&_Clock_icon.png')}
                  />
                  {/* icon */}
                  <Text>05/08/2021 - 31/12/2021</Text>
                  <Text style = {styles.seeMore}>Xem thêm</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.elementSpecial}>
              <TouchableOpacity>
                <Image
                  style={styles.imgElementSpecial}
                  source={require('../../assets/icon/uudai1.png')}
                />
                <Text style={styles.textElementSpeacial}>
                  05 Combo ưu đãi hấp dẫn
                </Text>
                <View style={styles.dateSpeacial}>
                  <Image
                    style={styles.iconLich}
                    source={require('../../assets/icon/Alarms_&_Clock_icon.png')}
                  />
                  {/* icon */}
                  <Text>05/08/2021 - 31/12/2021</Text>
                  <Text style = {styles.seeMore}>Xem thêm</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.elementSpecial}>
              <TouchableOpacity>
                <Image
                  style={styles.imgElementSpecial}
                  source={require('../../assets/icon/uudai1.png')}
                />
                <Text style={styles.textElementSpeacial}>
                  05 Combo ưu đãi hấp dẫn
                </Text>
                <View style={styles.dateSpeacial}>
                  <Image
                    style={styles.iconLich}
                    source={require('../../assets/icon/Alarms_&_Clock_icon.png')}
                  />
                  {/* icon */}
                  <Text>05/08/2021 - 31/12/2021</Text>
                  <Text style = {styles.seeMore}>Xem thêm</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.elementSpecial}>
              <TouchableOpacity>
                <Image
                  style={styles.imgElementSpecial}
                  source={require('../../assets/icon/uudai1.png')}
                />
                <Text style={styles.textElementSpeacial}>
                  05 Combo ưu đãi hấp dẫn
                </Text>
                <View style={styles.dateSpeacial}>
                  <Image
                    style={styles.iconLich}
                    source={require('../../assets/icon/Alarms_&_Clock_icon.png')}
                  />
                  {/* icon */}
                  <Text>05/08/2021 - 31/12/2021</Text>
                  <Text style = {styles.seeMore}>Xem thêm</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      
        <View style={styles.special}>
          <Text style = {styles.textHederSpecial}>Kiến thức pha chế</Text>
          <ScrollView horizontal={true}>
            <View style={styles.elementSpecial}>
              <TouchableOpacity>
                <Image
                  style={styles.imgElementSpecial}
                  source={require('../../assets/icon/uudai1.png')}
                />
                <Text style={styles.textElementSpeacial}>
                  05 Combo ưu đãi hấp dẫn
                </Text>
                <View style={styles.dateSpeacial}>
                  <Image
                    style={styles.iconLich}
                    source={require('../../assets/icon/Alarms_&_Clock_icon.png')}
                  />
                  {/* icon */}
                  <Text>05/08/2021 - 31/12/2021</Text>
                  <Text style = {styles.seeMore}>Xem thêm</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.elementSpecial}>
              <TouchableOpacity>
                <Image
                  style={styles.imgElementSpecial}
                  source={require('../../assets/icon/uudai1.png')}
                />
                <Text style={styles.textElementSpeacial}>
                  05 Combo ưu đãi hấp dẫn
                </Text>
                <View style={styles.dateSpeacial}>
                  <Image
                    style={styles.iconLich}
                    source={require('../../assets/icon/Alarms_&_Clock_icon.png')}
                  />
                  {/* icon */}
                  <Text>05/08/2021 - 31/12/2021</Text>
                  <Text style = {styles.seeMore}>Xem thêm</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.elementSpecial}>
              <TouchableOpacity>
                <Image
                  style={styles.imgElementSpecial}
                  source={require('../../assets/icon/uudai1.png')}
                />
                <Text style={styles.textElementSpeacial}>
                  05 Combo ưu đãi hấp dẫn
                </Text>
                <View style={styles.dateSpeacial}>
                  <Image
                    style={styles.iconLich}
                    source={require('../../assets/icon/Alarms_&_Clock_icon.png')}
                  />
                  {/* icon */}
                  <Text>05/08/2021 - 31/12/2021</Text>
                  <Text style = {styles.seeMore}>Xem thêm</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.elementSpecial}>
              <TouchableOpacity>
                <Image
                  style={styles.imgElementSpecial}
                  source={require('../../assets/icon/uudai1.png')}
                />
                <Text style={styles.textElementSpeacial}>
                  05 Combo ưu đãi hấp dẫn
                </Text>
                <View style={styles.dateSpeacial}>
                  <Image
                    style={styles.iconLich}
                    source={require('../../assets/icon/Alarms_&_Clock_icon.png')}
                  />
                  {/* icon */}
                  <Text>05/08/2021 - 31/12/2021</Text>
                  <Text style = {styles.seeMore}>Xem thêm</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.elementSpecial}>
              <TouchableOpacity>
                <Image
                  style={styles.imgElementSpecial}
                  source={require('../../assets/icon/uudai1.png')}
                />
                <Text style={styles.textElementSpeacial}>
                  05 Combo ưu đãi hấp dẫn
                </Text>
                <View style={styles.dateSpeacial}>
                  <Image
                    style={styles.iconLich}
                    source={require('../../assets/icon/Alarms_&_Clock_icon.png')}
                  />
                  {/* icon */}
                  <Text>05/08/2021 - 31/12/2021</Text>
                  <Text style = {styles.seeMore}>Xem thêm</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      
      <View style={{height:100}}>

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
          
        }}>
        <Tab.Screen name="Store" component={Store} />
        <Tab.Screen name="Order" component={Order} />

        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: () => <FontAwesomeIcons name="home" size={26} />,
            headerShown: false,
          }}
        />
        <Tab.Screen name="Notification" component={Notification} />
        <Tab.Screen name="Account" component={Account} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};


const TEXT = {
  fontSize:25,
  fontWeight:'500',
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
  //

  textHederSpecial:{
    ...TEXT,
    marginTop:10,
  },
  special: {
     backgroundColor:'#f8f8f8',
    marginLeft: 15,
    marginTop:15,
   
  },
  elementSpecial: {
    width:300,
    height: 220,
    marginTop: 30,
    // borderRadius:20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    
    elevation: 4,
    marginRight:15,
    borderRadius:5,
  },
  imgElementSpecial: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width:300,
  },
  iconLich: {
    width: 20,
    height: 20,
  },
  textElementSpeacial:{
    marginLeft: 15,
    marginTop:15,
    marginBottom:15,
    fontSize:18,

  },
  dateSpeacial: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight:15,
  },
  seeMore:{
    borderRadius:50,
    color:'#cd9e3c',
    borderColor:'#cd9e3c',
    borderWidth:1,
    width:90,
    textAlign: 'center',
  }

});
export default Home;

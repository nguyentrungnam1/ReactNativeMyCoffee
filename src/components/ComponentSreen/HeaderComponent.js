import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';

const item_img1 = require('../../assets/icon/coffee-logo.png');

const HeaderComponent = () => {
  return (
    <View style={styles.header}>
      <View>
        <TouchableOpacity 
          style={styles.buttonLogin}
          // onPress = {({navigation})=>{
          //   navigation.push('Login');
          // }}
        >
          <View style={styles.imgContact}>
            <AntDesign
              name="user"
              size={30}
              color="#cd9e3c"
            />
          </View>

          <Text style={styles.textHeder}> Đăng nhập </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imgContact}>
        <Fontisto
          name="coffeescript"
          size={30}
          color="#cd9e3c"
          
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
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
    borderColor: '#cd9e3c',
    borderRadius: 50,
    marginLeft: 15,
    marginRight: 15,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems:'center',
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
});
export default HeaderComponent;

import React from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';


const Account = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <TouchableWithoutFeedback>
            <View style={styles.hearder}>
              <Image
                source={require('../../assets/icon/contact.png')}
                style={styles.imgHearder}
              />
              <Text style={styles.textLogin}>Đăng nhập</Text>
              <View style={styles.rank}>
                <Text style={styles.textRank}>NĂNG LƯỢNG</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>

          <View style={styles.section}>
            <TouchableOpacity>
              <View style={styles.element}>
                <Image
                  source={require('../../assets/icon/users-edit.png')}
                  style={styles.imgElement}
                />
                <Text>Thông tin cá nhân</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.element}>
                <Image
                  source={require('../../assets/icon/quanly.png')}
                  style={styles.imgElement}
                />
                <Text>Quản lý thẻ thành viên</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.element}>
                <Image
                  source={require('../../assets/icon/note.png')}
                  style={styles.imgElement}
                />
                <Text>Đơn hàng của bạn</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style = {styles.itemContainer}>
          <FontAwesome name = "chevron-right" size ={60}/>
        </View>


      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginRight: 15,
  },
  hearder: {
    backgroundColor: 'red',
    alignItems: 'center',
    marginTop: 15,
  },
  imgHearder: {
    width: 85,
    height: 90,
    backgroundColor: 'black',
    borderRadius: 50,
    marginBottom: 15,
  },
  textLogin: {
    fontSize: 20,
    color: 'black',
    marginBottom: 15,
  },
  rank: {
    borderRadius: 30,
    backgroundColor: 'black',
    width: 130,
    height: 40,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textRank: {
    color: 'yellow',
  },

  //
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    height: 100,
  },
  element: {
    width: 110,
    height: 90,
    paddingTop: 10,
    paddingLeft: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 10,
  },
  imgElement: {
    width: 25,
    height: 25,
  },
});
export default Account;

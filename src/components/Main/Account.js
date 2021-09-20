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
import AntDesign from 'react-native-vector-icons/AntDesign';

const Account = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <TouchableWithoutFeedback>
            <View style={styles.hearder}>
              {/* <Image
                source={require('../../assets/icon/contact.png')}
                style={styles.imgHearder}
              /> */}
              
              <View  style={styles.imgHearder}>
                <AntDesign name="user" size={50} color="#cd9e3c" />
              </View>

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

          {/* item */}

          <View style={styles.titleItem}>
            <Text>Thông tin tài khoản</Text>
          </View>
          <TouchableWithoutFeedback>
            <View style={styles.itemContainer}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <AntDesign name="book" size={20} />
                <Text style={{paddingLeft: 5}}>Địa chỉ giao hàng</Text>
              </View>
              <FontAwesome name="chevron-right" size={20} />
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback>
            <View style={styles.itemContainer}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <AntDesign name="setting" size={20} />
                <Text style={{paddingLeft: 5}}>Thiết lập tài khoản</Text>
              </View>
              <FontAwesome name="chevron-right" size={20} />
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback>
            <View style={styles.itemContainer}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <AntDesign name="hearto" size={20} />
                <Text style={{paddingLeft: 5}}>Sản phẩm yêu thích</Text>
              </View>
              <FontAwesome name="chevron-right" size={20} />
            </View>
          </TouchableWithoutFeedback>

          <View style={styles.titleItem}>
            <Text>Thông tin ứng dụng</Text>
          </View>

          <TouchableWithoutFeedback>
            <View style={styles.itemContainer}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <AntDesign name="earth" size={20} />
                <Text style={{paddingLeft: 5}}>Ngôn ngữ</Text>
              </View>
              <FontAwesome name="chevron-right" size={20} />
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback>
            <View style={styles.itemContainer}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <AntDesign name="filetext1" size={20} />
                <Text style={{paddingLeft: 5}}>Điều khoản và điều kiện</Text>
              </View>
              <FontAwesome name="chevron-right" size={20} />
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback>
            <View style={styles.itemContainer}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <AntDesign name="questioncircleo" size={20} />
                <Text style={{paddingLeft: 5}}>Câu hỏi thường gặp</Text>
              </View>
              <FontAwesome name="chevron-right" size={20} />
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback>
            <View style={styles.itemContainer}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <AntDesign name="exclamationcircleo" size={20} />
                <Text style={{paddingLeft: 5}}>Liên hệ</Text>
              </View>
              <FontAwesome name="chevron-right" size={20} />
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback>
            <View style={styles.logout}>
              <Text style={styles.textLogout}>Đăng xuất</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const BORDER = {
  borderBottomWidth: 1,
  borderBottomColor: 'gray',
};
const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginRight: 15,
  },
  hearder: {
    // backgroundColor: 'red',
    alignItems: 'center',
    marginTop: 15,
  },
  imgHearder: {
    width:80,
    height:80,
    backgroundColor: 'black',
    borderRadius: 50,
    marginBottom: 15,
    justifyContent:'center',
    alignItems:'center',
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
    color: '#cd9e3c',
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

  //item
  titleItem: {
    ...BORDER,
    marginTop: 15,
  },
  itemContainer: {
    ...BORDER,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    alignItems: 'center',
  },
  logout: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  textLogout: {
    fontSize: 25,
    textDecorationLine: 'underline',
    color: 'red',
  },
});
export default Account;

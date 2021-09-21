import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

const item_img1 = require('../../assets/icon/uudai1.png');
const item_img2 = require('../../assets/icon/uudai2.png');
const HomeComponentMain = ({img, name, date}) => {
  return (
    <View style={styles.elementSpecial}>
      <TouchableOpacity>
        <Image style={styles.imgElementSpecial} source={img} />
        <Text style={styles.textElementSpeacial}>{name}</Text>
        <View style={styles.dateSpeacial}>
          <Image
            style={styles.iconLich}
            source={require('../../assets/icon/Alarms_&_Clock_icon.png')}
          />
          {/* icon */}
          <Text>{date}</Text>
          <Text style={styles.seeMore}>Xem thêm</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const HomeComponent = ({title}) => {
  return (
    <View style={styles.special}>
      <Text style={styles.textHederSpecial}>Ưu đãi</Text>
      <ScrollView horizontal={true}>
        <HomeComponentMain
          img={item_img1}
          name="05 Combo Ưu Đãi"
          date="20/12/2021"
        />
        <HomeComponentMain
          img={item_img2}
          name="05 Combo Ưu Đãi"
          date="20/12/2021"
        />
        <HomeComponentMain
          img={item_img1}
          name="05 Combo Ưu Đãi"
          date="20/12/2021"
        />
        <HomeComponentMain
          img={item_img1}
          name="05 Combo Ưu Đãi"
          date="20/12/2021"
        />
        <HomeComponentMain
          img={item_img1}
          name="05 Combo Ưu Đãi"
          date="20/12/2021"
        />
      </ScrollView>

      <Text style={styles.textHederSpecial}>Tin Tức</Text>
      <ScrollView horizontal={true}>
        <HomeComponentMain
          img={item_img1}
          name="05 Combo Ưu Đãi"
          date="20/12/2021"
        />
        <HomeComponentMain
          img={item_img2}
          name="05 Combo Ưu Đãi"
          date="20/12/2021"
        />
        <HomeComponentMain
          img={item_img1}
          name="05 Combo Ưu Đãi"
          date="20/12/2021"
        />
        <HomeComponentMain
          img={item_img1}
          name="05 Combo Ưu Đãi"
          date="20/12/2021"
        />
        <HomeComponentMain
          img={item_img1}
          name="05 Combo Ưu Đãi"
          date="20/12/2021"
        />
      </ScrollView>

      <Text style={styles.textHederSpecial}>Đối Tac Nhượng Quyền</Text>
      <ScrollView horizontal={true}>
        <HomeComponentMain
          img={item_img1}
          name="05 Combo Ưu Đãi"
          date="20/12/2021"
        />
        <HomeComponentMain
          img={item_img2}
          name="05 Combo Ưu Đãi"
          date="20/12/2021"
        />
        <HomeComponentMain
          img={item_img1}
          name="05 Combo Ưu Đãi"
          date="20/12/2021"
        />
        <HomeComponentMain
          img={item_img1}
          name="05 Combo Ưu Đãi"
          date="20/12/2021"
        />
        <HomeComponentMain
          img={item_img1}
          name="05 Combo Ưu Đãi"
          date="20/12/2021"
        />
      </ScrollView>
      <Text style={styles.textHederSpecial}>Kién Thức Pha chế</Text>
      <ScrollView horizontal={true}>
        <HomeComponentMain
          img={item_img1}
          name="05 Combo Ưu Đãi"
          date="20/12/2021"
        />
        <HomeComponentMain
          img={item_img2}
          name="05 Combo Ưu Đãi"
          date="20/12/2021"
        />
        <HomeComponentMain
          img={item_img1}
          name="05 Combo Ưu Đãi"
          date="20/12/2021"
        />
        <HomeComponentMain
          img={item_img1}
          name="05 Combo Ưu Đãi"
          date="20/12/2021"
        />
        <HomeComponentMain
          img={item_img1}
          name="05 Combo Ưu Đãi"
          date="20/12/2021"
        />
      </ScrollView>
    </View>

    
  );
};

const TEXT = {
    fontSize: 25,
    fontWeight: '500',
  };
const styles = StyleSheet.create({
    textHederSpecial: {
        ...TEXT,
        marginTop: 10,
      },
  special: {
    backgroundColor: '#f8f8f8',
  },
  elementSpecial: {
    width: 300,
    height: 220,
    marginTop: 30,
    // borderRadius:20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    marginRight: 15,
    borderRadius: 5,
  },
  imgElementSpecial: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: 300,
    height:140,
  },
  iconLich: {
    width: 20,
    height: 20,
  },
  textElementSpeacial: {
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 15,
    fontSize: 18,
  },
  dateSpeacial: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight: 15,
  },
  seeMore: {
    borderRadius: 50,
    color: '#cd9e3c',
    borderColor: '#cd9e3c',
    borderWidth: 1,
    width: 90,
    textAlign: 'center',
  },
});

export default HomeComponent;

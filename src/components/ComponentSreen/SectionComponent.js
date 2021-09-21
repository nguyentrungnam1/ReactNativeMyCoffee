import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SectionElement = ({icon, text}) => {
  return (
    <View style={styles.elementSection}>
      <TouchableOpacity>
        <View style = {styles.imgSection}>
          <MaterialIcons name={icon} size={30} style = {{color:'#cd9e3c'}}/>
        </View>
          <Text style = {styles.textSection}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const SectionComponent = () => {
  return (
    <View style={styles.section}>
      <SectionElement icon="delivery-dining" text="Giao hàng" />
      <SectionElement icon="qr-code-scanner" text="Tích Điểm" />
      <SectionElement icon="event-note" text="Giao Dịch" />
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  elementSection: {
    marginTop: 15,
  
  },
  imgSection:{
    width:60,
    height: 60,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'black',
    borderWidth:3,
    borderRadius:20,
    borderColor:"#cd9e3c",
    marginBottom: 15,
  },
 
});
export default SectionComponent;

import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ItemAccount = ({icon, text}) => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.itemContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <AntDesign name={icon} size={20} />
          <Text style={{paddingLeft: 5}}>{text}</Text>
        </View>
        <FontAwesome name="chevron-right" size={20} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const BORDER = {
  borderBottomWidth: 1,
  borderBottomColor: 'gray',
};
const styles = StyleSheet.create({
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
});
export default ItemAccount;

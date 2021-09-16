import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';

const Order = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: 'gray'}}>
      <Text>đây là trang order</Text>
      <Button
        title=" go to detail screen"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </SafeAreaView>
  );
};
export default Order;

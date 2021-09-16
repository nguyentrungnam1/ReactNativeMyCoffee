import React from 'react';
import { Button, SafeAreaView, Text,View } from 'react-native';

const Account = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Đây là màng hình tài khoản</Text>
      <Button
        title="go to home screen"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
      
    </SafeAreaView>
  );
};
export default Account;

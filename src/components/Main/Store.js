import React from 'react';
import {Button, SafeAreaView,View} from 'react-native';


const Store = ({navigation}) => {  
  return (
    <View>
      <Button  title ="go to Home Screen"
        onPress = {()=> navigation.navigate("Home")
        }
      />
    </View>
  );
};
export default Store;

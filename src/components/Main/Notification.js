import React from "react";
import { Button, SafeAreaView, Text } from "react-native";


const Notification =({navigation})=>{
    return(
       <SafeAreaView>
           <Text>Đây là màng hình thông báo</Text>
           <Button title ="go to home screen" 
               onPress ={
                   ()=>{
                       navigation.navigate("Home")
                   }
               }
           />
       </SafeAreaView>
    );
}
export default Notification;
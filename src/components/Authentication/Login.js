import React from "react";
import {View, Text, StyleSheet,Button} from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign'


const Login = ({navigation})=>{
    return(
        <View style = {{backgroundColor:'red'}}>
            <Button title ="back home"
                onPress ={()=>{
                    navigation.navigate('HomeScreen');
                }}
            />
        </View>
    );
};
const styles = StyleSheet.create({

});
export default Login;
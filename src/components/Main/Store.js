import React from 'react';
import {Button, SafeAreaView, View, StyleSheet} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Entypo from 'react-native-vector-icons/Entypo';

const Store = () => {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude:10.014146246343586,
          longitude: 105.7845290980663,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          coordinate={{
            latitude: 10.014146246343586,
            longitude: 105.7845290980663,
          }}
          title="Cửa hàng"
          icon={<Entypo name="location" size={50} color="red" />}
          description="đây là cửa hàng"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
export default Store;

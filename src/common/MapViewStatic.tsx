import {View, StyleSheet} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import React from 'react';
import {LATITUDE_DELTA, LONGITUDE_DELTA} from '../utils/constants';

const styles = StyleSheet.create({
  mapContainer: {
    borderRadius: 20,
    height: 200,
    overflow: 'hidden',
  },
});
type Props = {
  latitude: number;
  longitude: number;
};
const MapViewStatic = ({latitude, longitude}: Props) => {
  return (
    <View style={styles.mapContainer} pointerEvents="none">
      <MapView
        provider={PROVIDER_GOOGLE}
        userLocationPriority="high"
        style={{flex: 1}}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}>
        <Marker
          icon={{uri: 'https://i.ibb.co/GMk0gHr/Group-627158.png'}}
          coordinate={{
            latitude,
            longitude,
          }}
        />
      </MapView>
    </View>
  );
};

export default MapViewStatic;

/* eslint-disable */
import React, { useEffect, useRef, useState } from 'react';
import {
  Button,
  Colors,
  Flex,
  StyleSheet,
  getColors,
} from 'squashapps-react-native-uikit';
import Geolocation from 'react-native-geolocation-service';
import { View, TouchableOpacity, Alert, Linking } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { PERMISSIONS, request } from 'react-native-permissions';
import {
  API_KEY,
  APP_THEME,
  LATITUDE_DELTA,
  LONGITUDE_DELTA,
} from '../../utils/constants';
import SvgGps from '../../icons/SvgGps';
import SvgLocationMarker from '../../icons/SvgLocationMarker';

const { PRIMARY_COLOR_500 } = getColors(APP_THEME);

const styles = StyleSheet.create({
  overAll: {
    height: '100%',
    width: '100%',
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  inputStyes: {
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.GREY_30,
    borderRadius: 15,
    paddingHorizontal: 16,
    position: 'relative',
    paddingRight: 60,
    backgroundColor: '#FAFAFA',
    height: 50
  },
  svgGps: {
    position: 'absolute',
    zIndex: 99,
    right: 0,
    top: 0,
    height: 50,
    width: 50,
    borderLeftColor: Colors.GREY_30,
    borderLeftWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    flex: 1,
    position: 'absolute',
    left: 0,
    zIndex: 99,
    right: 0,
    top: 20,
    marginHorizontal: 20,
  },
  confirmBtn: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 30,
    zIndex: 99,
    marginHorizontal: 30,
  },
  svgMarker: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -42,
    marginLeft: -16.5,
    zIndex: 11,
  },
});

type Props = {
  setGetLocation: (a: { latitude: number; longitude: number }) => void;
  isGetLocation: {
    latitude: number;
    longitude: number;
  };
  handleConfirmLocation: () => void;
};

const PlaceOrderMap = ({
  setGetLocation,
  isGetLocation,
  handleConfirmLocation,
}: Props) => {
  const [isFocus, setFocus] = useState(false);
  const mapRef = useRef<any>();

  const onPress = (_data: any, details: any) => {
    setGetLocation({
      longitude: details.geometry.location.lng,
      latitude: details.geometry.location.lat,
    });
    mapRef.current.animateToRegion({
      latitude: details.geometry.location.lat,
      longitude: details.geometry.location.lng,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    });
  };

  async function requestLocationPermission() {
    var res = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    if (res === 'granted') {
      Geolocation.getCurrentPosition(
        ({ coords }) => {
          mapRef.current.animateToRegion({
            latitude: coords.latitude,
            longitude: coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          });
          setGetLocation({
            latitude: coords.latitude,
            longitude: coords.longitude,
          });
        },
        _error => {
          // Alert.alert(error.code,error.message)
        },
        {
          enableHighAccuracy: true,
          timeout: 2000,
          maximumAge: 2000,
        },
      );
    }
  }

  async function handleLocationPermission() {
    var res = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    if (res === 'granted') {
      requestLocationPermission();
    } else if (res === 'blocked') {
      Alert.alert(
        'Permission',
        'Device location permission blocked. Enable the location permission manually',
        [
          {
            text: 'Cancel',
            onPress: () => { },
          },
          {
            text: 'Enable',
            onPress: () => {
              Linking.openSettings();
            },
          },
        ],
      );
    }
  }

  useEffect(() => {
    handleLocationPermission();
  }, []);

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };

  const focussedStyle = isFocus ? { borderColor: PRIMARY_COLOR_500 } : {};

  const onRegionChangeComplete = (event: any) => {
    setGetLocation({
      latitude: event.latitude,
      longitude: event.longitude,
    });
  };

  return (
    <Flex flex={1} overrideStyle={{ position: 'relative' }}>
      <View style={styles.searchContainer}>
        {/* <GooglePlacesAutocomplete
          textInputProps={{
            autoFocus: false,
            style: [styles.inputStyes, focussedStyle],
            onBlur: handleBlur,
            onFocus: handleFocus,
            placeholder: 'Search Location',
            allowFontScaling: false,
          }}
          styles={{borderWidth: 1}}
          placeholder="Search..."
          query={{
            key: API_KEY,
            language: 'en',
          }}
          GooglePlacesDetailsQuery={{
            fields: 'geometry',
          }}
          fetchDetails={true}
          onPress={onPress}
          onFail={error => console.error(error)}
          debounce={200}
          renderRightButton={() => (
            <TouchableOpacity
              style={styles.svgGps}
              onPress={handleLocationPermission}>
              <SvgGps fill={PRIMARY_COLOR_500} />
            </TouchableOpacity>
          )}
        /> */}
      </View>

      {/* <MapView
        showsUserLocation
        showsMyLocationButton={false}
        ref={mapRef}
        onRegionChangeComplete={onRegionChangeComplete}
        provider={PROVIDER_GOOGLE}
        userLocationPriority="high"
        style={{ flex: 1 }}
        initialRegion={{
          latitude: isGetLocation.latitude,
          longitude: isGetLocation.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
      /> */}
      <View style={styles.svgMarker}>
        <SvgLocationMarker />
      </View>
      <View style={styles.confirmBtn}>
        <Button onClick={handleConfirmLocation}>Confirm Location</Button>
      </View>
    </Flex>
  );
};

export default PlaceOrderMap;

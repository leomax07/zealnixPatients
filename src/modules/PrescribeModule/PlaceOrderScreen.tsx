import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {
  Text,
  Card,
  StyleSheet,
  Colors,
  Button,
  CheckBox,
  Flex,
} from 'squashapps-react-native-uikit';
import TitleWithValue from '../../common/TitleWithValue';
import PrescriptionCard from './PrescriptionCard';
import MapViewStatic from '../../common/MapViewStatic';
import PlaceOrderMap from './PlaceOrderMap';

const styles = StyleSheet.create({
  overAll: {
    padding: 16,
    backgroundColor: Colors.WHITE,
    marginBottom: 52,
  },
  cardOverAll: {
    padding: 12,
    marginTop: 20,
    borderRadius: 20,
    borderColor: Colors.TEXT_GREY_50,
    borderWidth: 1,
  },
  paragraph: {
    marginBottom: 20,
  },
  paragraphMedicine: {
    marginTop: 12,
    marginBottom: 28,
  },
  headingStyle: {
    marginBottom: 12,
  },
  mapCard: {
    height: 150,
    marginBottom: 28,
    marginRight: 40,
  },
  line: {
    borderBottomColor: Colors.TEXT_GREY_50,
    borderBottomWidth: 1,
    marginBottom: 16,
  },
  btn: {
    marginVertical: 16,
  },
  price: {
    width: 60,
  },
  mapContainer: {
    flex: 1,
    height: 100,
    marginTop: 8,
  },
});

const PlaceOrderScreen = () => {
  const navigation = useNavigation();
  const [autoPay, setAutoPay] = useState<boolean>(false);
  const [isMap, setMap] = useState(true);
  const [isGetLocation, setGetLocation] = useState({
    latitude: 0,
    longitude: 0,
  });

  const handleChangeAutoPay = () => {
    setAutoPay(!autoPay);
  };

  const handlePayment = () => {
    navigation.navigate('PaymentScreen', {isGetLocation});
  };

  const location = {latitude: 11.6293632, longitude: 78.1615104};

  const hanldeEditAddress = () => {
    setMap(true);
  };
  const handleConfirmLocation = () => {
    setMap(false);
  };

  return isMap ? (
    <PlaceOrderMap
      handleConfirmLocation={handleConfirmLocation}
      setGetLocation={setGetLocation}
      isGetLocation={isGetLocation}
    />
  ) : (
    <View>
      <FlatList
        contentContainerStyle={styles.overAll}
        data={[{}, {}, {}]}
        keyExtractor={(_item, index) => index.toString()}
        renderItem={() => (
          <Card align="stretch" overrideStyle={styles.cardOverAll}>
            <PrescriptionCard
              imageHeight={40}
              imageWidth={40}
              title={''}
              manufacturer={''}
              quantity={0}
            />
          </Card>
        )}
        ListFooterComponentStyle={{marginTop: 20}}
        ListFooterComponent={() => (
          <>
            <CheckBox
              checked={autoPay}
              onClick={handleChangeAutoPay}
              label="Opt for Auto Order "
            />
            <Text color="gray" overrideStyle={styles.paragraphMedicine}>
              These medicines will be reordered automatically after 22 Jan 2022
            </Text>
            <Flex between row center overrideStyle={styles.headingStyle}>
              <Text type="heading500">Delivery Address</Text>
              <Button onClick={hanldeEditAddress} type="link">
                Edit
              </Button>
            </Flex>

            <Text color="gray" overrideStyle={styles.paragraph}>
              Shop No 2, 320,ground Floor, Ebrahim Rahimtulla Road, Mandvi,
              Mumbai, Maharashtra
            </Text>
            <MapViewStatic
              latitude={location.latitude}
              longitude={location.longitude}
            />

            <Text
              type="heading500"
              overrideStyle={[styles.headingStyle, {marginTop: 20}]}>
              Payment Summary :
            </Text>
            <TitleWithValue
              between
              title="Order Total"
              titleSize="body300"
              titleColor="gray"
              value={
                <Text align="left" overrideStyle={styles.price}>
                  ₹ 234
                </Text>
              }
            />
            <TitleWithValue
              between
              title="Shipping"
              titleSize="body300"
              titleColor="gray"
              value={
                <Text align="left" overrideStyle={styles.price}>
                  ₹ 0
                </Text>
              }
            />
            <View style={styles.line} />
            <TitleWithValue
              between
              title="Total"
              titleSize="body300"
              value={
                <Text
                  align="left"
                  type="heading500"
                  color="link"
                  overrideStyle={styles.price}>
                  ₹ 234
                </Text>
              }
            />
            <Button overrideStyle={styles.btn} onClick={handlePayment}>
              Proceed to Payment
            </Button>
          </>
        )}
      />
    </View>
  );
};

export default PlaceOrderScreen;

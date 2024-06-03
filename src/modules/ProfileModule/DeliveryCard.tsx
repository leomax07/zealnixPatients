import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Card,
  Flex,
  Image,
  Text,
  getColors,
  Icons,
  Stepper,
} from 'squashapps-react-native-uikit';
import {APP_THEME} from '../../utils/constants';

const {PRIMARY_COLOR_500} = getColors(APP_THEME);
const {SvgPhoneCall, SvgStoreBasketClosed, SvgDeliveryTruk, SvgBoxDelivered} =
  Icons;
const styles = StyleSheet.create({
  overAll: {
    padding: 12,
  },
  textDeliveryDate: {
    marginTop: 4,
  },
  textDeliverUpdateDate: {
    marginTop: 12,
  },
  overAllCard: {
    marginBottom: 16,
  },
  viewStyle: {
    position: 'relative',
  },
  phoneCallContainer: {
    height: 16,
    width: 16,
    position: 'relative',
    right: -20,
    top: -20,
    padding: 3,
    borderRadius: 20,
    backgroundColor: PRIMARY_COLOR_500,
  },
});
const DeliveryCard = () => {
  return (
    <Card
      align="stretch"
      outline
      overrideContainerStyle={styles.overAll}
      overrideStyle={styles.overAllCard}>
      <Flex>
        <Flex row between overrideStyle={styles.overAllCard}>
          <Flex>
            <Text type="body300" color="gray">
              Estimated Delivery Date
            </Text>
            <Text type="heading400" overrideStyle={styles.textDeliveryDate}>
              12 March 2022
            </Text>
          </Flex>
          <View>
            <Image
              height={36}
              width={36}
              src="https://i.ibb.co/ykGvpnF/Ellipse-2965.png"
            />
            <Flex center middle overrideStyle={styles.phoneCallContainer}>
              <SvgPhoneCall />
            </Flex>
          </View>
        </Flex>
        <Stepper
          steps={[
            { label: <SvgStoreBasketClosed /> },
            { label: <SvgDeliveryTruk /> },
            { label: <SvgBoxDelivered /> },
          ]}
          currentStep={0}
        />
        <Text type="heading400" overrideStyle={styles.textDeliverUpdateDate}>
          Delivery Latest Update
        </Text>
        <Flex row>
          <Text type="body100" color="gray">
            12 Feb 2022 8:00 AM
          </Text>
          <Text type="body100">- Shipment At Gwalior Substation</Text>
        </Flex>
      </Flex>
    </Card>
  );
};

export default DeliveryCard;

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Flex, getColors, Text} from 'squashapps-react-native-uikit';
import SvgTriangleBackground from '../../icons/SvgTriangleBackground';
import {APP_THEME} from '../../utils/constants';

const {PRIMARY_COLOR_600, PRIMARY_COLOR_300} = getColors(APP_THEME);
const styles = StyleSheet.create({
  overAll: {
    backgroundColor: PRIMARY_COLOR_600,
    padding: 12,
  },
  positionRelative: {
    position: 'relative',
  },
  textContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
  },
  textFlex: {
    marginTop: 60,
  },
  cardConatiner: {
    paddingTop: 24,
  },
  textWallet: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    height: 28,
    backgroundColor: PRIMARY_COLOR_300,
    borderRadius: 8,
  },
});
const WalletDetailedCard = () => {
  return (
    <Card align="stretch" overrideStyle={styles.overAll}>
      <Flex overrideStyle={styles.positionRelative}>
        <SvgTriangleBackground />
        <View style={styles.textContainer}>
          <Flex row between>
            <Flex overrideStyle={styles.textFlex}>
              <Text type="heading700" color="white">
                ₹2500
              </Text>
              <Text type="body300" color="white">
                Available amount
              </Text>
              <Text
                type="heading500"
                color="white"
                overrideStyle={styles.cardConatiner}>
                **** **** 3002
              </Text>
              <Text type="body300" color="white">
                Card number
              </Text>
            </Flex>

            <Flex center overrideStyle={styles.textWallet}>
              <Text type="heading500" color="white">
                WALLET CARD
              </Text>
            </Flex>
          </Flex>
        </View>
      </Flex>
    </Card>
  );
};
export default WalletDetailedCard;

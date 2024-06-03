import React from 'react';
import {View} from 'react-native';
import {
  Card,
  Flex,
  getColors,
  Text,
  Icons,
  Colors,
  StyleSheet,
} from 'squashapps-react-native-uikit';
import SvgWalletFrame from '../../icons/SvgWalletFrame';
import {APP_THEME} from '../../utils/constants';

const {PRIMARY_COLOR_500} = getColors(APP_THEME);
const {SvgArrowRight} = Icons;

const styles = StyleSheet.create({
  overAll: {
    marginTop: 24,
    marginBottom: 40,
    backgroundColor: PRIMARY_COLOR_500,
    borderRadius: 20,
    position: 'relative',
  },
  textPrice: {
    marginTop: 4,
  },
  textContainer: {
    position: 'absolute',
    width: '100%',
    paddingVertical: 24,
    paddingHorizontal: 12,
  },
  iconContainer: {
    padding: 10,
    borderColor: Colors.WHITE,
    borderWidth: 1,
    borderRadius: 8,
  },
});
type Props = {
  onClick?: () => void;
};
const WalletCard = ({onClick}: Props) => {
  return (
    <Card overrideStyle={styles.overAll} onClick={onClick}>
      <Flex>
        <Flex row between center overrideStyle={styles.textContainer}>
          <View>
            <Text color="white" type="body300">
              Your Wallet Balance
            </Text>
            <Text
              color="white"
              type="heading600"
              overrideStyle={styles.textPrice}>
              ₹2500
            </Text>
          </View>
          <View style={styles.iconContainer}>
            <SvgArrowRight fill={Colors.WHITE} />
          </View>
        </Flex>
        <SvgWalletFrame />
      </Flex>
    </Card>
  );
};
export default WalletCard;

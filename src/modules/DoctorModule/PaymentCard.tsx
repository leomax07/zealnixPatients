import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaFrame} from 'react-native-safe-area-context';
import {
  Card,
  getColors,
  StyleSheet,
  Text,
  Icons,
} from 'squashapps-react-native-uikit';
import TitleWithValue from '../../common/TitleWithValue';
import {APP_THEME} from '../../utils/constants';

const {PRIMARY_COLOR_500, PRIMARY_COLOR_100, PRIMARY_COLOR_200} =
  getColors(APP_THEME);
const {SvgInformation} = Icons;
const styles = StyleSheet.create({
  overAll: {
    marginTop: 16,
    height: 176,
    marginBottom: 28,
  },
  linerStyle: {
    height: '100%',
    borderWidth: 4,
    borderColor: PRIMARY_COLOR_200,
    borderRadius: 10,
    padding: 12,
  },
  contentContainer: {
    paddingHorizontal: 16,
  },
  price: {
    marginBottom: 12,
  },
});
const PaymentCard = () => {
  const {width} = useSafeAreaFrame();

  return (
    <Card overrideStyle={styles.overAll}>
      <LinearGradient
        colors={[PRIMARY_COLOR_500, PRIMARY_COLOR_100]}
        locations={[1, 1]}
        style={[styles.linerStyle, {width: width * 0.9}]}>
        <TitleWithValue
          between
          title="Total Payment"
          titleSize="body300"
          titleColor="white"
          valueColor="white"
          value={<SvgInformation />}
        />
        <Text type="heading700" color="white" overrideStyle={styles.price}>
          ₹ 442
        </Text>
        <TitleWithValue
          between
          title="Premium Appointment"
          titleColor="white"
          titleSize="body100"
          valueColor="white"
          valueSize="body100"
          value="₹ 312"
        />
        <TitleWithValue
          between
          title="Convenience Charges"
          titleColor="white"
          titleSize="body100"
          valueSize="body100"
          valueColor="white"
          value="₹ 112"
        />
      </LinearGradient>
    </Card>
  );
};
export default PaymentCard;

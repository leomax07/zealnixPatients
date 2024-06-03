import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Card,
  getColors,
  Colors,
  InputRadio,
  Flex,
  Image,
  Text,
} from 'squashapps-react-native-uikit';
import {APP_THEME} from '../../utils/constants';

const {PRIMARY_COLOR_500} = getColors(APP_THEME);

const styles = StyleSheet.create({
  activeCard: {
    borderColor: PRIMARY_COLOR_500,
    borderWidth: 1,
  },
  inActiveCard: {
    borderColor: Colors.TEXT_GREY_50,
    borderWidth: 1,
  },
  card: {
    padding: 20,
    marginBottom: 20,
  },
  text: {
    marginLeft: 12,
  },
  individualItem: {
    position: 'relative',
    top: 4,
  },
});
type PaymentItemProps = {
  item: {
    name: string;
    img?: string;
    value: string;
  };
  paymentType: string;
  handleChange: (args: string) => void;
};
const PaymentIndividualItem = ({
  item,
  paymentType,
  handleChange,
}: PaymentItemProps) => {
  const onhandleClick = (val: string) => {
    handleChange(val);
  };
  const borderStyle =
    paymentType === item?.value ? styles.activeCard : styles.inActiveCard;
  return (
    <Card align="stretch" overrideStyle={[styles.card, borderStyle]}>
      <InputRadio
        onClick={() => onhandleClick(item?.value)}
        key={item?.value}
        label={
          <Flex row bottom overrideStyle={styles.individualItem}>
            {item?.img && <Image src={item.img} height={24} width={24} />}
            <Text overrideStyle={styles.text}>{item?.name}</Text>
          </Flex>
        }
        name={item?.name}
        value={item?.value}
        checked={paymentType === item?.value}
      />
    </Card>
  );
};
export default PaymentIndividualItem;

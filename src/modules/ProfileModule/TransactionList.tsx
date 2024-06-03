import React from 'react';
import {Card, Flex, Colors, StyleSheet} from 'squashapps-react-native-uikit';
import TitleWithValue from '../../common/TitleWithValue';

type Props = {
  title: string;
  amount: string;
  txnId: string;
  time: string;
  type: string;
};
const styles = StyleSheet.create({
  overAll: {
    borderColor: Colors.TEXT_GREY_100,
    marginBottom: 12,
    borderWidth: 1,
    padding: 8,
  },
});
const TransactionList = ({title, amount, txnId, time, type}: Props) => {
  const paymentType = type === 'credit';
  const paymentColor = paymentType ? 'success' : 'error';
  const paymentIcon = paymentType ? '+' : '-';

  return (
    <Card align="stretch" overrideStyle={styles.overAll}>
      <Flex middle>
        <TitleWithValue
          between
          title={title}
          value={`${paymentIcon} ${amount}`}
          valueColor={paymentColor}
        />
        <TitleWithValue
          between
          title={`Txn ID : ${txnId}`}
          titleSize="body300"
          titleColor="gray"
          value={time}
          valueColor="gray"
          valueSize="body300"
        />
      </Flex>
    </Card>
  );
};
export default TransactionList;

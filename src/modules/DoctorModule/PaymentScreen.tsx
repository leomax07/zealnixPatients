import React, {useState} from 'react';
import {ScrollView, SectionList} from 'react-native';
import {
  Text,
  StyleSheet,
  Button,
  InputText,
  Icons,
  Colors,
} from 'squashapps-react-native-uikit';
import TitleWithValue from '../../common/TitleWithValue';
import {paymentScreen} from './mock';
import PaymentCard from './PaymentCard';
import PaymentIndividualItem from './PaymentIndividualItem';

const {SvgSend} = Icons;
const styles = StyleSheet.create({
  overAll: {
    padding: 28,
    backgroundColor: Colors.WHITE,
  },
  payment: {
    marginBottom: 12,
  },
  button: {
    marginTop: 20,
    marginHorizontal: 25,
  },
});

const PaymentScreen = () => {
  const [paymentType, setPaymentType] = useState('');
  const isUpi = paymentType === 'upid';
  const [upi, setUpi] = useState('');
  const ButtonRight = () => <SvgSend />;
  const handleChange = (e: string) => {
    setUpi(e);
  };
  const handlePaymentType = (val: any) => {
    setPaymentType(val);
  };
  return (
    <ScrollView contentContainerStyle={styles.overAll} bounces={false}>
      <Text type="heading600">Confirm Payment</Text>
      <PaymentCard />
      <SectionList
        sections={paymentScreen}
        renderItem={({item, index}) => (
          <PaymentIndividualItem
            item={item}
            key={index.toString()}
            paymentType={paymentType}
            handleChange={handlePaymentType}
          />
        )}
        renderSectionHeader={({section: {title}}) => (
          <TitleWithValue
            between
            titleSize="body300"
            title={title?.name}
            value={title?.value}
          />
        )}
      />
      {isUpi && (
        <InputText
          placeholder="Enter Upi"
          value={upi}
          onChange={handleChange}
          actionRight={ButtonRight}
        />
      )}

      <Button overrideStyle={styles.button}>
        <Text type="heading500" color="white">
          Pay ₹442
        </Text>
      </Button>
    </ScrollView>
  );
};

export default PaymentScreen;

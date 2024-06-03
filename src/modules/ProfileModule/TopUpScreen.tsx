import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {SectionList, View, ScrollView} from 'react-native';
import {
  ButtonGroup,
  InputText,
  StyleSheet,
  Text,
  Button,
} from 'squashapps-react-native-uikit';
import TitleWithValue from '../../common/TitleWithValue';
import {paymentScreen} from '../DoctorModule/mock';
import PaymentIndividualItem from '../DoctorModule/PaymentIndividualItem';
import {paymentAmount} from './mock';
import WalletPopUp from './WalletPopUp';

const styles = StyleSheet.create({
  overAll: {
    padding: 20,
  },
  textPayment: {
    marginTop: 44,
  },
  selectionList: {
    marginTop: 24,
  },
  button: {
    marginTop: 20,
    marginHorizontal: 24,
  },
});
const TopUpScreen = () => {
  const navigation = useNavigation();
  const [price, setPrice] = useState('₹ 100');
  const [paymentType, setPaymentType] = useState('');
  const handlePaymentType = (val: any) => {
    setPaymentType(val);
  };
  const [visible, setVisible] = useState(false);
  const handleVisibleClose = () => setVisible(false);
  const handleVisibleOpen = () => setVisible(true);
  const handleClose = () => {
    handleVisibleClose();
    navigation.goBack();
  };
  const handleSubmit = () => {
    handleVisibleClose();
    navigation.goBack();
  };
  const updatedData = paymentScreen.map(item => {
    return {
      ...item,
      data: item?.data.filter(obj => obj.value !== 'wallet'),
    };
  });
  return (
    <ScrollView contentContainerStyle={styles.overAll} bounces={false}>
      <WalletPopUp open={visible} close={handleClose} submit={handleSubmit} />
      <InputText
        bold
        type="noBorder"
        label="Enter Top up Amount"
        value={price}
        onChange={setPrice}
      />
      <View style={styles.selectionList}>
        <ButtonGroup onChange={setPrice} buttons={paymentAmount} />
      </View>
      <Text type="heading500" overrideStyle={styles.textPayment}>
        Payment Options
      </Text>
      <SectionList
        style={styles.selectionList}
        sections={updatedData}
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
            value={title.value}
          />
        )}
      />
      <Button overrideStyle={styles.button} onClick={handleVisibleOpen}>
        <Text type="heading500" color="white">
          Top up ₹1000
        </Text>
      </Button>
    </ScrollView>
  );
};

export default TopUpScreen;

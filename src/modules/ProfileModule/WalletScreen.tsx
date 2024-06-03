import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, ScrollView} from 'react-native';
import {
  Button,
  Flex,
  StyleSheet,
  Text,
  Icons,
} from 'squashapps-react-native-uikit';
import TitleWithValue from '../../common/TitleWithValue';
import {transactionList} from './mock';
import TransactionList from './TransactionList';
import WalletDetailedCard from './WalletDetailedCard';

const {SvgArrowDown} = Icons;
const styles = StyleSheet.create({
  overAll: {
    padding: 20,
  },
  BtnTopUp: {
    marginTop: 24,
    marginBottom: 32,
  },
});
const WalletScreen = () => {
  const navigation = useNavigation();
  const handleTopUp = () => {
    navigation.navigate('TopUpScreen');
  };
  return (
    <ScrollView contentContainerStyle={styles.overAll} bounces={false}>
      <WalletDetailedCard />
      <Button overrideStyle={styles.BtnTopUp} onClick={handleTopUp}>
        Top up
      </Button>
      <TitleWithValue
        between
        titleColor="gray"
        titleSize="body300"
        title="Latest Transactions"
        value={
          <Flex row>
            <Text>Last Month</Text>
            <SvgArrowDown />
          </Flex>
        }
      />
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={transactionList}
        scrollEnabled
        keyExtractor={(_item, index) => index.toString()}
        renderItem={({item}) => (
          <TransactionList
            type={item?.type}
            title={item?.title}
            amount={item?.amount}
            txnId={item?.id}
            time={item?.time}
          />
        )}
      />
    </ScrollView>
  );
};

export default WalletScreen;

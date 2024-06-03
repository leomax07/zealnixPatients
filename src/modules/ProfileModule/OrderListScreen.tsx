import React, {useState} from 'react';
import {ScrollView, StyleSheet, FlatList, View} from 'react-native';
import moment, {Moment} from 'moment';
import {useFormik} from 'formik';
import {Flex, Colors, validators} from 'squashapps-react-native-uikit';
import SearchBar from '../../common/SearchBar';
import {orderList} from './mock';
import OrderIndividualCard from './OrderIndividualCard';
import {useLanguage} from '../../utils/useLanguage';
import OrderPopUp from './OrderPopUp';

const {isEmpty} = validators;
const {THIS_FIELD_REQUIRED} = useLanguage;

const styles = StyleSheet.create({
  overAll: {
    marginLeft: 8,
    marginTop: 16,
  },
  statusBar: {
    marginHorizontal: 12,
    marginTop: 20,
    marginBottom: 16,
  },
  overAllContainer: {
    backgroundColor: Colors.WHITE,
  },
});
export type formType = {
  orderStatus: string;
  startDate: Moment;
  endDate: Moment;
};
const initialValues: formType = {
  orderStatus: '',
  startDate: moment(),
  endDate: moment(),
};

const validate = (values: formType) => {
  const errors: Partial<formType> = {};
  if (isEmpty(values.orderStatus)) {
    errors.orderStatus = THIS_FIELD_REQUIRED;
  }
  return errors;
};

const OrderListScreen = () => {
  const [isFilter, setFilter] = useState<boolean>(false);
  const handleAddDataOpen = () => setFilter(true);
  const handleAddDataClose = () => setFilter(false);
  const [data, setData] = useState<formType>();
  const handleSave = (values: formType) => {
    setData(values);
    data && handleAddDataClose();
  };

  const formik = useFormik({
    initialValues,
    onSubmit: handleSave,
    validate,
  });

  return (
    <ScrollView contentContainerStyle={styles.overAll}>
      <OrderPopUp open={isFilter} formik={formik} close={handleAddDataClose} />
      <Flex overrideStyle={styles.statusBar}>
        <SearchBar
          isFilter
          onClickFilter={handleAddDataOpen}
          placeholder="Search Medicines"
        />
      </Flex>
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={orderList}
        keyExtractor={(_item, index) => index.toString()}
        renderItem={({item}) => (
          <OrderIndividualCard
            id={item?.id}
            inTransit={item?.inTransit}
            item={item?.item}
            date={item?.date}
            location={item?.location}
            price={item?.price}
            deliveryDate={item?.deliveryDate}
            payment={item?.payment}
            delivery={item?.delivery}
          />
        )}
        ListFooterComponent={<View style={{height: 50}} />}
      />
    </ScrollView>
  );
};

export default OrderListScreen;

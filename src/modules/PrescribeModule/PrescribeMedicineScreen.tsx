import React, { useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import {
  Button,
  Card,
  Colors,
  Flex,
  Loader,
  getColors,
} from 'squashapps-react-native-uikit';
import { useDispatch, useSelector } from 'react-redux';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { APP_THEME } from '../../utils/constants';
import MedicineEmpty from './MedicineEmpty';
import PrescriptionCard from './PrescriptionCard';
import { AppDispatch, RootState } from '../../redux/store';
import { prescriptionsListMiddleWare } from './store/prescribeMiddleware';
import { tabletList } from '../AppointmentModule/mock';

const { PRIMARY_COLOR_500 } = getColors(APP_THEME);

type ParamListBase = {
  sample: { appointmentId: string };
};

interface SampleRouteProp extends RouteProp<ParamListBase, 'sample'> { }

const styles = StyleSheet.create({
  btnContainer: {
    margin: 20,
  },
  overAll: {
    backgroundColor: Colors.WHITE,
  },
  cardOverAll: {
    padding: 20,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 10,
  },
});

const PrescribeMedicineScreen = () => {
  const navigation = useNavigation();
  const dispatch: AppDispatch = useDispatch();
  const route = useRoute<SampleRouteProp>();
  const { appointmentId } = route.params;

  // useEffect(() => {
  //   dispatch(
  //     prescriptionsListMiddleWare({
  //       where: {
  //         appointmentId,
  //       },
  //     }),
  //   );
  // }, []);

  const { data, isLoading } = useSelector(
    ({ prescriptionsListReducers }: RootState) => {
      return {
        data: prescriptionsListReducers.data,
        isLoading: prescriptionsListReducers.isLoading,
      };
    },
  );

  const handlePlaceOrder = () => {
    navigation.navigate('PlaceOrderScreen');
  };

  if (isLoading) {
    <Loader />;
  }
  return (
    <Flex flex={1} overrideStyle={styles.overAll}>
      <FlatList
        data={tabletList}
        keyExtractor={(_item, index) => index.toString()}
        renderItem={({ item }) => (
          <Card align="stretch" overrideStyle={styles.cardOverAll}>
            <PrescriptionCard
              manufacturer={item?.brand}
              quantity={3}
              isTime
              title={item?.name}
              dosageTimes={"1223"}
              dosage={13333}
              order={"12"}
            />
          </Card>
        )}
        ListEmptyComponent={<MedicineEmpty />}
      />
      <Flex bottom overrideStyle={styles.btnContainer}>
        <Button>Place Order Online</Button>
      </Flex>
    </Flex>
  );
};

export default PrescribeMedicineScreen;

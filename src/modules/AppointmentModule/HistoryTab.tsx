/* eslint-disable */
import React, {useEffect, useMemo, useState} from 'react';
import {FlatList, View} from 'react-native';
import {
  Flex,
  Loader,
  StyleSheet,
  validators,
  Text,
} from 'squashapps-react-native-uikit';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import moment, {Moment} from 'moment';
import {useFormik} from 'formik';
import SearchBar from '../../common/SearchBar';
import {useLanguage} from '../../utils/useLanguage';
import {AppDispatch, RootState} from '../../redux/store';
import {prescriptionsListMiddleWare} from '../PrescribeModule/store/prescribeMiddleware';
import AppointmentFilterPopUp from './AppointmentFilterPopUp';
import AppointmentsCard from './AppointmentsCard';
import {
  appoinmentDetailsMiddleWare,
  appoinmentsListHistoryMiddleWare,
  getLabReportList,
  vitalListMiddleWare,
} from './store/appointmentMiddleware';
import {getCurentMini} from '../../utils/helpers';
import { mockAppointments } from './mock';

const {isEmpty} = validators;
const {THIS_FIELD_REQUIRED} = useLanguage;

const styles = StyleSheet.create({
  overAll: {
    padding: 20,
  },
  profile: {
    height: 40,
    width: 40,
    borderRadius: 8,
  },
  margin: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  bottomList: {
    marginBottom: 120,
  },
});

export type formType = {
  appointmentType: string;
  date: Moment;
};

const initialValues: formType = {
  appointmentType: '',
  date: moment(),
};

const validate = (values: formType) => {
  const errors: Partial<formType> = {};
  if (isEmpty(values.appointmentType)) {
    errors.appointmentType = THIS_FIELD_REQUIRED;
  }
  return errors;
};

const HistoryTab = () => {
  const navigation = useNavigation();
  const [isPopUp, setPopUp] = useState<boolean>(false);
  const handleAddDataOpen = () => setPopUp(true);
  const handleAddDataClose = () => setPopUp(false);
  const [search, setSearch] = useState<string>();
  const [overallLoader, setLoader] = useState(false);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(
      appoinmentsListHistoryMiddleWare({
        where: {
          'appointmentSchedule.appointmentRangeStart': {
            $lt: getCurentMini(),
          },
          appointmentDate: {$lte: moment().startOf('day')},
        },
        include: [
          'hospital',
          'patient',
          'doctor',
          'appointmentSchedule',
          'department',
        ],
      }),
    );
    setSearch('');
  }, []);

  const {isLoading, appoinmentListData, appoinmentDetailsLoader} = useSelector(
    ({appoinmentListHistoryReducers, appoinmentDetailsReducers}: RootState) => {
      return {
        isLoading: appoinmentListHistoryReducers.isLoading,
        appoinmentListData: appoinmentListHistoryReducers.data,
        appoinmentDetailsLoader: appoinmentDetailsReducers.isLoading,
      };
    },
  );

  const handleSave = (values: formType) => {
    dispatch(
      appoinmentsListHistoryMiddleWare({
        where: {
          appointmentDate: values.date,
          appointmentType: values.appointmentType,
        },
        include: ['hospital', 'patient', 'doctor', 'appointmentSchedule'],
      }),
    );
    handleAddDataClose();
  };

  const searchByName = (name: string) => {
    const filteredAppointments = mockAppointments.filter(appointment => {
      const appointmentName = appointment.doctor.name.toLowerCase();
      return appointmentName.includes(name.toLowerCase());
    });

    return filteredAppointments;
  };

  const handleSearch = (val: string) => {
    setSearch(val);
  };

  // const result = useMemo(() => {
  //   const output = search ? searchByName(search) : appoinmentListData;
  //   setLoader(false);

  //   return output;
  // }, [search, appoinmentListData]);

  const result = useMemo(() => {
    const output = search ? searchByName(search) : mockAppointments;
    setLoader(false);

    return output;
  }, [search, mockAppointments]);

  const formik = useFormik({
    initialValues,
    onSubmit: handleSave,
    validate,
  });

  const handleViewCard = (id: string) => {
    navigation.navigate('AppointmentDetailsScreen');
    // dispatch(appoinmentDetailsMiddleWare({appointmentId: id})).then(res => {
    //   if (res.payload?.id) {
    //     dispatch(
    //       prescriptionsListMiddleWare({
    //         where: {
    //           appointmentId: res.payload?.id,
    //         },
    //       }),
    //     ).then(response => {
    //       if (response.payload) {
    //         dispatch(
    //           vitalListMiddleWare({
    //             where: {
    //               appointmentId: res.payload.id,
    //             },
    //           }),
    //         ).then(data => {
    //           if (data.payload) {
    //             dispatch(
    //               getLabReportList({
    //                 where: {
    //                   patientId: res.payload?.patientId,
    //                 },
    //                 include: [{relation: 'lab'}],
    //               }),
    //             ).then(responseee => {
    //               if (responseee.payload) {
    //                 navigation.navigate('AppointmentDetailsScreen');
    //               }
    //             });
    //           }
    //         });
    //       }
    //     });
    //   }
    // });
  };

  return (
    <>
      {(isLoading || appoinmentDetailsLoader || overallLoader) && <Loader />}
      <AppointmentFilterPopUp
        open={isPopUp}
        formik={formik}
        close={handleAddDataClose}
      />
      <Flex overrideStyle={styles.overAll}>
        <SearchBar
          value={search}
          isFilter
          onChange={handleSearch}
          onClickFilter={handleAddDataOpen}
          placeholder="Search Appointments"
        />
        <FlatList
          data={result}
          keyExtractor={(_item, index) => index.toString()}
          renderItem={({item}) => (
            <AppointmentsCard item={item} handleViewCard={handleViewCard} />
          )}
          ListFooterComponent={<View style={{height: 60}} />}
          ListEmptyComponent={() => (
            <Flex
              center
              middle
              overrideStyle={{
                marginTop: 20,
                // width,
              }}>
              <Text color="gray" type="heading500">
                No Appointments
              </Text>
            </Flex>
          )}
        />
      </Flex>
    </>
  );
};

export default HistoryTab;

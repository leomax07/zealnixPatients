import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Button, Flex, Text, Loader} from 'squashapps-react-native-uikit';
import {useSafeAreaFrame} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import AppointmentDetails from './AppointmentDetails';
import AppointmentDetailsProfile from './AppointmentDetailsProfile';
import PrescriptionList from './PrescriptionList';
import RazorpayCheckout from 'react-native-razorpay';
import DocumentList from './DocumentList';

const styles = StyleSheet.create({
  overAll: {
    padding: 20,
  },

  prescriptionText: {
    marginBottom: 20,
  },
  btn: {
    marginHorizontal: 20,
  },
  expBtn: {
    margin: 20,
  },
});

const AppointmentDetailsScreen = () => {
  const [isView, setView] = useState(false);
  const navigation = useNavigation();
  const {height} = useSafeAreaFrame();

  const {data, loading, priscriptionList, listLoading, labReportList} =
    useSelector(
      ({
        appoinmentDetailsReducers,
        prescriptionsListReducers,
        appoinmentListReducers,
        labReportReducers,
      }: RootState) => {
        return {
          labReportList: labReportReducers.data,
          loading: appoinmentDetailsReducers.isLoading,
          listLoading: appoinmentListReducers.isLoading,
          data: appoinmentDetailsReducers.data,
          priscriptionList: prescriptionsListReducers.data,
        };
      },
    );

  const handleFullView = () => setView(true);

  const handlePrescribe = () => {
    navigation.navigate('PrescribeMedicineScreen', {
      appointmentId: data.id,
    });
  };

  if (loading || listLoading) {
    <Loader />;
  }
  return (
    <Flex>
      <ScrollView
        contentContainerStyle={styles.overAll}
        bounces={false}
        style={{height: height - 320}}>
        <Flex>
          <AppointmentDetailsProfile data={data} />
          {labReportList?.length > 0 && <DocumentList data={labReportList} />}
          {priscriptionList[0]?.medicine?.id && (
            <>
              <Text type="heading500" overrideStyle={styles.prescriptionText}>
                Prescription
              </Text>
              <PrescriptionList
                items={priscriptionList}
                handleDetailedScreen={handlePrescribe}
              />
            </>
          )}
          {data.status !== 'upcoming' && (
            <AppointmentDetails
              isView={isView}
              data={data}
              handleFullView={handleFullView}
            />
          )}
        </Flex>
      </ScrollView>
      <Flex overrideStyle={styles.btn}>
        <Button type="secondary" onClick={handlePrescribe}>
          Re-book Appointment
        </Button>
      </Flex>

      <Flex overrideStyle={styles.expBtn}>
        <Button
          onClick={() => {
            var options = {
              description: 'Credits towards consultation',
              image: require('../../assets/images/garuda.png'),
              currency: 'INR',
              key: 'rzp_test_2VYHup8J177yIx',
              amount: '5000',
              name: 'Squash Corp',
              order_id: '', //Replace this with an order_id created using Orders API.
              prefill: {
                email: 'suryak@squashapps.com',
                contact: '9191919191',
                name: 'Surya K',
              },
              theme: {color: '#53a20e'},
            };
            RazorpayCheckout.open(options)
              .then((data: any) => {
                // handle success
                console.log(
                  `Success: ${data.razorpay_payment_id}`,
                  '`Success: ${data.razorpay_payment_id}`',
                );
                // (`Success: ${data.razorpay_payment_id}`);
              })
              .catch((error: any) => {
                // handle failure
                console.log(
                  `Error: ${error.code} | ${error.description}`,
                  '`Error: ${error.code} | ${error.description}`',
                );
                // alert(`Error: ${error.code} | ${error.description}`);
              });
          }}>
          Razor Booking
        </Button>
      </Flex>
    </Flex>
  );
};

export default AppointmentDetailsScreen;

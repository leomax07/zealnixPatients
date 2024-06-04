import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import {
  Button,
  Colors,
  Flex,
  StyleSheet,
  Text,
  Icons,
} from 'squashapps-react-native-uikit';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import DoctorListCard from './DoctorListCard';
import MapViewStatic from '../../common/MapViewStatic';
import { RootState } from '../../redux/store';

const { SvgAccounts, SvgHospitalOutline } = Icons;
const styles = StyleSheet.create({
  overAll: {
    backgroundColor: Colors.WHITE,
    padding: 20,
  },
  roundedButtonContainer: {
    backgroundColor: '#F2FAFF',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 16,
  },
  detailsContainer: {
    marginTop: 4,
  },
  btnText: {
    marginLeft: 12,
  },
  descContainer: {
    marginTop: 32,
  },
  paragraphContianer: {
    marginTop: 12,
  },
});
type ParamListBase = {
  sample: { id: string };
};

interface SampleRouteProp extends RouteProp<ParamListBase, 'sample'> { }

const DoctorDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<SampleRouteProp>();
  const { id } = route.params;

  const { data } = useSelector(({ doctorDetailsReducers }: RootState) => {
    return {
      data: doctorDetailsReducers.data,
    };
  });

  const handleNewAppointment = () => {
    navigation.navigate('NewAppointmentScreen', {
      id,
    });

    // navigation.navigate('MessageConfirmationScreen');
  };

  const location = { latitude: 11.6293632, longitude: 78.1615104 };

  return (
    <ScrollView>
      <Flex overrideStyle={styles.overAll} flex={1}>
        <DoctorListCard
          borderRadius={25}
          image={"https://i.ibb.co/54nsKgR/doctor.webp"}
          doctorName={"YuvarajP"}
          doctorType={"Radiology"}
          branch={"Chennai"}
        />
        <Flex row center around overrideStyle={styles.detailsContainer}>
          <Flex row overrideStyle={styles.roundedButtonContainer}>
            <SvgHospitalOutline />
            <Text size={12} color="link" overrideStyle={styles.btnText}>
              GH,Kovai
            </Text>
          </Flex>
          <Flex row overrideStyle={styles.roundedButtonContainer}>
            <SvgAccounts />
            <Text size={12} color="link" overrideStyle={styles.btnText}>
              150+ Patients
            </Text>
          </Flex>
        </Flex>
        <Text type="heading600" overrideStyle={styles.descContainer}>
          Biography
        </Text>
        <Text overrideStyle={styles.paragraphContianer}>
          Dr. Bruce specialist in peadiatric, and work in Royal Hospital
          consectetur adipiscing elit, sed do eiusmod tempor incidi utaliqua.
        </Text>
        {/* <Text type="heading600" overrideStyle={styles.descContainer}>
          Gallery
        </Text> */}
        <Text type="heading600" overrideStyle={styles.descContainer}>
          Work Location
        </Text>
        <Text
          color="gray"
          overrideStyle={[styles.paragraphContianer, { marginBottom: 16 }]}>
          {data?.branch?.address}
        </Text>

        {/* <MapViewStatic
          latitude={location.latitude}
          longitude={location.longitude}
        /> */}

        <Flex overrideStyle={{ marginTop: 30 }} flex={1} bottom>
          <Button onClick={handleNewAppointment}>Make Appointment</Button>
        </Flex>
      </Flex>
    </ScrollView>
  );
};
export default DoctorDetailScreen;

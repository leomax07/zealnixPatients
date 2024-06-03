import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { FlatList, RefreshControl, ScrollView, View } from 'react-native';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import SwiperFlatList from 'react-native-swiper-flatlist';
import { Flex, StyleSheet, Text, Loader } from 'squashapps-react-native-uikit';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import CustomStatusBar from '../../common/CustomStatusBar';
import IconRoundBackground from '../../common/IconRoundBackground';
import TitleWithViewAll from '../../common/TitleWithViewAll';
import SvgGynecology from '../../icons/SvgGynecology';
import { IS_ANDROID } from '../../utils/constants';
import SvgRadiology from '../../icons/SvgRadiology';
import SvgDental from '../../icons/SvgDental';
import SvgNeurology from '../../icons/SvgNeurology';
import SvgIntensiveCare from '../../icons/SvgIntensiveCare';
import SvgSurgery from '../../icons/SvgSurgery';
import SvgPharmacy from '../../icons/SvgPharmacy';
import SvgOrthopedics from '../../icons/SvgOrthopedics';
import SvgEmergency from '../../icons/SvgEmergency';
import SvgPediatrics from '../../icons/SvgPediatrics';
import SvgGeneral from '../../icons/SvgGeneral';
import SvgCardiology from '../../icons/SvgCardiology';
import Carousel from '../../package/Carousal/Carousel';
import { AppDispatch, RootState } from '../../redux/store';
import { getUserMiddleWare } from '../ProfileModule/store/profileMiddleware';
import {
  doctorDetailsMiddleWare,
  doctorListMiddleWare,
} from '../DoctorModule/store/doctorMiddleware';
import {
  appoinmentDetailsMiddleWare,
  tokenGenerateMiddleWare,
} from '../AppointmentModule/store/appointmentMiddleware';
import AppointmentsCard from './AppointmentsCard';
import DoctorCard from './DoctorCard';
import HomeHeader from './HomeHeader';
import {
  departmentListMiddleware,
  todaysappointmentMiddleWare,
} from './store/homeMiddleware';
import { departmentData, doctorData } from './mock';

const styles = StyleSheet.create({
  overAll: {
    paddingVertical: 30,
  },
  appointmentFlatList: {
    paddingHorizontal: 20,
  },
  empty: {
    width: 50,
  },
});

export const getDepartmentType = (type?: string, size?: number) => {
  const getType = type?.toLowerCase();
  switch (getType) {
    case 'radiology':
      return (
        <SvgRadiology
          fill={size ? '#FFFFFF' : '#4FBF67'}
          opacity={size ? 1 : 0.1}
          height={size}
          width={size}
        />
      );
    case 'gynecology':
      return <SvgGynecology height={size} width={size} />;
    case 'dental':
      return <SvgDental height={size} width={size} />;
    case 'cardiology':
      return <SvgCardiology height={size} width={size} />;
    case 'neurology':
      return <SvgNeurology height={size} width={size} />;
    case 'intensive care':
      return <SvgIntensiveCare height={size} width={size} />;
    case 'surgery':
      return <SvgSurgery height={size} width={size} />;
    case 'pharmacy':
      return <SvgPharmacy height={size} width={size} />;
    case 'orthopedics':
      return <SvgOrthopedics height={size} width={size} />;
    case 'emergency':
      return <SvgEmergency height={size} width={size} />;
    case 'pediatrics':
      return <SvgPediatrics height={size} width={size} />;
    default:
      return (
        <SvgGeneral
          fill={size ? '#FFFFFF' : '#F7A594'}
          opacity={size ? 1 : 0.1}
          height={size}
          width={size}
        />
      );
  }
};
const HomeScreen = () => {
  const { height, width } = useSafeAreaFrame();
  const dispatch: AppDispatch = useDispatch();
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = React.useState(false);
  const insets = useSafeAreaInsets();

  const onRefresh = React.useCallback(() => {
    // setRefreshing(true);
    // dispatch(
    //   todaysappointmentMiddleWare({
    //     where: {
    //       appointmentDate: moment().startOf('day'),
    //     },
    //     order: 'appointmentDate',
    //     include: [
    //       'hospital',
    //       'patient',
    //       'doctor',
    //       'appointmentSchedule',
    //       'department',
    //     ],
    //   }),
    // ).then(() => {
    //   dispatch(departmentListMiddleware()).then(() => {
    //     dispatch(getUserMiddleWare()).then(res => {
    //       if (res.payload?.hospitalId) {
    //         dispatch(
    //           doctorListMiddleWare({
    //             where: {
    //               type: 'doctor',
    //               hospitalId: res.payload?.hospitalId,
    //             },
    //             include: [{relation: 'department'}],
    //           }),
    //         ).then(() => {
    //           setRefreshing(false);
    //         });
    //       }
    //     });
    //   });
    // });
  }, []);

  const handleDocorList = () => {
    navigation.navigate('BottomTab', {
      screen: 'HomeTab',
      params: {
        screen: 'DoctorListScreen',
        params: {
          type: 'All',
        },
      },
    });
  };

  const handleDoctorView = (val: string) => {
    navigation.navigate('BottomTab', {
      screen: 'HomeTab',
      params: {
        screen: 'DoctorListScreen',
        params: {
          type: val,
        },
      },
    });
  };

  const handleDoctorDetails = (id: string) => {
    dispatch(doctorDetailsMiddleWare({ doctorId: id })).then(res => {
      if (res?.payload) {
        navigation.navigate('BottomTab', {
          screen: 'HomeTab',
          params: {
            screen: 'DoctorDetailScreen',
            params: {
              id,
            },
          },
        });
      }
    });
  };

  const {
    isLoading,
    appointment,
    // departmentData,
    isDepartmentListLoading,
    isProfileLoading,
    doctorList,
    appoinmentDetailsLoading,
    doctorListLoader,
  } = useSelector(
    ({
      todaysAppointmentReducers,
      departmentListReducers,
      profileReducers,
      doctorListReducers,
      appoinmentDetailsReducers,
    }: RootState) => {
      return {
        isLoading: todaysAppointmentReducers.isLoading,
        appointment: todaysAppointmentReducers.appointment,
        isDepartmentListLoading: departmentListReducers.isLoading,
        departmentData: departmentListReducers.departmentList,
        isProfileLoading: profileReducers.isLoading,
        doctorList: doctorListReducers.data,
        doctorListLoader: doctorListReducers.isLoading,
        appoinmentDetailsLoading: appoinmentDetailsReducers.isLoading,
      };
    },
  );

  // useEffect(() => {
  //   dispatch(
  //     todaysappointmentMiddleWare({
  //       where: {
  //         appointmentDate: moment().startOf('day'),
  //       },
  //       order: 'appointmentDate',
  //       include: [
  //         'hospital',
  //         'patient',
  //         'doctor',
  //         'appointmentSchedule',
  //         'department',
  //       ],
  //     }),
  //   );
  //   dispatch(departmentListMiddleware());
  //   dispatch(getUserMiddleWare()).then(res => {
  //     if (res.payload?.hospitalId) {
  //       dispatch(
  //         doctorListMiddleWare({
  //           where: {
  //             type: 'doctor',
  //             hospitalId: res.payload?.hospitalId,
  //           },
  //           include: [{ relation: 'department' }],
  //         }),
  //       );
  //     }
  //   });
  // }, []);

  const dataList = [
    {
      url: 'https://i.ibb.co/znZQ134/Group-33843-1.png',
    },
    {
      url: 'https://i.ibb.co/znZQ134/Group-33843-1.png',
    },
    {
      url: 'https://i.ibb.co/znZQ134/Group-33843-1.png',
    },
  ];

  const handleAppointment = () => {
    navigation.navigate('BottomTab', {
      screen: 'AppointmentTab',
    });
  };

  const handleView = (id: string) => {
    navigation.navigate('BottomTab', {
      screen: 'AppointmentTab',
      params: { screen: 'AppointmentDetailsScreen' },
    });

  };

  const handleVideo = (e: string) => {
    dispatch(
      tokenGenerateMiddleWare({
        appointmentId: e
      }),
    ).then(response => {
      if (response.payload) {
        navigation.navigate('VideoCallScreen');
      }
    });
  };

  const getDepartmentType = (type?: string, size?: number) => {
    const getType = type?.toLowerCase();
    switch (getType) {
      case 'radiology':
        return (
          <SvgRadiology
            fill={size ? '#FFFFFF' : '#4FBF67'}
            opacity={size ? 1 : 0.1}
            height={size}
            width={size}
          />
        );
      case 'gynecology':
        return <SvgGynecology height={size} width={size} />;
      case 'dental':
        return <SvgDental height={size} width={size} />;
      case 'cardiology':
        return <SvgCardiology height={size} width={size} />;
      case 'neurology':
        return <SvgNeurology height={size} width={size} />;
      case 'intensive care':
        return <SvgIntensiveCare height={size} width={size} />;
      case 'surgery':
        return <SvgSurgery height={size} width={size} />;
      case 'pharmacy':
        return <SvgPharmacy height={size} width={size} />;
      case 'orthopedics':
        return <SvgOrthopedics height={size} width={size} />;
      case 'emergency':
        return <SvgEmergency height={size} width={size} />;
      case 'pediatrics':
        return <SvgPediatrics height={size} width={size} />;
      default:
        return (
          <SvgGeneral
            fill={size ? '#FFFFFF' : '#F7A594'}
            opacity={size ? 1 : 0.1}
            height={size}
            width={size}
          />
        );
    }
  };

  const scrollHeight = IS_ANDROID
    ? insets.top + insets.bottom + 134
    : insets.top + insets.bottom + 125;

  if (
    !refreshing &&
    (isLoading ||
      isDepartmentListLoading ||
      isProfileLoading ||
      doctorListLoader)
  ) {
    return <Loader />;
  }

  return (
    <>
      {/* {appoinmentDetailsLoading && <Loader />} */}
      <CustomStatusBar />
      <Flex overrideStyle={styles.overAll}>
        <HomeHeader />
        <ScrollView
          nestedScrollEnabled
          style={{ height: height - scrollHeight }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <Flex>
            <TitleWithViewAll
              title="Today’s Appointments"
              hanldeView={handleAppointment}
            />
            <SwiperFlatList
              data={appointment}
              renderItem={({ item }) => (
                <AppointmentsCard
                  items={item}
                  handleView={handleView}
                  handleVideo={handleVideo}
                />
              )}
              keyExtractor={(_item, index) => index.toString()}
              ListEmptyComponent={() => (
                <Flex
                  center
                  middle
                  overrideStyle={{
                    marginTop: 20,
                    width,
                  }}>
                  <Text color="gray" type="heading500">
                    No Appointments Today
                  </Text>
                </Flex>
              )}
            />

            <Carousel data={dataList} />

            <TitleWithViewAll
              marginTop={0}
              title="Filter Doctors by Specialty"
              hanldeView={handleDocorList}
              viewTitle="See All"
            />
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              style={[styles.appointmentFlatList]}
              data={departmentData}
              keyExtractor={(_item, index) => index.toString()}
              renderItem={({ item }) => {
                return (
                  <IconRoundBackground
                    icon={getDepartmentType(item?.name)}
                    name={item?.name}
                    onClick={() => handleDoctorView(item?.name)}
                  />
                );
              }}
              ListFooterComponent={<View style={styles.empty} />}
            />

            <TitleWithViewAll
              marginTop={16}
              title="Doctors"
              viewTitle="See All"
              hanldeView={handleDocorList}
            />
            <FlatList
              showsHorizontalScrollIndicator={false}
              style={[styles.appointmentFlatList, { marginBottom: 50 }]}
              horizontal
              data={doctorData}
              keyExtractor={(_item, index) => index.toString()}
              renderItem={({ item }) => {
                return (
                  <DoctorCard
                    onClick={() => handleDoctorDetails(item?.name)}
                    image={item?.profileImageUrl}
                    icon={getDepartmentType(item?.department?.name, 26)}
                    doctorName={item?.name}
                    doctorType={item?.department?.name}
                  />
                );
              }}
              ListFooterComponent={<View style={styles.empty} />}
            />
          </Flex>
        </ScrollView>
        {/* <AppointmentAlert
          label="Upcoming Appointment at 09:15 AM (Today)"
          icon={<SvgCalender />}
        /> */}
      </Flex>
    </>
  );
};

export default HomeScreen;

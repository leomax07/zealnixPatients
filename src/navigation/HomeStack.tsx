import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Colors} from 'squashapps-react-native-uikit';
import DoctorDetailScreen from '../modules/DoctorModule/DoctorDetailScreen';
import DoctorListScreen from '../modules/DoctorModule/DoctorListScreen';
import NewAppointmentScreen from '../modules/DoctorModule/NewAppointmentScreen';
import HomeScreen from '../modules/HomeModule/HomeScreen';
import InformationScreen from '../modules/HomeModule/InformationScreen';
import Header from './Header';
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {backgroundColor: Colors.WHITE},
      }}
      initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        options={{
          headerShown: false,
        }}
        component={HomeScreen}
      />
      <Stack.Screen
        options={{
          header: props => Header({props}),
          title: 'Information',
        }}
        name="InfoScreen"
        component={InformationScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="DoctorListScreen"
        component={DoctorListScreen}
      />
      <Stack.Screen
        options={{
          header: props => Header({props}),
          title: 'New Appointment',
        }}
        name="DoctorDetailScreen"
        component={DoctorDetailScreen}
      />
      <Stack.Screen
        options={{
          header: props => Header({props}),
          title: 'New Appointment',
        }}
        name="NewAppointmentScreen"
        component={NewAppointmentScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;

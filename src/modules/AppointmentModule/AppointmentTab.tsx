import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {tabStyles, containerStyle, labelStyle} from '../MessageModule/tabStyle';
import UpcomingTab from './UpcomingTab';
import {AppDispatch} from '../../redux/store';
import {useDispatch} from 'react-redux';
import moment from 'moment';
import {getCurentMini} from '../../utils/helpers';
import HistoryTab from './HistoryTab';
import {
  appoinmentsListHistoryMiddleWare,
  appoinmentsListMiddleWare,
} from './store/appointmentMiddleware';

const Tab = createMaterialTopTabNavigator();

const AppointmentTab = () => {
  const dispatch: AppDispatch = useDispatch();

  const handleUpcoming = () => {
    dispatch(
      appoinmentsListMiddleWare({
        where: {
          'appointmentSchedule.appointmentRangeStart': {
            $gte: getCurentMini(),
          },
          appointmentDate: {$gte: moment().startOf('day')},
        },
        include: ['hospital', 'patient', 'doctor', 'appointmentSchedule'],
      }),
    );
  };

  const handleHistory = () => {
    dispatch(
      appoinmentsListHistoryMiddleWare({
        where: {
          'appointmentSchedule.appointmentRangeStart': {
            $lt: getCurentMini(),
          },
          appointmentDate: {$lte: moment().startOf('day')},
        },
        include: ['hospital', 'patient', 'doctor', 'appointmentSchedule'],
      }),
    );
  };

  return (
    <Tab.Navigator
      initialRouteName="Upcoming"
      screenOptions={tabStyles}
      sceneContainerStyle={containerStyle}>
      <Tab.Screen
        listeners={() => ({
          tabPress: handleUpcoming,
        })}
        name="Upcoming"
        options={{
          swipeEnabled: false,
          tabBarLabelStyle: labelStyle,
        }}
        component={UpcomingTab}
      />
      <Tab.Screen
        listeners={() => ({
          tabPress: handleHistory,
        })}
        name="History"
        options={{
          swipeEnabled: false,
          tabBarLabelStyle: labelStyle,
        }}
        component={HistoryTab}
      />
    </Tab.Navigator>
  );
};

export default AppointmentTab;

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Colors} from 'squashapps-react-native-uikit';
import ReelsScreen from '../modules/ReelsModule/ReelsScreen';
import {RootStackParamList} from './types';
import ReelsProfileScreen from '../modules/ReelsModule/ReelsProfileScreen';
import Header from './Header';

const Stack = createNativeStackNavigator<RootStackParamList>();

const ReelsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {backgroundColor: Colors.WHITE},
      }}
      initialRouteName="ReelsScreen">
      <Stack.Screen
        options={{headerShown: false}}
        name="ReelsScreen"
        component={ReelsScreen}
      />

      <Stack.Screen
        options={{
          header: props => Header({props}),
          title: 'Profile',
        }}
        name="ReelsProfileScreen"
        component={ReelsProfileScreen}
      />
    </Stack.Navigator>
  );
};

export default ReelsStack;

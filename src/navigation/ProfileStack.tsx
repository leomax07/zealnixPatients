import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Colors } from 'squashapps-react-native-uikit';
import OrderListScreen from '../modules/ProfileModule/OrderListScreen';
import ProfileScreen from '../modules/ProfileModule/ProfileScreen';
import TopUpScreen from '../modules/ProfileModule/TopUpScreen';
import WalletScreen from '../modules/ProfileModule/WalletScreen';
import Header from './Header';
import { RootStackParamList } from './types';
import OrderDetailScreen from '../modules/ProfileModule/OrderDetailScreen';
import EditProfileScreen from '../modules/ProfileModule/EditProfileScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: Colors.WHITE },
      }}
      initialRouteName="ProfileScreen">
      <Stack.Screen
        options={{ headerShown: false }}
        name="ProfileScreen"
        component={ProfileScreen}
      />
      <Stack.Screen
        options={{
          header: props => Header({ props }),
          title: 'Wallet Card',
        }}
        name="WalletScreen"
        component={WalletScreen}
      />
      <Stack.Screen
        options={{
          header: props => Header({ props }),
          title: 'Profile',
        }}
        name="EditProfileScreen"
        component={EditProfileScreen}
      />
      <Stack.Screen
        options={{
          header: props => Header({ props }),
          title: 'Top up',
        }}
        name="TopUpScreen"
        component={TopUpScreen}
      />
      <Stack.Screen
        options={{
          header: props => Header({ props }),
          title: 'Orders',
        }}
        name="OrderListScreen"
        component={OrderListScreen}
      />
      <Stack.Screen
        options={{
          header: props => Header({ props }),
          title: `OrderId:`,
        }}
        name="orderDetailScreen"
        component={OrderDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;

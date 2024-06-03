import React from 'react';
import {useNetInfo} from '@react-native-community/netinfo';
import {Text} from 'react-native';
import MainNavigator from './MainNavigator';

const AppLayout = () => {
  const netInfo = useNetInfo();

  if (netInfo.isConnected === true || netInfo.isConnected === null) {
    return <MainNavigator />;
  }

  return <Text>OfflineScreen</Text>;
};

export default AppLayout;

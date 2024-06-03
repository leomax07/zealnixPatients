import React, {useEffect, useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Logger, {startNetworkLogging} from 'react-native-network-logger';
import Config from 'react-native-config';
import {Platform, TouchableOpacity} from 'react-native';
import {Text} from 'squashapps-react-native-uikit';
import AppLayout from './src/navigation/AppLayout';
import AppProvider from './src/navigation/AppProvider';
import {
  requestUserPermission,
  useNotifee,
} from './src/utils/notificationService';
import CustomStatusBar from './src/common/CustomStatusBar';

const checkDev = Config.REACT_APP_ENV !== 'development';

const App = () => {
  const [showLogger, setShowLogger] = useState(false);
  const handleToggleLogger = () => setShowLogger(!showLogger);

  useNotifee();
  useEffect(() => {
    if (checkDev) {
      startNetworkLogging();
    }
    requestUserPermission();
  }, []);

  if (checkDev) {
    return (
      <SafeAreaProvider>
        <AppProvider>
          {Platform.OS === 'ios' && <CustomStatusBar />}
          <TouchableOpacity onPress={handleToggleLogger}>
            <Text
              color={'link'}
              overrideStyle={{
                fontSize: 16,
                paddingHorizontal: 20,
                paddingVertical: 5,
              }}>
              {showLogger ? 'Hide Logger' : 'Show Logger'}
            </Text>
          </TouchableOpacity>
          {showLogger ? <Logger /> : <AppLayout />}
        </AppProvider>
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider>
      <AppProvider>
        <AppLayout />
      </AppProvider>
    </SafeAreaProvider>
  );
};

export default App;
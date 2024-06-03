import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'squashapps-react-native-uikit';
import React, {ReactNode} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import store from '../redux/store';
import {APP_THEME} from '../utils/constants';

type Props = {
  children: ReactNode;
};
export const navigationRef: any = React.createRef();

const AppProvider = ({children}: Props) => {
  const insets = useSafeAreaInsets();

  return (
    <ThemeProvider
      theme={APP_THEME}
      insets={{top: insets.top, bottom: insets.bottom}}>
      <Provider store={store}>
        <NavigationContainer ref={navigationRef}>
          {children}
        </NavigationContainer>
      </Provider>
    </ThemeProvider>
  );
};

export default AppProvider;

import * as React from 'react';
import {Flex, StyleSheet} from 'squashapps-react-native-uikit';
import CustomStatusBar from '../../common/CustomStatusBar';
// import LogoHeader from '../../common/LogoHeader';
import ConfirmationMainScreen from './ConfirmationMainScreen';

const styles = StyleSheet.create({
  overAll: {
    backgroundColor: '#fff'
  },

});

const MessageConfirmationScreen = () => {
  return (
    <>
      <CustomStatusBar />
      <Flex flex={1} overrideStyle={styles.overAll}>
        <ConfirmationMainScreen />
      </Flex>
    </>
  );
};

export default MessageConfirmationScreen;
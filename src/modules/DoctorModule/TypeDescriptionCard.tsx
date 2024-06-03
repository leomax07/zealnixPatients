import React from 'react';
import {
  Card,
  Colors,
  Flex,
  getColors,
  StyleSheet,
  Text,
} from 'squashapps-react-native-uikit';
import {APP_THEME} from '../../utils/constants';

type Props = {
  type: string;
};
const {PRIMARY_COLOR_50} = getColors(APP_THEME);
const styles = StyleSheet.create({
  overAll: {
    marginVertical: 20,
  },
  feeContainer: {
    padding: 16,
  },
  premiumContainer: {
    backgroundColor: Colors.INPROGRESS_50,
  },
  regularContainer: {
    backgroundColor: PRIMARY_COLOR_50,
  },
  videoContainer: {
    backgroundColor: '#ecf7e9',
  },
});
const TypeDescriptionCard = ({type}: Props) => {

  const isRegular = type === 'regular';
  const isPremium = type === 'emergency';
  const isVideo = type === 'video';
  return (
    <Flex overrideStyle={styles.overAll}>
      {isRegular && (
        <Card overrideStyle={[styles.feeContainer, styles.regularContainer]}>
          <Text size={14}>
            <Text color="link" type="heading400">
              In Person Regular
            </Text>
            - You’ll alloted a token number in regular queue system at the
            Hospital.
          </Text>
        </Card>
      )}
      {isPremium && (
        <Card overrideStyle={[styles.feeContainer, styles.premiumContainer]}>
          <Text size={14}>
            <Text color="yellow" type="heading400">
              Emergency{' '}
            </Text>
            - Zero Waiting Time. Appear and consult the Doctor right away.
          </Text>
        </Card>
      )}
      {isVideo && (
        <Card overrideStyle={[styles.feeContainer, styles.videoContainer]}>
          <Text size={14}>
            <Text color="success" type="heading400">
              Video Call
            </Text>
            - Consult the Doctor via a Video Call.
          </Text>
        </Card>
      )}
    </Flex>
  );
};
export default TypeDescriptionCard;

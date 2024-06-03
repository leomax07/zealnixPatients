import React, {ReactChild} from 'react';
import {
  Flex,
  StyleSheet,
  Text,
  getColors,
  Icons,
} from 'squashapps-react-native-uikit';

import {APP_THEME} from '../utils/constants';

const {SvgArrowRight} = Icons;
const {PRIMARY_COLOR_500, WHITE} = getColors(APP_THEME);

const styles = StyleSheet.create({
  overAll: {
    backgroundColor: PRIMARY_COLOR_500,
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  labelStyle: {
    paddingHorizontal: 8,
    width: '90%',
  },
});

type Props = {
  label: string;
  icon: ReactChild;
};

const AppointmentAlert = ({label, icon}: Props) => {
  return (
    <Flex row between center overrideStyle={styles.overAll}>
      <Flex row center>
        {icon}
        <Text
          size={12}
          numberOfLines={1}
          ellipsizeMode="tail"
          overrideStyle={styles.labelStyle}
          color="white"
          bold>
          {label}
        </Text>
      </Flex>
      <SvgArrowRight fill={WHITE} />
    </Flex>
  );
};

export default AppointmentAlert;

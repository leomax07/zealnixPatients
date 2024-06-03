import React from 'react';
import {Flex, StyleSheet, Text} from 'squashapps-react-native-uikit';
import SvgFrame from '../../icons/SvgFrame';

const styles = StyleSheet.create({
  overAll: {
    paddingHorizontal: 32,
  },
  paragraph: {
    marginTop: 20,
  },
});
const InformationScreen = () => {
  return (
    <Flex>
      <SvgFrame />
      <Flex overrideStyle={styles.overAll}>
        <Text type="heading500">Get Vaccinated!</Text>
        <Text type="body200" overrideStyle={styles.paragraph}>
          Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
          esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
          Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate
          aute id deserunt nisi.
        </Text>
      </Flex>
    </Flex>
  );
};
export default InformationScreen;

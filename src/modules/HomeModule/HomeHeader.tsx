import React from 'react';
import {useSelector} from 'react-redux';
import {Flex, Icons, StyleSheet, Text} from 'squashapps-react-native-uikit';
import {RootState} from '../../redux/store';

const {SvgArrowDown, SvgBell} = Icons;
const styles = StyleSheet.create({
  heading400: {
    marginTop: 10,
  },
  overAll: {
    paddingHorizontal: 20,
  },
});
const HomeHeader = () => {
  const {data} = useSelector(({profileReducers}: RootState) => {
    return {
      data: profileReducers.data,
    };
  });

  return (
    <Flex row center between overrideStyle={styles.overAll}>
      <Flex>
        <Text transform="capitalize" type="heading600">
          Hi, {data.name}
        </Text>
        <Flex row center overrideStyle={styles.heading400}>
          <Text type="heading400" color="gray">
            {data?.branch?.name}
            {'  '}
          </Text>
          <SvgArrowDown />
        </Flex>
      </Flex>
      {/* <SvgBell /> */}
    </Flex>
  );
};

export default HomeHeader;

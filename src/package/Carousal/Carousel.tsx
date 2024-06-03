/* eslint-disable */
import {
  View,
  Dimensions,
  TouchableOpacity,
  Animated,
  StyleSheet,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import React, {useRef, useState} from 'react';

import {APP_THEME} from '../../utils/constants';
import {getColors, Flex, Image} from 'squashapps-react-native-uikit';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  containerList: {
    marginHorizontal:20
  },
  dotStyle: {
    width: 6,
    height: 6,
    borderRadius: 10,
    marginLeft: 4,
  },
});

const defaultProps = {
  containerHeight: 150,
};

type Props = {
  containerHeight?: number | string;
  data: {
    url: string;
  }[];
};

const Carousel = ({containerHeight, data}: Props) => {
  const {PRIMARY_COLOR_500, TEXT_GREY_500} = getColors(APP_THEME);
  const ref = useRef<any>();
  const [currentIndex, setCurrentIndex] = useState<any>(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const index = Math.floor(contentOffset.x / width);
    setCurrentIndex(index);
  };

  return (
    <Flex>
      <Animated.FlatList
        ref={ref}
        data={data}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={handleScroll}
        horizontal
        renderItem={({item}) => {
          return (
            <Animated.View
              style={{
                width,
                height: containerHeight,
              }}>
              <TouchableOpacity disabled={true} style={styles.containerList}>
                <Image
                  resizeMode="contain"
                  src={item?.url}
                  width="100%"
                  height="100%"
                />
              </TouchableOpacity>
            </Animated.View>
          );
        }}
      />
      <Flex
        row
        center
        middle
        overrideStyle={{
          position: 'relative',
          bottom: 20,
        }}>
        {data.map((_item, index) => {
          return (
            <View
              style={[
                {
                  backgroundColor:
                    currentIndex === index ? PRIMARY_COLOR_500 : TEXT_GREY_500,
                },
                styles.dotStyle,
              ]}
            />
          );
        })}
      </Flex>
    </Flex>
  );
};

Carousel.defaultProps = defaultProps;

export default Carousel;

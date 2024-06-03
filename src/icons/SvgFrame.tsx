/* eslint max-len: ["error", { "code": 4000 }] */
import React from 'react';
import {View} from 'react-native';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';
import {
  Card,
  Flex,
  Image,
  StyleSheet,
  Text,
} from 'squashapps-react-native-uikit';

const defaultProps: DefaultPropsTypes = {
  fill: '#F2FAFF',
  width: 320,
  height: 90,
  title: 'Get Vaccinated!',
  value: 'Nearest vaccination center',
};
type DefaultPropsTypes = {
  fill?: string;
  width?: number;
  height?: number;
  title?: string;
  value?: string;
};
type Props = {
  fill?: string;
  width?: number;
  height?: number;
  title?: string;
  value?: string;
  onClick?: () => void;
} & typeof defaultProps;

const styles = StyleSheet.create({
  valueText: {
    marginTop: 12,
  },
  overAll: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    marginVertical: 24,
    marginHorizontal: 28,
  },
  subValue: {
    marginLeft: 8,
  },
  videoConatiner: {
    marginRight: 20,
  },
  textContainer: {
    marginVertical: 16,
  },
  svgImageContainer: {
    position: 'absolute',
    right: -15,
    top: 10,
    zIndex: 11,
  },
  positionRelative: {
    position: 'relative',
  },
  imgContainer: {
    position: 'relative',
    left: 0,
    bottom: 8,
  },
});
const SvgFrame = ({fill, width, height, title, value, onClick}: Props) => (
  <Card
    align="center"
    onClick={onClick}
    overrideStyle={[styles.overAll, {backgroundColor: fill, height, width}]}>
    <Flex row>
      <Flex column bottom overrideStyle={styles.textContainer}>
        <Text type="heading500">{title}</Text>
        <Text type="body300" overrideStyle={styles.valueText}>
          {value}
        </Text>
      </Flex>
      <Flex row end>
        <View style={styles.positionRelative}>
          <View style={styles.svgImageContainer}>
            <Svg width={168} height={64} fill="none" viewBox="0 0 168 64">
              <Path
                d="M95.837 74c-2.252 0-7.697-.832-10.888-8.875l-10.7-26.624c-1.503-3.79-6.853-7.303-10.89-7.303l-56.319.184c-3.849 0-7.04-3.05-7.04-6.933 0-3.79 3.098-6.934 7.04-6.934l56.32-.184h.093c9.856 0 20.37 7.026 24.03 16.085l8.542 21.263 19.337-48.257c2.909-7.21 8.072-8.228 10.231-8.413 2.159-.092 7.415.37 11.076 7.211l9.762 18.212c1.69 3.143 6.759 6.194 10.419 6.194h38.11c3.849 0 7.04 3.143 7.04 6.933s-3.191 6.934-7.04 6.934h-38.11c-8.917 0-18.679-5.824-22.809-13.59l-7.322-13.682-19.712 48.904c-3.473 7.95-9.01 8.875-11.17 8.875Z"
                fill="url(#vector_svg__a)"
                fillOpacity={0.08}
              />
              <Defs>
                <LinearGradient
                  id="vector_svg__a"
                  x1={81}
                  y1={31.5}
                  x2={174.008}
                  y2={42.433}
                  gradientUnits="userSpaceOnUse">
                  <Stop stopColor="#09F" />
                  <Stop offset={1} stopColor="#09F" stopOpacity={0} />
                </LinearGradient>
              </Defs>
            </Svg>
          </View>
          <View style={styles.imgContainer}>
            <Image
              height={100}
              width={98}
              src="https://i.ibb.co/wzsNxf8/amp02-1.png"
            />
          </View>
        </View>
      </Flex>
    </Flex>
  </Card>
);

SvgFrame.defaultProps = defaultProps;

export default SvgFrame;

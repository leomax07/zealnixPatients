/* eslint max-len: ["error", { "code": 4000 }] */
import React from 'react';
import {Svg, Path, Defs, LinearGradient, Stop} from 'react-native-svg';

const defaultProps = {
  fill: '#fff',
  width: 315,
  height: 93,
};

const SvgWalletFrame = ({fill, width, height}: typeof defaultProps) => (
  <Svg width={width} height={height} fill="none" viewBox="0 0 315 93">
    <Path
      d="M135.763 143c-4.25 0-14.518-1.565-20.538-16.699L95.042 76.205c-2.832-7.131-12.924-13.741-20.537-13.741l-106.227.348C-38.98 62.812-45 57.072-45 49.766c0-7.132 5.843-13.046 13.278-13.046l106.227-.348h.177c18.59 0 38.419 13.22 45.324 30.266l16.111 40.008 36.471-90.8C178.076 2.28 187.814.367 191.886.019c4.072-.174 13.986.695 20.891 13.567l18.413 34.267c3.186 5.915 12.747 11.655 19.652 11.655h71.88c7.258 0 13.278 5.914 13.278 13.045 0 7.132-6.02 13.046-13.278 13.046h-71.88c-16.82 0-35.232-10.958-43.022-25.57l-13.81-25.743-37.179 92.016C150.28 141.261 139.835 143 135.763 143Z"
      fill="url(#vector_svg__a)"
      fillOpacity={0.08}
    />
    <Defs>
      <LinearGradient
        id="vector_svg__a"
        x1={-11}
        y1={52}
        x2={230.002}
        y2={85.988}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor={fill} stopOpacity={0} />
        <Stop offset={1} stopColor={fill} />
      </LinearGradient>
    </Defs>
  </Svg>
);
SvgWalletFrame.defaultProps = defaultProps;

export default SvgWalletFrame;

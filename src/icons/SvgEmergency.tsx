/* eslint max-len: ["error", { "code": 4000 }] */

import React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

const defaultProps = {
  width: 80,
  height: 80,
};

const SvgEmergency = ({width, height}: typeof defaultProps) => (
  <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
    <Circle cx={40} cy={40} r={40} fill="#FFEDED" />
    <Path
      fill="#DD2025"
      d="m53.186 37.845-3-5.19-7.185 4.155V28.5h-6v8.31l-7.185-4.155-3 5.19L34.001 42l-7.185 4.155 3 5.19 7.185-4.155v8.31h6v-8.31l7.185 4.155 3-5.19L46.001 42l7.185-4.155Z"
    />
  </Svg>
);

SvgEmergency.defaultProps = defaultProps;

export default SvgEmergency;

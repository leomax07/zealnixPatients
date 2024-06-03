/* eslint max-len: ["error", { "code": 4000 }] */

import React from 'react';
import Svg, {Path, G, Circle, Defs} from 'react-native-svg';

const defaultProps = {
  width: 80,
  height: 80,
};

const SvgDental = ({width, height}: typeof defaultProps) => (
  <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
    <Circle cx={40} cy={40} r={40} fill="#F4EAFB" />
    <G filter="url(#Group_33898_svg__a)">
      <Path
        fill="#BA58FE"
        fillRule="evenodd"
        d="M37.595 28.348c-3.434-1.933-6.476-1.024-9.004 2.046-2.44 2.963-.777 8.303.42 12.142.285.916.543 1.746.713 2.438.883 3.595 1.728 5.835 3.655 7.456.954.803 2.036-.577 3.177-2.032.99-1.262 2.024-2.581 3.059-2.585 1.017-.003 2.035 1.314 3.011 2.577 1.126 1.457 2.197 2.841 3.146 2.04 1.471-1.243 2.14-2.155 2.948-4.715.882-2.793 2.306-6.132 3.438-9.98.796-2.709.891-5.466-1.404-8.127-3.277-3.8-7.82-1.838-9.933-.58l2.864 2.454a.792.792 0 1 1-1.03 1.202l-5.06-4.336Z"
        clipRule="evenodd"
      />
    </G>
    <Defs />
  </Svg>
);

SvgDental.defaultProps = defaultProps;

export default SvgDental;

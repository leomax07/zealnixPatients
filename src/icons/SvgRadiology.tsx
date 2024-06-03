/* eslint max-len: ["error", { "code": 4000 }] */

import React from 'react';
import Svg, {Path, G, Circle, Defs} from 'react-native-svg';

const defaultProps = {
  width: 80,
  height: 80,
  fill: '#4FBF67',
  opacity: 0.1,
};

const SvgRadiology = ({width, height, fill, opacity}: typeof defaultProps) => (
  <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
    <Circle cx={40} cy={40} r={40} fill={'#4FBF67'} opacity={opacity} />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M23 40c0 3.942 1.342 7.571 3.594 10.455l-1.263 2.989C24.217 56.08 26.153 59 29.016 59h21.968c2.863 0 4.799-2.92 3.685-5.556l-1.263-2.99A16.927 16.927 0 0 0 57 40c0-9.389-7.611-17-17-17s-17 7.611-17 17Zm22 9 1.6 8h4.384a2 2 0 0 0 1.843-2.778L48.1 43.032a2 2 0 0 0-1.843-1.222h-1.621a5.988 5.988 0 0 0 1.086-2h.535c.805 0 1.57.24 2.212.667a8.526 8.526 0 1 0-16.843-.061 3.995 3.995 0 0 1 2.117-.606h.535a5.988 5.988 0 0 0 1.086 2h-1.621a2 2 0 0 0-1.842 1.221l-4.727 11.19A2 2 0 0 0 29.016 57H33.4l1.6-8h-.586l-1.991 5.974a1.5 1.5 0 1 1-2.846-.948l2.544-7.633A3.5 3.5 0 0 1 35.441 44h9.117a3.5 3.5 0 0 1 3.32 2.393l2.545 7.633a1.5 1.5 0 1 1-2.846.948L45.586 49H45Zm-9.184-20.33a11.263 11.263 0 0 1 8.62.06l.778-1.842a13.265 13.265 0 0 0-10.15-.072l.752 1.853Z"
      clipRule="evenodd"
    />
  </Svg>
);

SvgRadiology.defaultProps = defaultProps;

export default SvgRadiology;

/* eslint max-len: ["error", { "code": 4000 }] */
import * as React from 'react';
import Svg, {G, Path, Defs} from 'react-native-svg';

/* SVGR has dropped some elements not supported by react-native-svg: filter */
const defaultProps = {
  fill: '#171721',
  width: 100,
  height: 174,
};
const SvgTriangleBackground = ({fill, width, height}: typeof defaultProps) => (
  <Svg width={width} height={height} fill="none" viewBox="0 0 100 174">
    <G opacity={0.061} filter="url(#vector_svg__a)">
      <Path
        d="M0 10.042C0 2.827 7.408-2.014 14.016.884l74.82 32.806c9.854 4.322 13.266 16.595 7.055 25.382L18.166 169.037C12.536 177.002 0 173.018 0 163.265V10.042Z"
        fill={fill}
      />
    </G>
    <Defs />
  </Svg>
);
SvgTriangleBackground.defaultProps = defaultProps;

export default SvgTriangleBackground;

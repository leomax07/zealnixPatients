/* eslint max-len: ["error", { "code": 4000 }] */

import React from 'react';
import Svg, {Path, Circle, G} from 'react-native-svg';

const defaultProps = {
  width: 80,
  height: 80,
};

const SvgIntensiveCare = ({width, height}: typeof defaultProps) => (
  <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
    <Circle cx={40} cy={40} r={40} fill="#FAFBFF" />
    <G filter="url(#Group_33896_(3)_svg__a)">
      <Path
        fill="#2759CD"
        fillRule="evenodd"
        d="M44.64 30.88a2.666 2.666 0 0 1-1.381-2.337v-.988h1.777v.988a.889.889 0 0 0 .89.889h3.555a1.778 1.778 0 0 1 1.778 1.778v8.622a2.748 2.748 0 0 1 1.185 2.266c0 1.497-1.19 2.714-2.667 2.742v1.877h2.667v1.778h-1.93a2.42 2.42 0 1 1-3.748 0H33.232a2.419 2.419 0 1 1-3.748 0h-1.93v-1.778h1.779v-7.469l-.28-.28a2.788 2.788 0 0 1 0-3.925 2.73 2.73 0 0 1 2.465-.76l.573-.573a2.806 2.806 0 0 1 3.966.002l1.244 1.244a2.804 2.804 0 0 1 0 3.967l-.256.255.114.115c.04.04.094.063.151.063h12.17v-8.147H46.42v.494h.296a.889.889 0 0 1 .889.889v3.753a.889.889 0 0 1-.89.889h-2.368a.889.889 0 0 1-.89-.89v-3.752a.889.889 0 0 1 .89-.889h.296v-.823h-.001Zm-8.848 7.036.252-.252a1.027 1.027 0 0 0 0-1.452l-1.245-1.244a1.028 1.028 0 0 0-1.451 0l-.243.242 2.687 2.706Zm-1.133 6.693a.775.775 0 0 0 .55.231H48v1.875H31.11v-5.678l3.549 3.573v-.001Z"
        clipRule="evenodd"
      />
    </G>
    <Path
      fill="#2759CD"
      fillRule="evenodd"
      d="M26.667 24A2.667 2.667 0 0 0 24 26.667v26.666A2.667 2.667 0 0 0 26.667 56h26.666A2.667 2.667 0 0 0 56 53.333V26.667A2.667 2.667 0 0 0 53.333 24H26.667Zm27.555 2.667a.889.889 0 0 0-.889-.89H26.667a.889.889 0 0 0-.89.89v26.666a.889.889 0 0 0 .89.89h26.666a.889.889 0 0 0 .89-.89V26.667Z"
      clipRule="evenodd"
    />
  </Svg>
);

SvgIntensiveCare.defaultProps = defaultProps;

export default SvgIntensiveCare;

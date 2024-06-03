/* eslint max-len: ["error", { "code": 4000 }] */

import React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

const defaultProps = {
  width: 80,
  height: 80,
  opacity: 0.1,
  fill: '#F7A594',
};

const SvgGeneral = ({width, height, opacity, fill}: typeof defaultProps) => (
  <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
    <Circle cx={40} cy={40} r={40} fill="#F7A594" opacity={opacity} />
    <Path
      fill={fill}
      d="M55.75 43.375a5.625 5.625 0 1 0-7.403 5.335 3.937 3.937 0 0 1-3.847 3.102h-3.375a3.937 3.937 0 0 1-3.938-3.937v-5.217c4.463-.813 7.876-4.794 7.876-9.525v-5.508a2.811 2.811 0 0 0-2.813-2.813H40a1.687 1.687 0 1 0 0 3.375h1.688v4.946c0 3.431-2.739 6.26-6.105 6.304a6.186 6.186 0 0 1-6.27-6.187v-5.063H31a1.687 1.687 0 1 0 0-3.375h-2.25a2.812 2.812 0 0 0-2.813 2.813v5.625a9.563 9.563 0 0 0 7.875 9.412v5.213a7.321 7.321 0 0 0 7.313 7.313H44.5a7.32 7.32 0 0 0 7.258-6.43 5.636 5.636 0 0 0 3.992-5.383Zm-5.625 2.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Z"
    />
  </Svg>
);

SvgGeneral.defaultProps = defaultProps;

export default SvgGeneral;

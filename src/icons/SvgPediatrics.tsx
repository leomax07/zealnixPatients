/* eslint max-len: ["error", { "code": 4000 }] */

import React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

const defaultProps = {
  width: 80,
  height: 80,
};

const SvgPediatrics = ({width, height}: typeof defaultProps) => (
  <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
    <Circle cx={40} cy={40} r={40} fill="#F2FFF7" />
    <Path
      fill="#22C55E"
      d="M33.665 32.208c-.413 0-.76-.14-1.04-.42-.28-.28-.419-.626-.418-1.038 0-.413.14-.76.42-1.04.28-.28.626-.42 1.038-.418h4.375v-2.917c0-.413.14-.76.42-1.04.28-.28.627-.42 1.039-.418.413 0 .76.14 1.04.42.28.28.419.626.418 1.038v2.917h4.375c.413 0 .76.14 1.04.42.28.28.42.626.418 1.038 0 .413-.14.76-.42 1.04-.28.28-.626.42-1.038.418H33.665Zm1.459 21.875a2.81 2.81 0 0 1-2.06-.857 2.803 2.803 0 0 1-.857-2.06V48.25h5.833c.414 0 .76-.14 1.04-.42.28-.28.42-.626.419-1.038 0-.413-.14-.76-.42-1.04-.28-.28-.626-.42-1.039-.419h-5.833v-2.916h5.833c.414 0 .76-.14 1.04-.42.28-.28.42-.626.419-1.039 0-.413-.14-.76-.42-1.04-.28-.28-.626-.419-1.039-.418h-5.833v-1.458c0-1.216.425-2.249 1.276-3.1.85-.85 1.884-1.275 3.099-1.275h5.833c1.216 0 2.249.425 3.1 1.276.85.85 1.275 1.883 1.275 3.099v13.125a2.81 2.81 0 0 1-.857 2.06 2.803 2.803 0 0 1-2.06.856h-8.75Z"
    />
  </Svg>
);

SvgPediatrics.defaultProps = defaultProps;

export default SvgPediatrics;

/* eslint max-len: ["error", { "code": 4000 }] */

import React from 'react';
import Svg, {Path, G, Circle, Defs} from 'react-native-svg';

const defaultProps = {
  width: 80,
  height: 80,
};

const SvgCardiology = ({width, height}: typeof defaultProps) => (
  <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
    <Circle cx={40} cy={40} r={40} fill="#FFE6EA" />
    <G filter="url(#Group_33896_svg__a)">
      <Path
        fill="#D80027"
        d="M28.125 37.069c0-4.533 3.018-8.736 7.15-8.736 2.867 0 4.995 1.886 6.308 4.561 1.314-2.675 3.441-4.56 6.309-4.56 4.133 0 7.15 4.203 7.15 8.735 0 9.701-13.459 16.598-13.459 16.598s-9.065-4.365-12.316-11.523h8.03l1.276-2.27 1.49 5.218 3.49-4.488h4.364v-1.583h-5.138l-2.05 2.637-1.676-5.866-2.683 4.768h-7.707c.168.542.371 1.07.604 1.584H25.75V40.56h2.913a11.752 11.752 0 0 1-.538-3.491Z"
      />
    </G>
    <Defs />
  </Svg>
);

SvgCardiology.defaultProps = defaultProps;

export default SvgCardiology;

import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const defaultProps = {
  width: 30,
  height: 30,
  fill: '#fff',
};

const SvgPencilRound = ({width, height, fill}: typeof defaultProps) => (
  <Svg width={width} height={height} fill="none">
    <Circle cx={15} cy={15} r={15} fill="#36F" />
    <Path
      d="M9 18.5V21h2.5l7.373-7.373-2.5-2.5L9 18.5Zm12.273-7.273-2.5-2.5-1.686 1.693 2.5 2.5 1.686-1.693Z"
      fill={fill}
    />
  </Svg>
);
SvgPencilRound.defaultProps = defaultProps;

export default SvgPencilRound;

/* eslint max-len: ["error", { "code": 4000 }] */
import React from 'react';
import Svg, {
  Circle,
  Defs,
  Ellipse,
  G,
  LinearGradient,
  Mask,
  Path,
  Stop,
} from 'react-native-svg';

const defaultProps = {
  width: 34,
  height: 43,
};

const SvgLocationMarker = ({width, height}: typeof defaultProps) => (
  <Svg width={width} height={height} viewBox="0 0 34 43" fill="none">
    <G filter="url(#Group_627158_svg__a)">
      <Ellipse cx={10} cy={27} fill="#000" fillOpacity={0.12} rx={4} ry={2} />
    </G>
    <Mask
      id="Group_627158_svg__c"
      width={34}
      height={43}
      x={0.125}
      y={0.125}
      fill="#000"
      maskUnits="userSpaceOnUse">
      <Path fill="#fff" d="M.125.125h34v43h-34z" />
      <Path
        fillRule="evenodd"
        d="M25.994 29.349c3.87-2.844 6.381-7.428 6.381-12.599 0-8.63-6.996-15.625-15.625-15.625-8.63 0-15.625 6.996-15.625 15.625 0 5.17 2.512 9.755 6.381 12.599 2.941 2.216 7.086 5.711 8.039 11.338.1.596.6 1.058 1.205 1.058.605 0 1.104-.462 1.205-1.058.953-5.627 5.098-9.122 8.039-11.338Z"
        clipRule="evenodd"
      />
    </Mask>
    <Path
      fill="#EA352B"
      fillRule="evenodd"
      d="M25.994 29.349c3.87-2.844 6.381-7.428 6.381-12.599 0-8.63-6.996-15.625-15.625-15.625-8.63 0-15.625 6.996-15.625 15.625 0 5.17 2.512 9.755 6.381 12.599 2.941 2.216 7.086 5.711 8.039 11.338.1.596.6 1.058 1.205 1.058.605 0 1.104-.462 1.205-1.058.953-5.627 5.098-9.122 8.039-11.338Z"
      clipRule="evenodd"
    />
    <Path
      fill="url(#Group_627158_svg__b)"
      d="m25.994 29.349-.593-.806-.01.007.603.799Zm-18.488 0 .602-.799-.01-.007-.592.806Zm8.039 11.338.986-.167-.986.167Zm2.41 0-.986-.167.986.167Zm8.63-10.532c4.116-3.025 6.79-7.903 6.79-13.405h-2c0 4.839-2.35 9.13-5.974 11.793l1.185 1.611Zm6.79-13.405C33.375 7.568 25.932.125 16.75.125v2c8.077 0 14.625 6.548 14.625 14.625h2ZM16.75.125C7.568.125.125 7.568.125 16.75h2c0-8.077 6.548-14.625 14.625-14.625v-2ZM.125 16.75c0 5.502 2.674 10.38 6.79 13.404l1.184-1.611A14.603 14.603 0 0 1 2.125 16.75h-2Zm16.406 23.77c-1.023-6.043-5.468-9.744-8.423-11.97l-1.203 1.597c2.926 2.206 6.772 5.496 7.654 10.707l1.972-.334Zm.219.225a.185.185 0 0 1-.126-.052.301.301 0 0 1-.093-.173l-1.972.334c.174 1.03 1.052 1.891 2.191 1.891v-2Zm.22-.225a.301.301 0 0 1-.094.173.185.185 0 0 1-.126.052v2c1.139 0 2.017-.861 2.191-1.891l-1.972-.334Zm8.422-11.97c-2.955 2.226-7.4 5.927-8.423 11.97l1.972.334c.883-5.211 4.728-8.501 7.655-10.707l-1.204-1.597Z"
      mask="url(#Group_627158_svg__c)"
    />
    <Circle cx={16.75} cy={16.75} r={6.25} fill="#000" fillOpacity={0.4} />
    <Defs>
      <LinearGradient
        id="Group_627158_svg__b"
        x1={16.75}
        x2={16.75}
        y1={1.125}
        y2={41.745}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.35} />
      </LinearGradient>
    </Defs>
  </Svg>
);

SvgLocationMarker.defaultProps = defaultProps;

export default SvgLocationMarker;

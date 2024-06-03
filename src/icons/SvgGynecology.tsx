/* eslint max-len: ["error", { "code": 4000 }] */
import React from 'react';
import Svg, {Path, G, Circle, Defs} from 'react-native-svg';

const defaultProps = {
  width: 80,
  height: 80,
};
const SvgGynecology = ({width, height}: typeof defaultProps) => (
  <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
    <Circle cx={40} cy={40} r={40} fill="#E5F3FB" />
    <G fill="#29D" filter="url(#Group_33900_svg__a)">
      <Path d="M22.82 29.724c-.8.729-1.05 1.617-.56 2.405a15.638 15.638 0 0 0 2.004 2.547c-.552.044-1.04.236-1.403.586a1.864 1.864 0 0 0-.352.466 17.422 17.422 0 0 1-1.946-2.541c-1.201-1.926-.283-3.855.912-4.942.607-.553 1.36-.974 2.125-1.152.756-.176 1.663-.139 2.387.442 1.58 1.266 2.385 1.434 2.918 1.48.1.01.214.011.342.014.564.012 1.384.03 2.297.616l-1.08 1.683c-.408-.262-.601-.268-1.046-.282a11.598 11.598 0 0 1-.687-.038c-1.019-.09-2.188-.464-3.995-1.912-.081-.066-.283-.148-.683-.055-.39.091-.843.328-1.232.683Z" />
      <Path
        fillRule="evenodd"
        d="M28.9 37.143c1.68 1.549 2.15 3.665 1.047 4.728-1.102 1.062-3.358.668-5.038-.881-1.68-1.549-2.149-3.666-1.047-4.728 1.103-1.063 3.358-.668 5.039.88Zm-1.44 1.388c.59.543.897 1.126.993 1.557.053.239.034.365.016.42-.058.018-.192.038-.446-.006-.459-.08-1.085-.357-1.674-.9s-.897-1.127-.992-1.557c-.053-.239-.034-.366-.017-.42.058-.018.192-.039.447.006.459.08 1.085.357 1.674.9Zm.995 2.01v.002l.004-.009a.11.11 0 0 0-.002.003l-.002.004Zm.041-.042c.006-.005.01-.006.01-.006s-.003.003-.01.005Zm-3.143-2.904.002-.005-.005.008.002-.003Zm-.04.04a.029.029 0 0 1-.009.004l.01-.005Z"
        clipRule="evenodd"
      />
      <Path d="M57.753 32.129c.491-.788.24-1.676-.56-2.405-.39-.355-.843-.592-1.233-.683-.4-.093-.602-.01-.683.055-1.806 1.448-2.976 1.823-3.995 1.912-.29.025-.508.032-.687.038-.445.014-.638.02-1.047.282l-1.08-1.683c.914-.586 1.734-.604 2.298-.616.128-.003.242-.005.342-.014.533-.046 1.339-.214 2.918-1.48.724-.58 1.63-.618 2.387-.442.766.178 1.518.599 2.126 1.152 1.194 1.087 2.113 3.016.911 4.942a17.441 17.441 0 0 1-1.986 2.585 1.864 1.864 0 0 0-.374-.51c-.35-.338-.818-.528-1.346-.581.644-.667 1.371-1.53 2.009-2.552Z" />
      <Path
        fillRule="evenodd"
        d="M51.05 37.143c-1.68 1.549-2.15 3.665-1.047 4.728 1.102 1.062 3.358.668 5.038-.881 1.68-1.549 2.15-3.666 1.047-4.728-1.102-1.063-3.358-.668-5.038.88Zm1.44 1.388c-.59.543-.897 1.126-.992 1.557-.053.239-.034.365-.017.42.058.018.192.038.446-.006.46-.08 1.085-.357 1.674-.9.59-.543.897-1.127.992-1.557.053-.239.034-.366.017-.42-.058-.018-.192-.039-.447.006-.458.08-1.084.357-1.673.9Zm-.997 2.006.003.006-.005-.009a.11.11 0 0 1 .002.003Zm-.044-.041.005.002-.003-.001-.004-.002-.002-.002m3.15-2.903s0 .003.005.008l-.005-.008Zm.042.044a.029.029 0 0 0 .009.005l-.009-.005ZM34.012 29.474C35.335 28.518 37.298 28 40.01 28c2.698 0 4.66.472 5.982 1.364 1.38.93 1.962 2.247 2.005 3.624.042 1.324-.41 2.67-1.003 3.82a12.34 12.34 0 0 1-2.127 2.954c-.46.462-.79 1.228-.994 2.339-.2 1.098-.254 2.398-.267 3.808-.004.442-.004.899-.004 1.36 0 .973 0 1.97-.038 2.902-.057 1.378-.2 2.75-.594 3.899-.074.216-.23.543-.575.754a1.23 1.23 0 0 1-1.044.106 1.845 1.845 0 0 1-.543-.307 4.497 4.497 0 0 1-.354-.317 18.57 18.57 0 0 1-.216-.216c-.092-.093-.17-.171-.25-.244a7.43 7.43 0 0 0-.305.259c-.084.073-.177.155-.292.252-.197.165-.56.468-.973.587-.243.07-.61.107-.981-.09a1.387 1.387 0 0 1-.64-.758c-.425-1.133-.646-2.534-.785-3.961-.112-1.162-.175-2.4-.236-3.592v-.002l-.043-.833c-.077-1.46-.169-2.8-.358-3.892-.2-1.145-.472-1.784-.74-2.054-.607-.61-1.283-1.598-1.794-2.722-.511-1.124-.902-2.482-.833-3.827.072-1.384.637-2.751 2.004-3.739Zm5.789 24.22a.025.025 0 0 1-.002 0h.002Z"
        clipRule="evenodd"
      />
    </G>
    <Defs></Defs>
  </Svg>
);

SvgGynecology.defaultProps = defaultProps;

export default SvgGynecology;
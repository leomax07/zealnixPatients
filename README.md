
## How do I get started?

use the node (prefered version `v18.14.0`)

then in your terminal run the following command

```
yarn
cd ios
pod install
cd ..
```

once all the dependency has been installed you start the application

## To run on ios development mode

```
yarn ios
```

## To run on android development mode

```
yarn android
```

## To run on ios production mode

```
yarn ios:prod
```

## To run on android production mode

```
yarn android:prod
```

## Update Android version

```
yarn postversion
```

## Lint error check

```
yarn lint
```

## Type error check

```
yarn check:types
```

Build apk file

## Build apk development debug mode

```
yarn clear
yarn build:debug-dev
```

## Build apk development release mode

```
yarn clear
yarn build:dev
```

## Build apk production release mode

```
yarn clear
yarn build:prod
```

## Build apk bundle production mode

```
yarn clear
yarn build:bundle
```

Find all build location `android/app/build/outputs/apk`


IOS TestFlight version upload

```
1. Open ios folder.
2. Find `garuda_patients.xcworkspace` and Click to open xcode.
3. Go to General tab and update version and build number.
4. Then click product tab and select options Archive.
5. One done build showing build popup.
```

## Adding Svg Icons

Install svgr cli in your system [SVGR CLI](https://react-svgr.com/docs/cli/). Then run the following commands npx @svgr/cli `ICON NAME`. For example if you have a file named `SvgSave.svg` in your current folder then run

```sh
npx @svgr/cli --native SvgSave.svg
```

in your terminal. Then copy paste the generated react file

```javascript
import React from 'react';
import Svg, {Defs, G, Path} from 'react-native-svg';

const defaultProps = {
  width: 48,
  height: 48,
  fill: '#fff',
};

const SvgSave = ({width, height, fill}: typeof defaultProps) => (
  <Svg viewBox="0 0 48 48" width={width} height={height} fill="none">
    <G filter="url(#Group_2875_svg__a)">
      <Path
        fill="#000"
        fillOpacity={0.4}
        d="M0 24C0 10.745 10.745 0 24 0s24 10.745 24 24-10.745 24-24 24S0 37.255 0 24Z"
      />
    </G>
    <Path
      fill={fill}
      d="M18.4 32.4a.99.99 0 0 1-.95-.087c-.3-.191-.45-.47-.45-.838V17c0-.55.196-1.021.588-1.413A1.922 1.922 0 0 1 19 15h10c.55 0 1.021.196 1.413.588.392.392.588.863.587 1.412v14.475c0 .367-.15.646-.45.838a.987.987 0 0 1-.95.087L24 30l-5.6 2.4Z"
    />
    <Defs />
  </Svg>
);

SvgSave.defaultProps = defaultProps;

export default SvgSave;
```

in the `src/icons` folder, so that you can later import it in your application.



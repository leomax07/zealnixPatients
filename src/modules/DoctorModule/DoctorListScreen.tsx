import React from 'react';
import {Flex} from 'squashapps-react-native-uikit';
import {RouteProp, useRoute} from '@react-navigation/native';
import CustomStatusBar from '../../common/CustomStatusBar';
import LogoHeader from '../../common/LogoHeader';
import DoctoListTab from './DoctorListTab';

type ParamListBase = {
  sample: {type: string};
};

interface SampleRouteProp extends RouteProp<ParamListBase, 'sample'> {}

const DoctorListScreen = () => {
  const route = useRoute<SampleRouteProp>();
  const {type} = route.params;

  return (
    <>
      <CustomStatusBar />
      <Flex flex={1}>
        <LogoHeader title="Search doctors" />
        <DoctoListTab cateogry={type} />
      </Flex>
    </>
  );
};
export default DoctorListScreen;

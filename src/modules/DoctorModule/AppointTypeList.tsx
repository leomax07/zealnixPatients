import React, {useState} from 'react';
import {Flex, StyleSheet} from 'squashapps-react-native-uikit';
import AppointmentTypeCard from './AppointmentTypeCard';
import {documentType} from './mock';

const styles = StyleSheet.create({
  overAll: {
    marginTop: 20,
  },
});

type Prop = {
  onChange: (a: string) => void;
};
const AppointTypeList = ({onChange}: Prop) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <Flex row overrideStyle={styles.overAll}>
      {documentType.map((item, index) => (
        <AppointmentTypeCard
          key={item?.name}
          title={item?.name}
          onPress={onChange}
          icon={item?.icon}
          index={index}
          setSelectedIndex={setSelectedIndex}
          selectedIndex={selectedIndex}
          primary={item?.primary}
          gradient={item?.gradient}
          textColor={item?.textColor}
          type={item?.type}
          price={item?.price}
        />
      ))}
    </Flex>
  );
};
export default AppointTypeList;

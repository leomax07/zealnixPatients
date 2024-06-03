import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Flex, Text} from 'squashapps-react-native-uikit';

type Props = {
  onClick: () => void;
  icon: any;
  name?: string;
};

const IconRoundBackground = ({icon, name, onClick}: Props) => {
  const styles = StyleSheet.create({
    overAll: {
      position: 'relative',
      zIndex: 13,
      width: 80,
      marginRight: 8,
      flex: 1,
    },
    name: {
      marginTop: 2,
    },
  });

  return (
    <TouchableOpacity onPress={onClick} style={styles.overAll}>
      <Flex middle center>
        {icon}
        <Text
          type="heading400"
          size={14}
          numberOfLines={1}
          ellipsizeMode="middle"
          overrideStyle={styles.name}
          align="center">
          {name}
        </Text>
      </Flex>
    </TouchableOpacity>
  );
};
export default IconRoundBackground;

import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {Text, Colors} from 'squashapps-react-native-uikit';
import {textColors} from 'squashapps-react-native-uikit/Text';

const {GREY_30, WHITE, BLACK, RED_50} = Colors;

type Props = {
  labelActiveColor?: textColors;
  labelDeactiveColor?: textColors;
  activeButtonColor?: string;
  selected: boolean;
  onPress: () => void;
  item: {label: string; value: string; disabled?: boolean};
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: WHITE,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: GREY_30,
  },
  disabledButton: {
    backgroundColor: GREY_30,
    borderColor: GREY_30,
  },
  disabledButtonText: {
    color: RED_50,
  },
});

const ButtonItem = ({
  labelActiveColor = 'white',
  labelDeactiveColor = 'primary',
  activeButtonColor = BLACK,
  selected,
  onPress,
  item: {label, disabled},
}: Props) => {
  const handleColor = () => {
    if (disabled) {
      return 'error';
    } else if (selected) {
      return labelActiveColor;
    } else {
      return labelDeactiveColor;
    }
  };
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.button,
        disabled && styles.disabledButton,
        selected
          ? {backgroundColor: activeButtonColor}
          : {backgroundColor: WHITE},
      ]}
      onPress={onPress}>
      <Text size={14} color={handleColor()}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonItem;

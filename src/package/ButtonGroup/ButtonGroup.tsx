import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import ButtonItem from './ButtonItem';
import {Colors} from 'squashapps-react-native-uikit';
import {textColors} from 'squashapps-react-native-uikit/Text';

const {BLACK} = Colors;

const defaultProps = {
  labelActiveColor: 'white',
  labelDeactiveColor: 'primary',
  activeButtonColor: BLACK,
};

type Props = {
  onChange: Function;
  buttons: {label: string; value: string; disabled?: boolean}[];
  defaultValue?: string | string[];
  labelActiveColor?: textColors;
  labelDeactiveColor?: textColors;
  activeButtonColor?: string;
  multiSelect?: boolean;
};

const ButtonGroup = ({
  buttons,
  onChange,
  defaultValue,
  labelDeactiveColor,
  labelActiveColor,
  activeButtonColor,
  multiSelect = false,
}: Props) => {
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);

  useEffect(() => {
    const defaultIndices = defaultValue
      ? buttons
          .map((button, index) =>
            defaultValue.includes(button.value) ? index : -1,
          )
          .filter(index => index !== -1)
      : [];
    if (defaultIndices.length > 0) {
      setSelectedIndices(defaultIndices);
    } else {
      setSelectedIndices([-1]); // Set selectedIndex as -1 if defaultValue is empty string or array
    }
  }, [buttons, defaultValue]);

  const handlePress = (value: string, index: number) => {
    if (value) {
      let newSelectedIndices: number[];
      if (multiSelect) {
        if (selectedIndices.includes(index)) {
          newSelectedIndices = selectedIndices.filter(i => i !== index);
        } else {
          newSelectedIndices = [...selectedIndices, index];
        }
      } else {
        newSelectedIndices = [index];
      }
      setSelectedIndices(newSelectedIndices);
      const selectedValues = newSelectedIndices.map(i => buttons[i].value);
      onChange(multiSelect ? selectedValues : selectedValues[0]);
    }
  };

  return (
    <FlatList
      horizontal
      data={buttons}
      keyExtractor={(_item, index) => index.toString()}
      renderItem={({item, index}) => (
        <ButtonItem
          labelActiveColor={labelActiveColor}
          labelDeactiveColor={labelDeactiveColor}
          activeButtonColor={activeButtonColor}
          selected={selectedIndices.includes(index)}
          onPress={() => handlePress(item?.value, index)}
          item={item}
        />
      )}
    />
  );
};

ButtonGroup.defaultProps = defaultProps;

export default ButtonGroup;

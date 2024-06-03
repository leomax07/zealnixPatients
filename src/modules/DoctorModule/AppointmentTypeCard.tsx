import React from 'react';
import {StyleSheet, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Card, Colors, Flex, Text} from 'squashapps-react-native-uikit';
import {textColors} from 'squashapps-react-native-uikit/Text';

type Props = {
  primary: string;
  selectedIndex: number;
  setSelectedIndex: (a: number) => void;
  onPress: (a: any) => void;
  index: number;
  textColor: textColors;
  type: string;
  gradient: string[];
  price: number;
  icon: JSX.Element;
  title: string;
};
const styles = StyleSheet.create({
  overAllCard: {
    height: 100,
    width: 100,
    borderRadius: 20,
    marginRight: 20,
    borderWidth: 1,
  },
  linearContaier: {
    height: 35,
    width: 35,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppointmentTypeCard = ({
  primary,
  index,
  selectedIndex,
  onPress,
  setSelectedIndex,
  textColor,
  type,
  gradient,
  price,
  icon,
  title,
}: Props) => {
  const activeButton: ViewStyle = {
    backgroundColor: primary,
  };
  const inactiveButton: ViewStyle = {
    backgroundColor: Colors.WHITE,
  };
  const fontColor = index === selectedIndex ? 'white' : textColor;

  const handleSelect = () => {
    setSelectedIndex(index);
    onPress(type);
  };
  return (
    <Card
      overrideStyle={[
        styles.overAllCard,
        index === selectedIndex ? activeButton : inactiveButton,
        {borderColor: primary},
      ]}
      onClick={handleSelect}>
      <Flex center>
        <LinearGradient
          colors={gradient}
          locations={[0, 1]}
          style={styles.linearContaier}>
          {icon}
        </LinearGradient>
        {fontColor === 'inprogress' ? (
          <>
            <Text size={14} overrideStyle={{color: '#FFB226'}}>
              {title}
            </Text>
            <Text
              size={14}
              overrideStyle={{color: '#FFB226', marginTop: 2}}
              color={fontColor}>
              ₹ {price}
            </Text>
          </>
        ) : (
          <>
            <Text size={14} color={fontColor}>
              {title}
            </Text>
            <Text size={14} overrideStyle={{marginTop: 2}} color={fontColor}>
              ₹ {price}
            </Text>
          </>
        )}
      </Flex>
    </Card>
  );
};
export default AppointmentTypeCard;

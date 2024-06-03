import React from 'react';
import {View} from 'react-native';
import {
  Card,
  Flex,
  Image,
  Text,
  StyleSheet,
} from 'squashapps-react-native-uikit';
import {USER_PROFILE} from '../../utils/constants';

const styles = StyleSheet.create({
  overAll: {
    borderRadius: 30,
    height: 180,
    width: 120,
  },
  marginRight: {
    marginRight: 23,
    borderRadius: 16,
    marginVertical: 1,
    marginLeft: 1,
  },
  viewmoreBtn: {
    marginTop: 16,
    marginBottom: 20,
  },
  linearContaier: {
    position: 'relative',
    height: 60,
    bottom: 60,
    padding: 12,
    backgroundColor: 'rgba(255 255 255 / 0.7)',
    alignItems: 'flex-start',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  imageBorder: {
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
  iconContainer: {
    position: 'absolute',
    top: -12,
    right: 8,
  },
});
type Props = {
  icon: JSX.Element;
  doctorName: string;
  doctorType: string;
  image: string;
  onClick?: () => void;
};

const DoctorCard = ({icon, doctorName, doctorType, image, onClick}: Props) => {
  return (
    <Card type="primary" overrideStyle={styles.marginRight} onClick={onClick}>
      <Flex overrideStyle={styles.overAll}>
        <Image
          height={180}
          width={120}
          overrideStyle={styles.imageBorder}
          src={image ? image : USER_PROFILE}
        />
        <Flex overrideStyle={styles.linearContaier}>
          <View style={styles.iconContainer}>{icon}</View>
          <Text numberOfLines={1} ellipsizeMode="tail" type="heading500">
            {`Dr.${doctorName}`}
          </Text>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            color="error"
            type="body200">
            {doctorType}
          </Text>
        </Flex>
      </Flex>
    </Card>
  );
};
export default DoctorCard;

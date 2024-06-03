import React from 'react';
import {
  Card,
  Flex,
  Image,
  Text,
  StyleSheet,
  getColors,
} from 'squashapps-react-native-uikit';
import {View} from 'react-native';
import {APP_THEME, USER_PROFILE} from '../../utils/constants';

const {PRIMARY_COLOR_500} = getColors(APP_THEME);
const styles = StyleSheet.create({
  overAll: {
    marginBottom: 16,
    marginHorizontal: 1,
    marginTop: 1,
  },
  iconContainer: {
    marginLeft: 16,
    marginRight: 12,
  },
  textContainer: {
    paddingVertical: 24,
  },
  bodyContainer: {
    marginLeft: 12,
    paddingVertical: 8,
  },
});
type Props = {
  icon?: JSX.Element;
  doctorName: string;
  doctorType: string;
  image: string;
  onClick?: () => void;
  isSearch?: boolean;
  branch: string;
  borderRadius?: number;
};

const DoctorListCard = ({
  icon,
  doctorName,
  doctorType,
  image,
  onClick,
  isSearch,
  branch,
  borderRadius,
}: Props) => {
  if (isSearch) {
    return (
      <Card
        align="stretch"
        type="primary"
        overrideStyle={styles.overAll}
        onClick={onClick}>
        <Flex row>
          <View
            style={{
              borderWidth: borderRadius ? 2 : 0,
              borderRadius: borderRadius ? borderRadius + 2 : 0,
              borderColor: PRIMARY_COLOR_500,
            }}>
            <Image
              overrideStyle={[
                {
                  borderRadius,
                  borderTopLeftRadius: borderRadius ? borderRadius : 10,
                  borderBottomLeftRadius: borderRadius ? borderRadius : 10,
                },
              ]}
              height={90}
              width={90}
              src={image ? image : USER_PROFILE}
            />
          </View>
          <Flex center middle overrideStyle={styles.iconContainer}>
            {icon}
          </Flex>
          <Flex between overrideStyle={styles.textContainer}>
            <Text type="heading400">{`Dr.${doctorName}`}</Text>
            <Text size={10}>
              {doctorType}-{branch}
            </Text>
          </Flex>
        </Flex>
      </Card>
    );
  }
  return (
    <Flex row overrideStyle={styles.overAll}>
      <View
        style={{
          borderWidth: borderRadius ? 2 : 0,
          borderRadius: borderRadius ? borderRadius + 2 : 0,
          borderColor: PRIMARY_COLOR_500,
        }}>
        <Image
          overrideStyle={[
            {
              borderRadius,
              borderTopLeftRadius: borderRadius ? borderRadius : 10,
              borderBottomLeftRadius: borderRadius ? borderRadius : 10,
            },
          ]}
          height={70}
          width={70}
          src={image ? image : USER_PROFILE}
        />
      </View>
      <Flex between overrideStyle={styles.bodyContainer}>
        <Text type="heading600">{doctorName}</Text>
        <Text size={12} color="gray">
          {doctorType}
        </Text>
        <Text type="heading100">{branch}</Text>
      </Flex>
    </Flex>
  );
};
export default DoctorListCard;

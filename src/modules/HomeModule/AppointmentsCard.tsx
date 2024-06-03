import React from 'react';
import { FlatList, View } from 'react-native';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import {
  Button,
  Flex,
  getColors,
  Icons,
  StyleSheet,
  Text,
  helpers,
} from 'squashapps-react-native-uikit';
import DeviceInfo from 'react-native-device-info';
import moment from 'moment';
import { APP_THEME } from '../../utils/constants';
import AppointmentInnerListCard from './AppointmentInnerListCard';
import { AppointmentsList } from '../AppointmentModule/store/appointment.types';
import { getCurrentTime, getCurentMini } from '../../utils/helpers';
import { appointmentData } from './mock';

const { PRIMARY_COLOR_500 } = getColors(APP_THEME);
const { SvgCalenderTick, SvgClock, SvgVideoCircle } = Icons;
const { getDateString } = helpers;

const styles = StyleSheet.create({
  overAll: {
    backgroundColor: PRIMARY_COLOR_500,
    borderRadius: 24,
    padding: 20,
  },
  dateText: {
    marginLeft: 12,
  },
  clockConatiner: {
    marginTop: 10,
  },
  inlineCard: {
    paddingRight: 24,
    paddingLeft: 10,
    paddingVertical: 10,
    borderRadius: 15,
  },
  nameContainer: {
    marginLeft: 10,
  },
  cardListContainer: {
    marginTop: 20,
  },
  overAllContainer: {
    paddingRight: 10,
    paddingLeft: 10,
  },
});

type Props = {
  handleVideo: (a: any) => void;
  items: any;
  handleView: Function;
};
const AppointmentsCard = ({ items, handleView, handleVideo }: Props) => {
  const isTablet = DeviceInfo.isTablet();
  const { width } = useSafeAreaFrame();
  const cardWidth = isTablet ? (0.8 * width) : width;
  const currentMin = getCurentMini();
  const isEnable = ((items.appointmentSchedule.appointmentRangeStart - currentMin) < 15 && (items.appointmentSchedule.appointmentRangeStart - currentMin) > 0) ||
    ((items.appointmentSchedule.appointmentRangeEnd - currentMin < 15) && (items.appointmentSchedule.appointmentRangeEnd - currentMin > 0))

  // const appointmentData = [
  //   {
  //     profile: items?.doctor?.profileImageUrl,
  //     name: items?.doctor?.name,
  //     age: (
  //       moment().year() - moment(items?.patient?.dateOfBirth).year()
  //     ).toString(),
  //     gender: items?.patient?.gender,
  //     department: items?.doctor?.department?.name
  //   },
  // ];

  return (
    <Button type="link" onClick={() => handleView(items.id)}>
      <Flex overrideStyle={[styles.overAllContainer, { width: cardWidth }]}>
        <Flex overrideStyle={[styles.overAll]}>
          <Flex row between>
            <Flex between>
              <Flex row center>
                <SvgCalenderTick />
                <Text
                  overrideStyle={styles.dateText}
                  type="heading500"
                  color="white">
                  05th May 2024
                  {/* {getDateString(
                    items.appointmentDate,
                    'Do MMM YYYY',
                    false,
                    true,
                  )} */}
                </Text>
              </Flex>
              <Flex row center overrideStyle={styles.clockConatiner}>
                <SvgClock />
                <Text
                  overrideStyle={styles.dateText}
                  type="heading500"
                  color="white">
                  {/* {getCurrentTime(
                    items.appointmentSchedule.appointmentRangeStart,
                  )}{' '} */}
                  10:00 am
                  -12:00 pm
                </Text>
              </Flex>
            </Flex>
            {
              items.type === 'video' && (
                <Button disabled={!isEnable} type="link" onClick={() => handleVideo(items.id)}>
                  <SvgVideoCircle height={28} width={28} fill={PRIMARY_COLOR_500} />
                </Button>
              )}
          </Flex>
          <View style={styles.cardListContainer}>
            <FlatList
              bounces={false}
              data={appointmentData}
              keyExtractor={(_item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <AppointmentInnerListCard
                  totalLength={appointmentData.length}
                  index={index}
                  item={item}
                />
              )}
            />
          </View>
        </Flex>
      </Flex>
    </Button>
  );
};

export default AppointmentsCard;

import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import {
  Flex,
  StyleSheet,
  Text,
  InputText,
  Button,
  ButtonGroup,
} from 'squashapps-react-native-uikit';
import moment, { Moment } from 'moment';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import AppointTypeList from './AppointTypeList';
import TypeDescriptionCard from './TypeDescriptionCard';
import { AppDispatch, RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { appointmentSlotListMiddleWare } from './store/doctorMiddleware';
import { getCurrentTime } from '../../utils/helpers';
import { postAppointmentMiddleWare } from '../AppointmentModule/store/appointmentMiddleware';
import WeekCalendar from '../../package/WeeklyCalender/WeeklyCalendar';

const styles = StyleSheet.create({
  overAll: {
    padding: 20,
  },
  textChoose: {
    marginTop: 12,
  },
  heading: {
    marginTop: 32,
  },
  slotValue: {
    marginBottom: 12,
  },
  textInput: {
    height: 287,
  },
  btn: {
    marginHorizontal: 12,
    marginTop: 36,
  },
});
type ParamListBase = {
  sample: { id: string };
};

interface SampleRouteProp extends RouteProp<ParamListBase, 'sample'> { }

const NewAppointmentScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<SampleRouteProp>();
  const { id } = route.params;
  const dispatch: AppDispatch = useDispatch();
  const [type, SetType] = useState('regular');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [note, setNotes] = useState('');
  const [title, setTitle] = useState('');

  const [date, setDay] = useState<Moment>(moment().startOf('date'));
  const { slotList, doctorDetail, profileData } = useSelector(
    ({
      appointmentSlotListReducers,
      doctorDetailsReducers,
      profileReducers,
    }: RootState) => {
      return {
        slotList: appointmentSlotListReducers.data,
        doctorDetail: doctorDetailsReducers.data,
        profileData: profileReducers.data,
      };
    },
  );
  const handleSelect = (ds: string) => {
    SetType(ds);
  };
  const handleSlot = (slot: string) => {
    setSelectedSlot(slot);
  };
  const handleDateChange = (day: Moment) => {
    setDay(moment(day).startOf('date'));
  };
  const handleNotes = (value: string) => {
    setNotes(value);
  };
  const handleTitle = (value: string) => {
    setTitle(value);
  };

  const handleConfirm = () => {

    navigation.navigate('MessageConfirmationScreen');
  };
  useEffect(() => {
    dispatch(
      appointmentSlotListMiddleWare({
        id,
        date,
        type,
      }),
    );
    setSelectedSlot('');
  }, [type, date, id]);

  const handleDisable = (type: string, data: any) => {
    let disabled = false;

    switch (type) {
      case 'regular':
        disabled = data.regularSlot <= 0;
        break;
      case 'emergency':
        disabled = data.emergencySlot <= 0;
        break;
      case 'video':
        disabled = data.videoSlot <= 0;
        break;
      default:
        disabled = false;
    }
    return disabled;
  };
  const convertedData = slotList.map(item => ({
    label: `${getCurrentTime(item?.appointmentRangeStart)}-${getCurrentTime(
      item?.appointmentRangeEnd,
    )}`,
    value: item?.id,
    disabled: handleDisable(type, item),
  }));

  return (
    <ScrollView contentContainerStyle={styles.overAll} bounces={false}>
      <Flex>
        <Text type="heading600">New Appointment</Text>
        <Text color="gray" overrideStyle={styles.textChoose}>
          Choose an available schedule,
        </Text>
        <Text type="body300" overrideStyle={styles.heading}>
          Appointment Type
        </Text>
        <AppointTypeList onChange={handleSelect} />
        <TypeDescriptionCard type={type} />
        <Text type="body300">Choose Date</Text>
        <WeekCalendar
          format="DD-MM-YYYY"
          onDateChange={handleDateChange}
          isPast
        />
        <Text type="body300" overrideStyle={[styles.heading, styles.slotValue]}>
          Available Slot
        </Text>

        <ButtonGroup
          defaultValue={selectedSlot}
          onChange={handleSlot}
          buttons={convertedData}
          textSize={14}
          isShadow
        />
        <View style={{ marginVertical: 20 }}>
          <InputText
            label="Appointment Title"
            value={title}
            onChange={handleTitle}
            placeholder="title"
          />
        </View>

        <InputText
          multiline
          label=" Appointment Notes"
          value={note}
          onChange={handleNotes}
          placeholder="Gut Health issues"
          overrideStyle={styles.textInput}
        />
        <Button overrideStyle={styles.btn} onClick={handleConfirm}>
          Book Appointment
        </Button>
      </Flex>
    </ScrollView>
  );
};

export default NewAppointmentScreen;

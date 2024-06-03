import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Flex,
  Text,
  Icons,
  Button,
  Modal,
  Colors,
  LabelWrapper,
} from 'squashapps-react-native-uikit';

const {SvgClose, SvgDot, SvgAppointmentSuccess} = Icons;
type Props = {
  doctorName: String;
  appointmentTime: String;
  notificationTime: String;
  title: String;
  isRemainder?: boolean;
  background?: string;
};

const styles = StyleSheet.create({
  overAll: {
    paddingHorizontal: 32,
    paddingVertical: 20,
  },
  iconContainer: {
    padding: 12,
    borderRadius: 16,
  },
  modalView: {
    backgroundColor: Colors.WHITE,
    borderRadius: 24,
    padding: 30,
  },
  title: {
    marginBottom: 24,
  },
  reminderContent: {
    marginBottom: 24,
    marginTop: 12,
  },
  borderGray: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderColor: Colors.TEXT_GREY_100,
    borderWidth: 1,
    borderRadius: 20,
  },
  para: {
    marginTop: 16,
  },
  bottomBtn: {
    marginTop: 32,
  },
  marginLeft: {
    marginLeft: 20,
  },
});
type ParaProps = {
  doctorName?: String;
  appointmentTime?: String;
};

const Content = ({doctorName, appointmentTime}: ParaProps) => {
  return (
    <Text overrideStyle={styles.para}>
      Your Booking with <Text type="heading400">{doctorName}</Text> on{' '}
      <Text type="heading400">{appointmentTime}</Text> has been successfully{' '}
      Booked Please arrive at the hospital on designated time.
    </Text>
  );
};

const MessageCard = ({
  doctorName,
  appointmentTime,
  notificationTime,
  title,
  isRemainder,
  background,
}: Props) => {
  const [visible, setVisible] = useState(false);
  const handleVisibleOpen = () => setVisible(true);
  const handleVisibleClose = () => setVisible(false);

  return (
    <>
      <Modal isVisible={visible}>
        <Flex overrideStyle={styles.modalView}>
          <Flex row center between>
            <Text align="center" type="heading500">
              Reminder Appointment
            </Text>
            <Button onClick={handleVisibleClose} type="link">
              <SvgClose />
            </Button>
          </Flex>
          <Flex overrideStyle={styles.reminderContent}>
            <Text color="gray">You will be reminded H-1</Text>
          </Flex>
          <Flex start overrideStyle={styles.para}>
            <LabelWrapper label="Appointment  Start">
              <Text overrideStyle={styles.borderGray}>
                Monday 25 Oct . 10:00 AM
              </Text>
            </LabelWrapper>
          </Flex>
          <Flex start overrideStyle={styles.para}>
            <LabelWrapper label="The Place">
              <Text overrideStyle={styles.borderGray}>Royal Hospital</Text>
            </LabelWrapper>
          </Flex>
          <Button onClick={handleVisibleClose} overrideStyle={styles.bottomBtn}>
            Remind Me
          </Button>
        </Flex>
      </Modal>
      <Flex overrideStyle={styles.overAll}>
        <Flex row between middle>
          <Flex row>
            <View style={[styles.iconContainer, {backgroundColor: background}]}>
              <SvgAppointmentSuccess />
            </View>
            <Flex overrideStyle={styles.marginLeft}>
              <Text>{title} </Text>
              <Text color="gray">{notificationTime}</Text>
            </Flex>
          </Flex>
          {isRemainder && (
            <Flex middle>
              <SvgDot width={8} height={8} fill={Colors.ERROR_500} />
            </Flex>
          )}
        </Flex>
        <Content doctorName={doctorName} appointmentTime={appointmentTime} />
        {isRemainder && (
          <Flex overrideStyle={styles.para}>
            <Button type="secondary" onClick={handleVisibleOpen}>
              Reminder
            </Button>
          </Flex>
        )}
      </Flex>
    </>
  );
};
export default MessageCard;

import * as React from 'react';
import {Flex, Text, Image, StyleSheet} from 'squashapps-react-native-uikit';
import SvgCalendar from '../../icons/SvgCalendar';
import {useSelector, useDispatch} from 'react-redux';
import {RootState, AppDispatch} from '../../redux/store';
import moment from 'moment';
import {doctorDetailsMiddleWare} from '../DoctorModule/store/doctorMiddleware'

const styles = StyleSheet.create({
  popupStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  overAll: {
    paddingHorizontal: 32,
    paddingVertical: 20,
  },
  para: {
    margin: 20,
    textAlign: 'center',
    lineHeight: 24,
  },
  priority: {
    color: '#FFB226',
  },
  textLine: {
    marginVertical: 5,
    lineHeight: 24,
  },
  dateText: {
    color: '#3366FF',
  },
  notes: {
    margin: 10,
    lineHeight: 24,
  },
  lightBlack: {
    color: '#979797',
  },
  rowSplit: {
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 30,
  },
  images: {
    marginVertical: 15,
  },
  innerAdjust: {
    marginTop: 8,
  },
});

type ParaProps = {
  doctorName?: String;
  appointmentTime?: String;
};

const Content = ({doctorName, appointmentTime}: ParaProps) => {
  return (
    <Text overrideStyle={[styles.para]}>
      Your Booking with <Text type="heading400">{doctorName}</Text> on{' '}
      <Text type="heading400">{appointmentTime}</Text> has been successfully{' '}
      Placed
    </Text>
  );
};

const ConfirmationMainScreen = () => {
  const dispatch: AppDispatch = useDispatch();
  const [doctorName, setDoctorName] = React.useState('')
  const {data} = useSelector(
    ({
      postAppoinmentReducers
    }: RootState) => {
      return {
        data: postAppoinmentReducers.data,
      };
    },
  );

 React.useEffect(() => {
  dispatch(doctorDetailsMiddleWare({doctorId: data.doctorId})).then(res => {
    if (res?.payload) {
      setDoctorName(res.payload.name)
    }
  });
 }, [data])


  return (
    <Flex>
      <Flex overrideStyle={styles.popupStyle}>
        <Image
          height={151}
          width={151}
          overrideStyle={styles.images}
          src="https://i.ibb.co/ZV7JVN0/confirms.png"
        />
        <Text overrideStyle={[styles.textLine]} type="heading500" size={18}>
          Your Appointment is Confirmed
        </Text>

        <Text
          overrideStyle={[styles.priority, styles.textLine]}
          size={16}
          type="heading500">
          {data.type}
        </Text>

        <Flex row center>
          <Flex column overrideStyle={styles.innerAdjust}>
            <SvgCalendar height={24} width={24} />
          </Flex>

          <Flex column>
            <Text
              overrideStyle={[styles.dateText, styles.textLine]}
              size={16}
              type="heading500">
              { moment(data.appointmentDate).format('MMMM, Do YYYY')}
            </Text>
          </Flex>
        </Flex>

        <Text overrideStyle={[styles.textLine]}>
          Token ID : <Text type="heading500">{data.tokenId}</Text>
        </Text>

        <Content
          doctorName={doctorName}
          appointmentTime={moment(data.appointmentDate).format('MMMM, Do YYYY, hh:mm a')}
        />

        <Text overrideStyle={[styles.notes, styles.dateText]}>
          Note :{' '}
          <Text overrideStyle={styles.lightBlack} size={14}>
            Please arrive at the hospital 15 minutes before designated time.
          </Text>
        </Text>
      </Flex>

      <Flex column>
        <Flex row overrideStyle={styles.rowSplit}>
          <Flex column>
            <Text type="heading500" size={14}>
              Appointment Details :
            </Text>
          </Flex>
        </Flex>

        <Flex row overrideStyle={styles.rowSplit}>
          <Flex column>
            <Text overrideStyle={styles.lightBlack} size={14}>
              Appointment ID :{' '}
            </Text>
          </Flex>

          <Flex column>
            <Text type="heading500" size={14}>
              {data.appointmentScheduleId}
            </Text>
          </Flex>
        </Flex>

        <Flex row overrideStyle={styles.rowSplit}>
          <Flex column>
            <Text overrideStyle={styles.lightBlack} size={14}>
              Appointment Via :{' '}
            </Text>
          </Flex>

          <Flex column>
            <Text type="heading500" size={14}>
            {data.bookedVia}
            </Text>
          </Flex>
        </Flex>

        <Flex row overrideStyle={styles.rowSplit}>
          <Flex column>
            <Text overrideStyle={styles.lightBlack} size={14}>
              Package :{' '}
            </Text>
          </Flex>

          <Flex column>
            <Text type="heading500" size={14}>
              {data.type}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ConfirmationMainScreen;

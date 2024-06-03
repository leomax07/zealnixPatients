import React from 'react';
import {Moment} from 'moment';
import {StyleSheet} from 'react-native';
import {
  Button,
  Card,
  Flex,
  Icons,
  Text,
  Colors,
} from 'squashapps-react-native-uikit';
import moment from 'moment';

const {WHITE, NEUTRAL_500, TEXT_GREY_100} = Colors;

const styles = StyleSheet.create({
  dayCard: {
    marginHorizontal: 8,
    marginVertical: 4,
    paddingVertical: 12,
    borderRadius: 20,
    width: 60,
    height: 72,
  },
  day: {
    backgroundColor: WHITE,
  },
  selectedDay: {
    backgroundColor: NEUTRAL_500,
  },
  textDate: {
    marginTop: 12,
  },
  pastDay: {
    backgroundColor: TEXT_GREY_100,
  },
});
interface DayProps {
  date: Moment;
  selectedDate: Moment;
  setSelectedDate: (args: Moment) => void;
  onChange: (args: Moment) => void;
  isPast: boolean;
}

const IndividualDay = ({
  date,
  selectedDate,
  setSelectedDate,
  onChange,
  isPast,
}: DayProps) => {
  const isSelected = selectedDate.isSame(date, 'day');
  const isFuture = date.isAfter(moment(), 'day'); // Check if the date is in the future
  const cardStyle = isSelected
    ? styles.selectedDay
    : isPast
    ? isFuture
      ? styles.day
      : styles.pastDay
    : styles.day;
  const fontColor = isSelected
    ? 'white'
    : isPast
    ? isFuture
      ? 'black'
      : 'warning'
    : 'black'; // Set font color based on selected, future, and isPast props
  const handleDatePress = () => {
    if (isFuture) {
      setSelectedDate(date);
      onChange(date);
    }
  };

  return (
    <Card
      overrideStyle={[styles.dayCard, cardStyle]}
      onClick={handleDatePress}
      disabled={isPast && !isFuture} // Disable future days if isPast is false
    >
      <Flex center>
        <Text color={fontColor}>{date.format('ddd')}</Text>
        <Text color={fontColor} overrideStyle={styles.textDate} size={22}>
          {date.format('D')}
        </Text>
      </Flex>
    </Card>
  );
};
export default IndividualDay;

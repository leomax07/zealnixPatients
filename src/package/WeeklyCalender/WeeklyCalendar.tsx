import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import moment, {Moment} from 'moment';
import IndividualDay from './IndividualDay';
import {Button, Flex, Icons, Text} from 'squashapps-react-native-uikit';

const {SvgArrowLeft, SvgArrowRight} = Icons;

const styles = StyleSheet.create({
  weekHeader: {
    margin: 8,
  },
  overAll: {
    marginTop: 12,
  },
});
type Props = {
  date?: string;
  startDate?: Moment;
  endDate?: Moment;
  format?: string;
  onDateChange: (args: Moment) => void;
  isPast?: boolean;
};
const WeekCalendar = ({
  date,
  format = 'MM-DD-YYYY',
  endDate,
  startDate,
  onDateChange,
  isPast,
}: Props) => {
  const [week, setWeek] = useState<Moment>(
    moment(startDate || moment().date().toString(), format),
  );
  const [days, setDays] = useState<Moment[]>([]);
  const [selectedDate, setSelectedDate] = useState(
    moment(date || moment().date().toString(), format),
  );

  useEffect(() => {
    const startOfWeek = week.clone().startOf('week');
    const endOfWeek = week.clone().endOf('week');

    const newDays = [];
    let day = startOfWeek;

    while (day <= endOfWeek && (!endDate || day <= moment(endDate, format))) {
      newDays.push(day);
      day = day.clone().add(1, 'day');
    }

    setDays([...newDays]);
  }, [week, startDate, endDate, date]);

  const handlePrevWeek = useCallback(() => {
    setWeek(prevWeek => prevWeek.clone().subtract(1, 'week'));
  }, [onDateChange]);

  const handleNextWeek = useCallback(() => {
    setWeek(prevWeek => prevWeek.clone().add(1, 'week'));
  }, [onDateChange]);

  return (
    <Flex overrideStyle={styles.overAll}>
      <Flex row center between overrideStyle={styles.weekHeader}>
        <Button type="link" onClick={handlePrevWeek}>
          <SvgArrowLeft />
        </Button>
        <Text type="heading500">{week.format('MMMM YYYY')}</Text>
        <Button type="link" onClick={handleNextWeek}>
          <SvgArrowRight />
        </Button>
      </Flex>
      <FlatList
        data={days}
        renderItem={({item, index}) => (
          <IndividualDay
            key={index}
            date={item}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            onChange={onDateChange}
            isPast={isPast}
          />
        )}
        keyExtractor={(_item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </Flex>
  );
};

export default WeekCalendar;

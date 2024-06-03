import React, {useCallback, useState} from 'react';
import {
  getColors,
  Colors,
  StyleSheet,
  Icons,
} from 'squashapps-react-native-uikit';
import {Calendar} from 'react-native-calendars';
import moment, {Moment} from 'moment';
import {APP_THEME} from '../../utils/constants';

const {SvgArrowLeft, SvgArrowRight} = Icons;

const {PRIMARY_COLOR_50, PRIMARY_COLOR_500, WHITE} =
  getColors(APP_THEME);

const styles = StyleSheet.create({
  selectedDates: {
    color: PRIMARY_COLOR_500,
    textColor: Colors.WHITE,
    marked: true,
    dotColor: PRIMARY_COLOR_500,
  },
  inbetweenDays: {
    color: PRIMARY_COLOR_50,
    textColor: Colors.BLACK,
  },
});

type CalenderProp = {
  selectedPeriod: {[start: string]: any};
  onPeriodChange: (args: any) => void;
};

const PeriodSelectionCalender = ({
  selectedPeriod,
  onPeriodChange,
}: CalenderProp) => {
  const [numClicks, setNumClicks] = useState(0);
  const handleDayPress = useCallback(
    (day: Moment) => {
      const dateString = day.format('YYYY-MM-DD');
      const updatedSelectedPeriod = {...selectedPeriod};
      const keys = Object.keys(updatedSelectedPeriod);
      if (numClicks === 2) {
        setNumClicks(0);
        onPeriodChange({});
        return;
      }

      if (keys.length === 0) {
        updatedSelectedPeriod[dateString] = styles.selectedDates;
      } else {
        const startDate = keys[0];
        const endDate = dateString;
        if (startDate === endDate) {
          setNumClicks(0);
          onPeriodChange({});
          return;
        }

        updatedSelectedPeriod[endDate] = styles.selectedDates;
        let currentDate = moment(startDate);
        while (currentDate.isBefore(moment(endDate).subtract(1, 'days'))) {
          currentDate = currentDate.add(1, 'days');
          updatedSelectedPeriod[currentDate.format('YYYY-MM-DD')] =
            styles.inbetweenDays;
        }
        setNumClicks(prev => prev + 1);
      }
      onPeriodChange(updatedSelectedPeriod);
    },
    [selectedPeriod, onPeriodChange, numClicks],
  );
  return (
    <Calendar
      renderArrow={direction =>
        direction === 'left' ? (
          <SvgArrowLeft height={18} width={18} />
        ) : (
          <SvgArrowRight height={18} width={18} />
        )
      }
      theme={{
        textSectionTitleColor: '#727A83',
        selectedDayTextColor: WHITE,
        todayTextColor: PRIMARY_COLOR_500,
        dayTextColor: '#070C18',
        textMonthFontFamily: 'urbanist-bold',
        textMonthFontWeight: 'bold',
        textDayFontFamily: 'urbanist-regular',
        textDayHeaderFontFamily: 'urbanist-bold',
        textMonthFontSize: 16,
        textDayFontSize: 14,
        textDayHeaderFontSize: 14,
      }}
      markingType="period"
      markedDates={selectedPeriod}
      onDayPress={date => handleDayPress(moment(date.timestamp))}
    />
  );
};

export default PeriodSelectionCalender;

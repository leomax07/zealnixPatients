import {FormikProps} from 'formik';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  Text,
  Modal,
  Icons,
  Colors,
  Flex,
  Button,
  LabelWrapper,
  ButtonGroup,
} from 'squashapps-react-native-uikit';
import {formType} from './OrderListScreen';
import {orderStatus} from './mock';
import PeriodSelectionCalender from '../../package/MonthlyCalender/PeriodSelectionCalender';

type Props = {
  formik: FormikProps<formType>;
  open: boolean;
  close: () => void;
};

const {SvgClose} = Icons;
const styles = StyleSheet.create({
  overAll: {
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    padding: 30,
  },
  inputMarignBottom: {
    marginBottom: 16,
  },
  title: {
    marginBottom: 12,
  },
  saveBtn: {
    marginTop: 30,
  },
  images: {
    height: 193,
    width: 193,
    marginBottom: 32,
  },
  filterText: {
    marginBottom: 30,
  },
  filterDate: {
    marginTop: 30,
  },
});

const OrderPopUp = ({open, close, formik}: Props) => {
  const [selectedPeriod, setSelectedPeriod] = useState<{[start: string]: any}>(
    {},
  );

  return (
    <Modal isVisible={open}>
      <Flex overrideStyle={styles.overAll}>
        <Flex row center middle between overrideStyle={styles.title}>
          <Text align="center" type="heading500">
            Filter Orders
          </Text>
          <Button onClick={close} type="link">
            <SvgClose />
          </Button>
        </Flex>
        <Text type="body100" color="gray" overrideStyle={styles.filterText}>
          Filter Orders based on the order details.
        </Text>
        <LabelWrapper label="Order Status">
          <ButtonGroup
            onChange={formik.handleChange('orderStatus')}
            buttons={orderStatus}
          />
        </LabelWrapper>
        <Flex overrideStyle={styles.filterDate}>
          <LabelWrapper label="Filter Date">
            <PeriodSelectionCalender
              selectedPeriod={selectedPeriod}
              onPeriodChange={setSelectedPeriod}
            />
          </LabelWrapper>
        </Flex>
        <Button onClick={formik.handleSubmit} overrideStyle={styles.saveBtn}>
          Apply Filter
        </Button>
      </Flex>
    </Modal>
  );
};

export default OrderPopUp;

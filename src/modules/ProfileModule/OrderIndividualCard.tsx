import React from 'react';
import {View} from 'react-native';
import {
  Card,
  Flex,
  Text,
  Icons,
  StyleSheet,
  Colors,
} from 'squashapps-react-native-uikit';
import {useNavigation} from '@react-navigation/native';
import TitleWithValue from '../../common/TitleWithValue';

const {
  SvgDot,
  SvgAppointments,
  SvgMapOutline,
  SvgOrderTick,
  SvgStoreBasket,
  SvgThreeDotCircleFilled,
  SvgCloseFilled,
} = Icons;
const styles = StyleSheet.create({
  flexRight: {
    marginLeft: 8,
  },
  flexRightList: {
    marginLeft: 24,
  },
  circule: {
    width: 8,
    height: 8,
    borderRadius: 100,
    backgroundColor: Colors.TEXT_GREY_500,
    marginHorizontal: 6,
  },
  des: {
    marginTop: 4,
  },
  desList: {
    marginBottom: 2,
  },
  overAll: {
    padding: 12,
    margin: 16,
  },
  flexTop: {
    marginTop: 8,
  },
  detailsList: {
    marginTop: 14,
    marginBottom: 20,
  },
  flexMarLeft: {
    marginLeft: 8,
  },
  hr: {
    borderTopWidth: 1,
    borderTopColor: Colors.TEXT_GREY_50,
  },
  textRight: {
    marginRight: 8,
  },
});
type Prop = {
  id: string;
  item: {
    name: string;
    strip: string;
    tablet: string;
  }[];
  date: string;
  location: string;
  inTransit?: Boolean;
  price: string;
  deliveryDate: string;
  payment: string;
  delivery: string;
};

type DeliverTypeProp = {
  deliveryDate: string;
  delivery: string;
};
const DeliverType = ({deliveryDate, delivery}: DeliverTypeProp) => {
  const isInProgress = delivery === 'inprogress';
  const isCancelled = delivery === 'Canceled';
  const deliveryData = isInProgress ? 'Expected Delivery' : deliveryDate;
  const deliveryColor = isCancelled ? 'error' : 'success';
  const deliveryStatus = isInProgress ? (
    <Text type="heading400">{deliveryDate}</Text>
  ) : (
    <Flex row center overrideStyle={styles.des}>
      {isCancelled ? <SvgCloseFilled /> : <SvgOrderTick />}
      <Text
        color={deliveryColor}
        type="heading400"
        overrideStyle={{
          marginLeft: 4,
        }}>
        {delivery}
      </Text>
    </Flex>
  );

  return (
    <Flex overrideStyle={styles.des}>
      <Text color="gray" type="body200">
        {deliveryData}
      </Text>
      {deliveryStatus}
    </Flex>
  );
};
const OrderIndividualCard = ({
  id,
  item,
  date,
  location,
  inTransit,
  price,
  deliveryDate,
  payment,
  delivery,
}: Prop) => {
  const navigation = useNavigation();
  const pendingLength = item?.length - 1;
  const isPending = payment === 'Pending';
  const paymentIcon = isPending ? (
    <SvgThreeDotCircleFilled />
  ) : (
    <SvgOrderTick />
  );
  const paymentTextColor = isPending ? 'inprogress' : 'success';
  const handleCardClick = () => {
    navigation.navigate('orderDetailScreen');
  };
  return (
    <Card
      align="stretch"
      overrideStyle={styles.overAll}
      onClick={handleCardClick}>
      <Flex>
        <Flex row between>
          <TitleWithValue
            marginBottom={0}
            titleSize="heading400"
            titleColor="gray"
            title="Order ID :"
            value={id}
            valueSize="heading400"
          />
          {inTransit && (
            <Text type="body300" color="error">
              <SvgDot fill="#FF5B16" /> In Transit
            </Text>
          )}
        </Flex>
        <Flex row center overrideStyle={styles.flexTop}>
          <Text size={12} color="gray">
            {item[0]?.name}
          </Text>
          <View style={styles.circule} />
          <Text size={12} color="gray">
            {`${item[0].strip} Strip (${item[0].tablet}) `}
          </Text>
          {pendingLength > 0 && (
            <Text size={12} color="gray">
              + {pendingLength} item
            </Text>
          )}
        </Flex>
        <Flex row center between middle overrideStyle={styles.detailsList}>
          <Flex row center>
            <SvgAppointments
              height={13}
              width={13}
              fill={Colors.TEXT_GREY_500}
            />
            <Text overrideStyle={styles.flexMarLeft} type="heading400">
              {date}
            </Text>
          </Flex>
          <Flex row center>
            <SvgStoreBasket />
            <Text overrideStyle={styles.flexMarLeft} type="heading400">
              {item?.length} Items
            </Text>
          </Flex>
          <Flex row center>
            <SvgMapOutline />
            <Text overrideStyle={styles.flexMarLeft} type="heading400">
              {location}
            </Text>
          </Flex>
        </Flex>
        <View style={styles.hr} />
        <Flex row between overrideStyle={styles.des}>
          <Flex>
            <Text color="gray">Order Value</Text>
            <Flex row center overrideStyle={styles.des}>
              <Text type="heading500" overrideStyle={styles.textRight}>
                {price}
              </Text>
              {paymentIcon}
              <Text
                color={paymentTextColor}
                type="body200"
                overrideStyle={{
                  marginLeft: 8,
                }}>
                {payment}
              </Text>
            </Flex>
          </Flex>
          <DeliverType deliveryDate={deliveryDate} delivery={delivery} />
        </Flex>
      </Flex>
    </Card>
  );
};

export default OrderIndividualCard;

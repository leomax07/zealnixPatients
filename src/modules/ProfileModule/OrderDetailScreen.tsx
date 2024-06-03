import React from 'react';
import {
  Flex,
  StyleSheet,
  Text,
  Card,
  Colors,
  Image,
} from 'squashapps-react-native-uikit';
import {FlatList, ScrollView, View} from 'react-native';
import DeliveryCard from './DeliveryCard';
import TitleWithValue from '../../common/TitleWithValue';
import PrescriptionCard from '../PrescribeModule/PrescriptionCard';
import MapViewStatic from '../../common/MapViewStatic';

const styles = StyleSheet.create({
  overAll: {
    padding: 20,
  },
  cardOverAll: {
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
  },
  headingStyle: {
    marginBottom: 12,
  },
  mapCard: {
    height: 150,
    marginBottom: 28,
    marginRight: 40,
  },
  line: {
    borderBottomColor: Colors.TEXT_GREY_50,
    borderBottomWidth: 1,
    marginBottom: 16,
  },
  btn: {
    marginVertical: 16,
  },
  price: {
    width: 60,
  },
  paragraph: {
    marginBottom: 20,
  },
  cardNumber: {
    marginLeft: 12,
  },
  listEmpty: {height: 50},
  title: {marginTop: 20},
});
const OrderDetailScreen = () => {
  const location = {latitude: 11.6293632, longitude: 78.1615104};

  return (
    <ScrollView bounces={false} contentContainerStyle={styles.overAll}>
      <DeliveryCard />
      <TitleWithValue
        between
        titleSize="heading500"
        title="Order Contents"
        value={
          <Flex row>
            <Text type="body100" color="gray">
              Ordered on
            </Text>
            <Text type="body100">May 12 2022</Text>
          </Flex>
        }
      />
      <FlatList
        data={[{}, {}, {}]}
        keyExtractor={(_item, index) => index.toString()}
        renderItem={() => (
          <Card align="stretch" overrideStyle={styles.cardOverAll}>
            <PrescriptionCard isTime />
          </Card>
        )}
        ListFooterComponent={<View style={styles.listEmpty} />}
      />
      <Flex row overrideStyle={styles.headingStyle}>
        <Text type="heading500">Delivery Address</Text>
      </Flex>

      <Text color="gray" overrideStyle={styles.paragraph}>
        Shop No 2, 320,ground Floor, Ebrahim Rahimtulla Road, Mandvi, Mumbai,
        Maharashtra
      </Text>
      <MapViewStatic
        latitude={location.latitude}
        longitude={location.longitude}
      />

      <Text
        type="heading500"
        overrideStyle={[styles.headingStyle, styles.title]}>
        Payment Summary :
      </Text>
      <TitleWithValue
        between
        title="Order Total"
        titleSize="body300"
        titleColor="gray"
        value={
          <Text align="left" overrideStyle={styles.price}>
            ₹ 234
          </Text>
        }
      />
      <TitleWithValue
        between
        title="Shipping"
        titleSize="body300"
        titleColor="gray"
        value={
          <Text align="left" overrideStyle={styles.price}>
            ₹ 0
          </Text>
        }
      />
      <View style={styles.line} />
      <TitleWithValue
        between
        title="Total"
        titleSize="body300"
        value={
          <Text
            align="left"
            type="heading500"
            color="link"
            overrideStyle={styles.price}>
            ₹ 234
          </Text>
        }
      />
      <Text
        type="heading500"
        overrideStyle={[styles.headingStyle, styles.title]}>
        Payment Summary :
      </Text>
      <Flex row between center middle>
        <Flex row>
          <Image
            src="https://i.ibb.co/r2h1QZy/Vector-2.png"
            height={20}
            width={20}
          />
          <Text overrideStyle={styles.cardNumber}>XXXX 9897</Text>
        </Flex>
        <Text type="heading500">₹ 234</Text>
      </Flex>
      <TitleWithValue
        titleColor="gray"
        title="Transaction ID :"
        titleSize="body200"
        valueSize="body200"
        value="234234343433"
        valueColor="gray"
      />
    </ScrollView>
  );
};
export default OrderDetailScreen;

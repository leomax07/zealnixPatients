import React from 'react';
import {FlatList, View} from 'react-native';
import {Flex, StyleSheet, Colors} from 'squashapps-react-native-uikit';
import SearchBar from '../../common/SearchBar';
import PrescriptionCard from './PrescriptionCard';

const styles = StyleSheet.create({
  overAll: {
    marginLeft: 20,
    marginTop: 24,
  },
  statusBar: {
    marginHorizontal: 12,
    marginTop: 20,
    marginBottom: 16,
  },
  overAllContainer: {
    backgroundColor: Colors.WHITE,
  },
});

const AllMedicineListScreen = () => {
  return (
    <Flex overrideStyle={styles.overAllContainer}>
      <Flex overrideStyle={styles.statusBar}>
        <SearchBar isFilter placeholder="Search Medicines" />
      </Flex>
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={[{}, {}, {}, {}, {}, {}, {}, {}]}
        keyExtractor={(_item, index) => index.toString()}
        renderItem={() => (
          <Flex overrideStyle={styles.overAll}>
            <PrescriptionCard imageHeight={50} imageWidth={50} />
          </Flex>
        )}
        ListFooterComponent={<View style={{height: 100}} />}
      />
    </Flex>
  );
};
export default AllMedicineListScreen;

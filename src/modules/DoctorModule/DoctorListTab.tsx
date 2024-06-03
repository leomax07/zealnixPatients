/* eslint-disable */
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import {
  Flex,
  SelectTag,
  ButtonGroup,
  Loader,
} from 'squashapps-react-native-uikit';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from '../../common/SearchBar';
import DoctorListCard from './DoctorListCard';
import { Department } from './store/doctor.types';
import { AppDispatch, RootState } from '../../redux/store';
import {
  doctorDetailsMiddleWare,
  doctorListMiddleWare,
} from './store/doctorMiddleware';
import { branchListMiddleWare } from '../LoginModule/store/loginMiddleWare';
import { USER_PROFILE } from '../../utils/constants';
import { getDepartmentType } from '../HomeModule/HomeScreen';
import { BranchResponseProp } from '../LoginModule/store/login.types';
import { doctorCategory, doctorList } from './mock';

const styles = StyleSheet.create({
  overAll: {
    padding: 20,
  },
  margin12: {
    marginTop: 12,
  },
  buttongrp: {
    marginVertical: 20,
  },
});

type doctorListTab = {
  cateogry: string;
};

const DoctoListTab = ({ cateogry }: doctorListTab) => {
  const dispatch: AppDispatch = useDispatch();
  const navigation = useNavigation();
  const [departmentId, setDepartmentId] = useState<string>(cateogry);

  const {
    data,
    branchListData,
    isLoading,
    departmentList,
    profileData,
    doctorDetailsLoader,
  } = useSelector(
    ({
      branchReducers,
      departmentListReducers,
      doctorListReducers,
      profileReducers,
      doctorDetailsReducers,
    }: RootState) => {
      return {
        branchListData: branchReducers.branch,
        isLoading: branchReducers.isLoading,
        departmentList: departmentListReducers.departmentList,
        isDepartmentLoading: departmentListReducers.isLoading,
        data: doctorListReducers.data,
        profileData: profileReducers.data,
        doctorDetailsLoader: doctorDetailsReducers.isLoading,
      };
    },
  );
  const [branchId, setBranchId] = useState<string>('All');

  // useEffect(() => {
  //   dispatch(branchListMiddleWare({hospitalId: profileData.hospitalId}));
  // }, []);

  // useEffect(() => {
  //   dispatch(
  //     doctorListMiddleWare({
  //       where: {
  //         type: 'doctor',
  //         ...(branchId !== 'All' && { branchId }),
  //         ...(departmentId !== 'All' && { departmentId }),
  //       },
  //     }),
  //   );
  // }, [departmentId, branchId]);

  const handleDepartment = (id: string) => {
    setDepartmentId(id);
  };

  const handleBranch = (id: string) => {
    setBranchId(id);
  };

  function departmentListConverted(array: Department[]) {
    const convertedArray = array.map(item => {
      return { label: item?.name, value: item?.id };
    });

    convertedArray.unshift({ label: 'All', value: 'All' });

    return convertedArray;
  }
  function branchListConverted(array: BranchResponseProp[]) {
    const defaultBranch = {
      name: 'All',
      id: 'All',
      branchID: '',
      address: '',
      pinCode: '',
      city: '',
      state: '',
      country: '',
      status: '',
      email: '',
      phone: '',
      isMainBranch: false,
      hospitalId: '',
      createdBy: '',
      createdAt: '',
      updatedAt: '',
    };

    const convertedArray = [...array, defaultBranch];
    return convertedArray;
  }

  const handleNavigate = (id: string) => {
    navigation.navigate('DoctorDetailScreen', {
      id: "",
    });

  };

  return (
    <>
      {doctorDetailsLoader || (isLoading && <Loader />)}

      <ScrollView nestedScrollEnabled style={styles.overAll}>
        <Flex>
          <SearchBar placeholder="Search doctors" />
        </Flex>
        <Flex overrideStyle={[styles.margin12, { zIndex: 22 }]}>
          <SelectTag
            onChange={handleBranch}
            value={branchId}
            valueKey="value"
            labelKey="label"
            options={doctorCategory}
            placeholder="Branch Name"
          />
        </Flex>

        <Flex overrideStyle={styles.buttongrp}>
          <ButtonGroup
            isShadow
            onChange={handleDepartment}
            defaultValue={departmentId}
            activeButtonColor="#3366FF"
            buttons={doctorCategory}
          />
        </Flex>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={doctorList}
          keyExtractor={(_item, index) => index.toString()}
          renderItem={({ item }) => (
            <DoctorListCard
              onClick={() => handleNavigate()}
              image={
                item?.profileImageUrl ? item?.profileImageUrl : USER_PROFILE
              }
              icon={getDepartmentType(item?.department, 33)}
              isSearch
              doctorName={item?.name}
              doctorType={item?.department}
              branch={item?.branch}
            />
          )}
          ListFooterComponent={<View style={{ height: 60 }} />}
        />
      </ScrollView>
    </>
  );
};

export default DoctoListTab;

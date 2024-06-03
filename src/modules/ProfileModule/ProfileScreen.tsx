import React, {useCallback, useEffect, useState} from 'react';
import {
  Flex,
  Text,
  Image,
  getColors,
  StyleSheet,
  Button,
  Switch,
  Loader,
} from 'squashapps-react-native-uikit';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import CustomStatusBar from '../../common/CustomStatusBar';
import LogoHeader from '../../common/LogoHeader';
import {APP_THEME, USER_PROFILE} from '../../utils/constants';
import {AppDispatch, RootState} from '../../redux/store';
import TitleWithValue from '../../common/TitleWithValue';
import {logOut} from '../LoginModule/store/loginReducer';
import WalletCard from './WalletCard';
import {getUserMiddleWare} from './store/profileMiddleware';

const {PRIMARY_COLOR_50} = getColors(APP_THEME);

const styles = StyleSheet.create({
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: PRIMARY_COLOR_50,
    marginTop: 20,
    marginBottom: 30,
  },
  nameContainer: {
    marginLeft: 24,
  },
  profileImg: {
    height: 70,
    width: 70,
    borderRadius: 50,
  },
  btnStyle: {
    marginTop: 30,
    marginBottom: 40,
    borderColor: '#EBF1F4',
  },
  mainContainer: {
    marginHorizontal: 24,
    marginTop: 24,
  },
});

const ProfileScreen = () => {
  const navigation = useNavigation();
  const dispatch: AppDispatch = useDispatch();
  const [notification, setNotification] = useState(false);

  useEffect(() => {
    dispatch(getUserMiddleWare());
  }, []);

  const {isLoading, data} = useSelector(({profileReducers}: RootState) => {
    return {
      isLoading: profileReducers.isLoading,
      data: profileReducers.data,
    };
  });

  const handleNotification = () => {
    setNotification(!notification);
  };

  const handleLogout = () => {
    dispatch(logOut(null));
  };

  const handleWallet = () => {
    navigation.navigate('WalletScreen');
  };

  const handleOrder = () => {
    navigation.navigate('OrderListScreen');
  };

  const handleProfile = () => {
    navigation.navigate('EditProfileScreen');
  };

  return (
    <>
      {isLoading && <Loader />}
      <CustomStatusBar />
      <ScrollView>
        <Flex between flex={1}>
          <Flex>
            <LogoHeader title="Profile" />
            <Flex overrideStyle={styles.mainContainer}>
              <Flex row>
                <Image
                  src={
                    data?.profileImageUrl ? data?.profileImageUrl : USER_PROFILE
                  }
                  overrideStyle={styles.profileImg}
                />
                <Flex middle overrideStyle={styles.nameContainer}>
                  <Text transform="capitalize" type="heading600">
                    {data?.name}
                  </Text>
                  <Button
                    overrideStyle={{marginTop: 5}}
                    onClick={handleProfile}
                    type="link">
                    <Text type="heading200" color="link">
                      Edit Profile
                    </Text>
                  </Button>
                </Flex>
              </Flex>
              <WalletCard onClick={handleWallet} />
              <TouchableOpacity onPress={handleOrder}>
                <TitleWithValue between title="Orders" />
              </TouchableOpacity>

              <View style={styles.borderBottom} />
              <TitleWithValue between title="Saved Shorts" />
              <View style={styles.borderBottom} />
              <TitleWithValue
                between
                title="Notification"
                value={
                  <Switch checked={notification} onClick={handleNotification} />
                }
              />
              <View style={styles.borderBottom} />

              <TitleWithValue
                between
                title="Change Language"
                value={<Button type="link">English</Button>}
              />
            </Flex>
          </Flex>
          <Flex overrideStyle={styles.mainContainer}>
            <Button
              onClick={handleLogout}
              type="secondary"
              overrideStyle={styles.btnStyle}>
              <Text bold>Logout</Text>
            </Button>
          </Flex>
        </Flex>
      </ScrollView>
    </>
  );
};

export default ProfileScreen;

import React, {useEffect, useMemo, useState} from 'react';
import {Flex, Loader} from 'squashapps-react-native-uikit';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import CustomStatusBar from '../../common/CustomStatusBar';
import {AppDispatch, RootState} from '../../redux/store';
import {
  feedsListMiddleWare,
  feedsProfileListMiddleWare,
} from './store/reelsMiddleware';
import ReelsEmpty from './ReelsEmpty';
import ReelsList from './ReelsList';

const ReelsScreen = () => {
  const navigation = useNavigation();
  const [isCurrentIndex, setCurrentIndex] = useState(0);
  const dispatch: AppDispatch = useDispatch();
  const isFocused = useIsFocused();
  const [isLoader, setLoader] = useState(false);

  useEffect(() => {
    if (isFocused) {
      dispatch(feedsListMiddleWare({}));
    }
  }, [isFocused]);

  const {data, isLoading} = useSelector(({feedListReducers}: RootState) => {
    return {
      data: feedListReducers?.data,
      isLoading: feedListReducers.isLoading,
    };
  });

  const handleProfileNavigate = (value: string) => {
    setLoader(true);
    dispatch(feedsProfileListMiddleWare({createdById: value})).then(() => {
      setLoader(false);
      navigation.navigate('ReelsProfileScreen');
    });
  };

  const onChangeIndex = ({index}: any) => {
    setCurrentIndex(index);
  };

  const result = useMemo(() => {
    return data;
  }, [data]);

  return (
    <>
      {(isLoading || isLoader) && <Loader />}
      <CustomStatusBar />
      <Flex overrideStyle={{position: 'relative', zIndex: 0, flex: 1}}>
        <SwiperFlatList
          vertical
          index={0}
          data={result}
          renderItem={({item, index}) => (
            <ReelsList
              isCurrentIndex={isCurrentIndex}
              handleProfileNavigate={handleProfileNavigate}
              item={item}
              index={index}
            />
          )}
          ListEmptyComponent={<ReelsEmpty />}
          keyExtractor={(_item, index) => index.toString()}
          onChangeIndex={onChangeIndex}
          style={{flex: 1}}
        />
      </Flex>
    </>
  );
};

export default ReelsScreen;

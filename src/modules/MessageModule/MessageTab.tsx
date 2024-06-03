import * as React from 'react';
import {FlatList} from 'react-native';
import MessageCard from './MessageCard';
import {messageData} from './mock';

const MessageTab = () => {
  return (
    <FlatList
      data={messageData}
      keyExtractor={(_item, index) => index.toString()}
      renderItem={({item, index}) => (
        <MessageCard
          key={index}
          doctorName={item?.doctorName}
          appointmentTime={item?.appointmentTime}
          notificationTime={item?.notificationTime}
          title={item?.title}
          background={item?.background}
          isRemainder={item?.isRemainder}
        />
      )}
    />
  );
};

export default MessageTab;

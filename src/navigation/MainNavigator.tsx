import React, {createContext, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Loader} from 'squashapps-react-native-uikit';
import {useSelector} from 'react-redux';
import {useAuth} from '../utils/authCheck';
import {RootState} from '../redux/store';
import LoginScreen from '../modules/LoginModule/LoginScreen';
import PrescribeMedicineScreen from '../modules/PrescribeModule/PrescribeMedicineScreen';
import AllMedicineListScreen from '../modules/PrescribeModule/AllMedicineListScreen';
import PaymentScreen from '../modules/DoctorModule/PaymentScreen';
import PlaceOrderScreen from '../modules/PrescribeModule/PlaceOrderScreen';
import OnboardingScreen from '../modules/LoginModule/OnBoardingScreen';
import SignUpScreen from '../modules/LoginModule/SignUpScreen';
import OTPVerification from '../modules/LoginModule/OTPVerificationScreen';
import VideoCallScreen from '../modules/VideoCallModule/VideoCallScreen';
import MessageConfirmationScreen from '../modules/MessageModule/MessageConfirmationScreen';
import { setAuthorization } from '../utils/apiConfig';
import BottomTab from './BottomTab';
import Header from './Header';
import {AuthStackParamList, RootStackParamList} from './types';


const Stack = createNativeStackNavigator<RootStackParamList>();
const AuthStack = createNativeStackNavigator<AuthStackParamList>();

type ContextPropsType = {
  logOut?: any;
  logIn?: any;
};

const AuthContext = createContext<ContextPropsType>({});

const MainNavigator = () => {
  const [isLoading, setLoading] = useState(false);
  const {userData, isLoader} = useSelector(({userReducers}: RootState) => {
    return {
      userData: userReducers.data,
      isLoader: userReducers.isLoader,
    };
  });

  const {authContext} = useAuth(setLoading);

  if (userData?.token) {
    setAuthorization(userData?.token);
  }

  if (isLoader || isLoading) {
    return <Loader />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      {userData?.isLogin ? (
        <Stack.Navigator initialRouteName="BottomTab">
          <Stack.Screen
            options={{headerShown: false}}
            name="BottomTab"
            component={BottomTab}
          />
          <Stack.Screen
            options={{
              header: props => Header({props}),
              title: 'Prescribe Medicine',
            }}
            name="PrescribeMedicineScreen"
            component={PrescribeMedicineScreen}
          />

          <Stack.Screen
            options={{
              header: props => Header({props}),
              title: 'Prescribe Medicine',
            }}
            name="AllMedicineListScreen"
            component={AllMedicineListScreen}
          />
          <Stack.Screen
            options={{
              header: props => Header({props}),
              title: 'Place Order',
            }}
            name="PlaceOrderScreen"
            component={PlaceOrderScreen}
          />

          <Stack.Screen
            options={{
              header: props => Header({props}),
              title: 'Payment',
            }}
            name="PaymentScreen"
            component={PaymentScreen}
          />
                <Stack.Screen
            options={{
              headerShown:false
            }}
            name="VideoCallScreen"
            component={VideoCallScreen}
          />

          <Stack.Screen
            options={{
              header: props => Header({props}),
              title: 'Confirmation',
            }}
            name='MessageConfirmationScreen' 
            component={MessageConfirmationScreen} 
            />
        </Stack.Navigator>
      ) : (
        <AuthStack.Navigator initialRouteName="onBoardingScreen">
          <AuthStack.Screen
            options={{headerShown: false}}
            name="onBoardingScreen"
            component={OnboardingScreen}
          />

          <AuthStack.Screen
            options={{headerShown: false}}
            name="LoginScreen"
            component={LoginScreen}
          />
          <AuthStack.Screen
            options={{headerShown: false}}
            name="SignUpScreen"
            component={SignUpScreen}
          />
          <AuthStack.Screen
            options={{headerShown: false}}
            name="OTPVerificationScreen"
            component={OTPVerification}
          />
        </AuthStack.Navigator>
      )}
    </AuthContext.Provider>
  );
};

export default MainNavigator;

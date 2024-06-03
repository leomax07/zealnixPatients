/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */
import {StackNavigationProp} from '@react-navigation/stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  HomeScreen: undefined;
  BottomTab: {
    screen?: any;
    params?: any;
  };
  MessageScreen: undefined;
  ProfileScreen: undefined;
  WalletScreen: undefined;
  TopUpScreen: undefined;
  AppointmentsScreen: undefined;
  ChatScreen: undefined;
  AppointmentDetailsScreen: undefined;
  PlaceOrderScreen: undefined;
  PrescribeMedicineScreen: {
    appointmentId?: string;
  };
  AllMedicineListScreen: undefined;
  InfoScreen: undefined;
  EditProfileScreen: undefined;
  DoctorListScreen: {
    type?: any;
  };
  DoctorDetailScreen: {
    id?: string;
  };
  NewAppointmentScreen: {
    id?: string;
  };
  PaymentScreen: {
    isGetLocation: any;
  };
  OrderListScreen: undefined;
  orderDetailScreen: undefined;
  VideoCallScreen: undefined;
  ReelsScreen: undefined;
  ReelsProfileScreen: undefined;
};

export type AuthStackParamList = {
  LoginScreen: undefined;
  onBoardingScreen: undefined;
  SignUpScreen: undefined;
  OTPVerificationScreen: undefined;
};

export type RootTabParamList = {
  HomeTab: undefined;
  MessageTab: undefined;
  AppointmentTab: undefined;
  ProfileTab: undefined;
  ReelsTab: undefined;
};

export type ProfileScreenNavigationProp =
  StackNavigationProp<RootStackParamList>;

export type AuthScreenNavigationProp = StackNavigationProp<AuthStackParamList>;

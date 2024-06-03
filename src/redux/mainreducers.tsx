import {
  appointmentSlotListReducers,
  doctorDetailsReducers,
  doctorListReducers,
} from '../modules/DoctorModule/store/doctorReducer';
import {
  userReducers,
  loginReducers,
  branchReducers,
  signupReducers,
} from '../modules/LoginModule/store/loginReducer';
import {
  todaysAppointmentReducers,
  departmentListReducers,
} from '../modules/HomeModule/store/homeReducer';
import {
  appoinmentDetailsReducers,
  appoinmentListHistoryReducers,
  appoinmentListReducers,
  postAppoinmentReducers,
  patchAppoinmentTokenReducers,
  labReportReducers,
} from '../modules/AppointmentModule/store/appointmentReducer';
import {profileReducers} from '../modules/ProfileModule/store/profileReducer';
import {prescriptionsListReducers} from '../modules/PrescribeModule/store/prescribeReducer';
import {
  feedListReducers,
  feedsProfileListReducers,
} from '../modules/ReelsModule/store/reelsReducer';

export const reducers = {
  userReducers,
  doctorListReducers,
  loginReducers,
  branchReducers,
  signupReducers,
  todaysAppointmentReducers,
  departmentListReducers,
  appoinmentDetailsReducers,
  profileReducers,
  doctorDetailsReducers,
  appoinmentListReducers,
  prescriptionsListReducers,
  appointmentSlotListReducers,
  postAppoinmentReducers,
  appoinmentListHistoryReducers,
  patchAppoinmentTokenReducers,
  labReportReducers,
  feedListReducers,
  feedsProfileListReducers,
};

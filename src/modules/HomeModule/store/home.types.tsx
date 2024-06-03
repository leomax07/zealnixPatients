import {AppointmentsList, Doctor, Patient} from '../../AppointmentModule/store/appointment.types';

export interface TodayAppointmentReducerState {
  isLoading: boolean;
  error: string;
  appointment: AppointmentsList[];
}


export interface Department {
  id: string;
  name: string;
  status: string;
  hospitalId: string;
  branchId: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  additionalProp1: AdditionalProp1;
}
export interface AdditionalProp1 {}

export interface DepartmentIntialState {
  isLoading: boolean;
  error: string;
  departmentList: Department[];
}

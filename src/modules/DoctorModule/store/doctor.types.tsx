import { Hospital } from '../../AppointmentModule/store/appointment.types';
import { BranchResponseProp } from '../../LoginModule/store/login.types';

export interface DoctorList {
  id: string;
  name: string;
  type: string;
  email: string;
  dutyInTime: number;
  dutyOutTime: number;
  status: string;
  phone: string;
  hospitalId: string;
  branchId: string;
  departmentId: string;
  designationId: string;
  salt: string;
  department: Department;
  profileImageUrl: string;
  branch: BranchResponseProp

}
export interface DoctorDetailList {
  id: string;
  name: string;
  type: string;
  email: string;
  dutyInTime: number;
  dutyOutTime: number;
  status: string;
  phone: string;
  hospitalId: string;
  branchId: string;
  departmentId: string;
  designationId: string;
  salt: string;
  department: Department;
  hospital: Hospital;
  branch: BranchResponseProp;
  profileImageUrl: string;

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
export interface AdditionalProp1 { }
export interface DoctorListReducerState {
  isLoading: boolean;
  error: string;
  data: DoctorList[];
}

export interface DoctorDetailsReducerState {
  isLoading: boolean;
  error: string;
  data: DoctorDetailList;
}

export interface GetDoctorListType {
  offset?: number;
  limit?: number;
  skip?: number;
  order?: null;
  id?: boolean;
  employeeId?: boolean;
  name?: boolean;
  type?: boolean;
  dateOfBirth?: boolean;
  email?: boolean;
  hospitalId?: boolean;
  branchId?: boolean;
  designationId?: boolean;
  departmentId?: boolean;

  dutyInTime?: boolean;
  profileImageUrl?: boolean;
  dutyOutTime?: boolean;
  status?: boolean;
  hash?: boolean;
  salt?: boolean;
  phone?: boolean;
  hospital?: boolean;
  branch?: boolean;
  department?: boolean;
  createdBy?: boolean;
  createdAt?: boolean;
  updatedAt?: boolean;
  where?: {
    type?: string;
    departmentId?: string;
    hospitalId?: string;
    branchId?: string;
  };
  include?: IncludeEntity[] | null;
}
export interface GetDoctorDetailsType {
  offset?: number;
  limit?: number;
  skip?: number;
  order?: null;
  id?: boolean;
  employeeId?: boolean;
  doctorId: string;
  name?: boolean;
  type?: boolean;
  hospitalId?: boolean;
  branchId?: boolean;
  designationId?: boolean;
  departmentId?: boolean;
  dateOfBirth?: boolean;
  email?: boolean;
  dutyInTime?: boolean;
  profileImageUrl?: boolean;

  dutyOutTime?: boolean;
  status?: boolean;
  hash?: boolean;
  salt?: boolean;
  phone?: boolean;
  hospital?: boolean;
  branch?: boolean;
  department?: boolean;
  createdBy?: boolean;
  createdAt?: boolean;
  updatedAt?: boolean;
  where?: {
    type?: string;
    departmentId?: string;
    hospitalId?: string;
    branchId?: string;
  };
  include?: IncludeEntity[] | null;
}
export interface IncludeEntity {
  relation: string;
}

export interface UserFilterType {
  id: boolean;
  employeeId: boolean;
  name: boolean;
  type: boolean;
  dateOfBirth: boolean;
  email: boolean;
  dutyInTime: boolean;
  dutyOutTime: boolean;
  status: boolean;
  hash: boolean;
  salt: boolean;
  phone: boolean;
  hospital: boolean;
  branch: boolean;
  department: boolean;
  createdBy: boolean;
  createdAt: boolean;
  updatedAt: boolean;
}

export interface SlotList {
  id: string;
  appointmentRangeStart: number;
  appointmentRangeEnd: number;
  regularSlot: number;
  prioritySlot: number;
  videoSlot: number;
  maxSlots: number;
  createdAt: string;
  updatedAt: string;
  doctorIds?: (string)[] | null;
  createdById: string;
  updatedById: string;
  hospitalId: string;
  branchId: string;
}

export interface appointmentSlotList {
  isLoading: boolean;
  error: string;
  data: SlotList[]
}
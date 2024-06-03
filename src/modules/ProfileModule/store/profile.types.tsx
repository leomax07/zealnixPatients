import {BranchResponseProp} from '../../LoginModule/store/login.types';

export interface User {
  id: string;
  name: string;
  email: string;
  isMobileAppLoginEnabled: boolean;
  phone: string;
  hospitalId: string;
  branchId: string;
  createdBy: string;
  branch: BranchResponseProp;
  profileImageUrl:string
  gender:string,
  dateOfBirth:string
}

export interface UserReducerState {
  isLoading: boolean;
  error: string;
  data: User;
}

export interface UserReducerPatchState {
  isLoading: boolean;
  error: string;
  data: UserPost;
}

export interface UserPost {
  id: string;
  name: string;
  email: string;
  isMobileAppLoginEnabled: boolean;
  phone: string;
  hospitalId: string;
  branchId: string;
  createdBy: string;
}

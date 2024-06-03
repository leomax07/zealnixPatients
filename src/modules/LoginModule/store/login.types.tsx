export interface LoginReducerState {
  isLoading: boolean;
  error: string;
  token: string;
}

export interface SignUp {
  id: string;
  name: string;
  gender: string;
  dateOfBirth: string;
  email: string;
  isMobileAppLoginEnabled: boolean;
  weightInKg: number;
  heightInCm: number;
  bloodGroup: string;
  phone: string;
  maritalStatus: string;
  address: string;
  pinCode: string;
  city: string;
  state: string;
  country: string;
  profilePicUrl: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
  emergencyContactRelationship: string;
  takingMedicationsCurrently: boolean;
  currentMedicationsDescription: string;
  reasonForVisit: string;
  drugAllergies: string;
  illnessHistory?: string[] | null;
  surgeryHistory?: (SurgeryHistoryEntity | string)[] | null;
  exerciseHabit: string;
  dietStyle: string;
  alcoholConsumption: string;
  caffeineConsumption: string;
  smokingHabit: string;
  medicalHistoryComments: string;
  status: string;
  hospitalId: string;
  branchId: string;
  createdBy: string;
  password?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  alternativePhoneNumber?: string | null;
  age?: number | null;
  emergencyContactPersonAge?: number | null;
  additionalProp1?: AdditionalProp1 | null;
  emergencyContactDOB?: string | null;
}
export interface SurgeryHistoryEntity {
  index: number;
  operationName: string;
  operationDate: string;
}
export interface AdditionalProp1 {}

export interface SignUpReducerState {
  isLoading: boolean;
  error: string;
  data: SignUp;
}

export interface SignUpPayload {
  name: string;
  email: string;
  password: string;
  branchId: string;
  phone: string;
  createdBy?: string;
  hospitalId?: string;
  isMobileAppLoginEnabled: boolean;
  status: string;
  gender:string,
  dateOfBirth:string,
}

export interface BranchResponseProp {
  id: string;
  branchID: string;
  name: string;
  address: string;
  pinCode: string;
  city: string;
  state: string;
  country: string;
  status: string;
  email: string;
  phone: string;
  isMainBranch: boolean;
  hospitalId: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}
export interface BranchReducerInitailState {
  isLoading: boolean;
  error: string;
  branch: BranchResponseProp[];
}

export interface BranchListPayload {
  offset?: number;
  limit?: number;
  skip?: number;
  hospitalId: string;
  id?: boolean;
  branchID?: boolean;
  name?: boolean;
  address?: boolean;
  pinCode?: boolean;
  city?: boolean;
  state?: boolean;
  country?: boolean;
  status?: boolean;
  email?: boolean;
  phone?: boolean;
  isMainBranch?: boolean;
  hospitalIdBool?: boolean;
  createdBy?: boolean;
  createdAt?: boolean;
  updatedAt?: boolean;
}
export interface UserFilterType {
  id: boolean;
  branchID: boolean;
  name: boolean;
  address: boolean;
  pinCode: boolean;
  city: boolean;
  state: boolean;
  country: boolean;
  status: boolean;
  email: boolean;
  phone: boolean;
  isMainBranch: boolean;
  hospitalId: boolean;
  createdBy: boolean;
  createdAt: boolean;
  updatedAt: boolean;
}

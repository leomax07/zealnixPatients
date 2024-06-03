export interface PrescriptionsList {
  quantity: number;
  id: string;
  dosageTimes: string;
  dosage: string;
  autoReorder: boolean;
  appointmentId: string;
  medicineId: string;
  medicine: MedicinesList;
}

export interface PrescriptionsListReducerState {
  isLoading: boolean;
  error: string;
  data: PrescriptionsList[];
}

export interface MedicinesList {
  id: string;
  drugName: string;
  manufacturer: string;
  purchaseDate: string;
  expiryDate: string;
  quantity: number;
  unitPrice: number;
}

export interface MedicinesListReducerState {
  isLoading: boolean;
  error: string;
  data: MedicinesList[];
}

export interface PresciptionPayload {
  offset?: number;
  limit?: number;
  skip?: number;
  order?: string;
  where?: Where;
  quantity?: boolean;
  id?: boolean;
  dosageTimes?: boolean;
  dosage?: boolean;
  autoReorder?: boolean;
  appointmentId?: boolean;
  medicineId?: boolean;
  include?: IncludeEntity[];
}
export interface Where {
  appointmentId?: string;
  additionalProp1?: AdditionalProp1;
}
export interface AdditionalProp1 {}

export interface IncludeEntity {
  relation: string;
}

export interface PresciptionList {
  quantity: Number;
  id?: string;
  dosageTimes: string;
  dosage: string;
  autoReorder: boolean;
  appointmentId: string;
  medicineId: string;
  medicine: MedicinesList;
}
export interface PatchPresciptionList {
  quantity: Number;
  id: string;
  dosageTimes: string;
  dosage: string;
  autoReorder: boolean;
  appointmentId: string;
  medicineId: string;
  medicine?: MedicinesList;
}

export interface PostPrescriptionReducerState {
  isLoading: boolean;
  error: string;
  data?: PostPresciptionData;
}
export interface DeletePrescriptionReducerState {
  isLoading: boolean;
  error: string;
  data: string;
}

export interface GetMedicineReducerState {
  isLoading: boolean;
  error: string;
  data: MedicineDetails;
}
export interface MedicineDetails {
  id: string;
  drugName: string;
  manufacturer: string;
  purchaseDate: string;
  expiryDate: string;
  quantity: number;
  unitPrice: number;
}

export interface PostPresciptionData {
  quantity: Number;
  id?: string;
  dosageTimes: string;
  dosage: string;
  autoReorder: boolean;
  appointmentId: string;
  medicineId: string;
}

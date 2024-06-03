import {fetchUrl} from '../utils/apiConfig';

export const loginApi = fetchUrl('patients/login');
export const signupApi = fetchUrl('patients');
export const userApi = (id: string) => {
  const result = fetchUrl(`patients/${id}`);
  return result;
};

export const branchApi = fetchUrl('branches');
export const appointmentsListApi = fetchUrl(`appointments`);
export const departmentList = fetchUrl('departments');
export const appoinmentDetailsApi = (id: string) => {
  const result = fetchUrl(`appointments/${id}`);
  return result;
};
export const appoinmentTokenApi = fetchUrl(`agora/token`);

export const prescriptionsListApi = fetchUrl(`prescriptions`);
export const prescrtionDeleteApi = (id: string) => {
  const result = fetchUrl(`prescriptions/${id}`);
  return result;
};

export const medicinesListApi = fetchUrl(`medicines`);
export const medicineDetailsApi = (id: string) => {
  const result = fetchUrl(`medicines/${id}`);
  return result;
};

export const appointmentSlotApi = (id: string) => {
  const result = fetchUrl(`appointments/slots/${id}`);
  return result;
};

export const doctorDetailsApi = (id: string) => {
  const result = fetchUrl(`users/${id}`);
  return result;
};
export const doctorListApi = fetchUrl('users');

export const currentUser = fetchUrl('current-user');
export const vitalsListApi = fetchUrl(`vitals`);
export const vitalsDetailsApi = (id: string) => {
  const result = fetchUrl(`vitals/${id}`);
  return result;
};

export const fileUploadApi = fetchUrl('files');
export const feedsApi = fetchUrl('feeds');

export const labReportsApi = fetchUrl('lab-reports');

export const feedsReactionsApi = fetchUrl(`feed-reactions`);

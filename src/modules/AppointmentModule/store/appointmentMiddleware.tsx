import {createAsyncThunk} from '@reduxjs/toolkit';
import {Toast} from 'squashapps-react-native-uikit';
import axios from 'axios';
import {
  APPOINMENTS_LIST,
  APPOINMENTS_DEATILS,
  GET_VITALS,
  PATCH_VITALS,
  PATCH_APPOINMENTS_DEATILS,
  POST_APPOINMENT,
  APPOINMENTS_LIST_HISTORY,
  GET_TOKEN,
  GET_LAB_REPORT,
} from '../../../redux/actions';
import {
  appoinmentDetailsApi,
  appointmentsListApi,
  vitalsDetailsApi,
  vitalsListApi,
  appoinmentTokenApi,
  labReportsApi,
} from '../../../routes/apiRoutes';
import {AppointmentDetails, Vital, VitalPayload} from './appointment.types';
import {urlEncode} from '../../../utils/helpers';

export const appoinmentsListMiddleWare = createAsyncThunk(
  APPOINMENTS_LIST,
  async ({where, include}: any, {rejectWithValue}) => {
    const params = {
      where,
      include,
    };
    try {
      const {data} = await axios.get(
        `${appointmentsListApi}?filter=${urlEncode(params)}`,
      );
      return data;
    } catch (error: any) {
      if (error.response?.data?.error?.message) {
        Toast.danger({message: error.response.data.error.message});
      }
      const typedError = error as Error;
      return rejectWithValue(typedError);
    }
  },
);

export const appoinmentsListHistoryMiddleWare = createAsyncThunk(
  APPOINMENTS_LIST_HISTORY,
  async ({where, include}: any, {rejectWithValue}) => {
    const params = {
      where,
      include,
    };
    try {
      const {data} = await axios.get(
        `${appointmentsListApi}?filter=${urlEncode(params)}`,
      );
      return data;
    } catch (error: any) {
      if (error.response?.data?.error?.message) {
        Toast.danger({message: error.response.data.error.message});
      }
      const typedError = error as Error;
      return rejectWithValue(typedError);
    }
  },
);

export const appoinmentDetailsMiddleWare = createAsyncThunk(
  APPOINMENTS_DEATILS,
  async (
    {
      order,
      appointmentId,
      where,
      include = [
        {relation: 'hospital'},
        {relation: 'appointmentSchedule'},
        {
          relation: 'doctor',
          scope: {
            include: [{relation: 'department'}, {relation: 'branch'}],
          },
        },
        {relation: 'patient'},
      ],
    }: any,
    {rejectWithValue},
  ) => {
    const params = {
      order,
      where,
      include,
    };

    try {
      const {data} = await axios.get(
        `${appoinmentDetailsApi(appointmentId)}?filter=${urlEncode(params)}`,
      );
      return data;
    } catch (error: any) {
      if (error.response?.data?.error?.message) {
        Toast.danger({message: error.response.data.error.message});
      }
      const typedError = error as Error;
      return rejectWithValue(typedError);
    }
  },
);

export const vitalListMiddleWare = createAsyncThunk(
  GET_VITALS,
  async ({where}: VitalPayload, {rejectWithValue}) => {
    const params = {
      where,
    };

    try {
      const {data} = await axios.get(
        `${vitalsListApi}?filter=${urlEncode(params)}`,
      );

      return data;
    } catch (error: any) {
      if (error.response?.data?.error?.message) {
        Toast.danger({message: error.response.data.error.message});
      }
      const typedError = error as Error;
      return rejectWithValue(typedError);
    }
  },
);

export const patchVitalMiddleWare = createAsyncThunk(
  PATCH_VITALS,
  async (
    {
      id,
      systolicBloodPressure,
      diastolicBloodPressure,
      bloodSugar,
      weight,
      height,
      appointmentId,
      patientId,
    }: Vital,
    {rejectWithValue},
  ) => {
    try {
      const {data} = await axios.patch(vitalsDetailsApi(id), {
        id,
        systolicBloodPressure,
        diastolicBloodPressure,
        bloodSugar,
        weight,
        height,
        appointmentId,
        patientId,
      });
      return data;
    } catch (error: any) {
      if (error.response?.data?.error?.message) {
        Toast.danger({message: error.response.data.error.message});
      }
      const typedError = error as Error;
      return rejectWithValue(typedError);
    }
  },
);
export const postVitalMiddleWare = createAsyncThunk(
  GET_VITALS,
  async ({where}: VitalPayload, {rejectWithValue}) => {
    const params = {
      where,
    };

    try {
      const {data} = await axios.get(
        `${vitalsListApi}?filter=${urlEncode(params)}`,
      );
      return data;
    } catch (error: any) {
      if (error.response?.data?.error?.message) {
        Toast.danger({message: error.response.data.error.message});
      }
      const typedError = error as Error;
      return rejectWithValue(typedError);
    }
  },
);

export const patchAppoinmentDetailsMiddleWare = createAsyncThunk(
  PATCH_APPOINMENTS_DEATILS,
  async (
    {
      id,
      type,
      hospitalId,
      branchId,
      patientId,
      doctorId,
      status,
      appointmentStart,
      appointmentEnd,
      patientContact,
      patientEmail,
      title,
      notes,
      createdAt,
      updatedAt,
    }: AppointmentDetails,
    {rejectWithValue},
  ) => {
    try {
      const {data} = await axios.patch(appoinmentDetailsApi(id), {
        id,
        type,
        hospitalId,
        branchId,
        patientId,
        doctorId,
        status,
        appointmentStart,
        appointmentEnd,
        patientContact,
        patientEmail,
        title,
        notes,
        createdAt,
        updatedAt,
      });
      return data;
    } catch (error: any) {
      if (error.response?.data?.error?.message) {
        Toast.danger({message: error.response.data.error.message});
      }
      const typedError = error as Error;
      return rejectWithValue(typedError);
    }
  },
);

export const postAppointmentMiddleWare = createAsyncThunk(
  POST_APPOINMENT,
  async (
    {
      type,
      hospitalId,
      branchId,
      patientId,
      doctorId,
      patientContact,
      patientEmail,
      title,
      notes,
      status = 'upcomming',
      bookedVia = 'mobile',
      appointmentDate,
      appointmentScheduleId,
    }: any,
    {rejectWithValue},
  ) => {
    try {
      const {data} = await axios.post(appointmentsListApi, {
        type,
        hospitalId,
        branchId,
        patientId,
        doctorId,
        patientContact,
        patientEmail,
        title,
        notes,
        status,
        bookedVia,
        appointmentDate,
        appointmentScheduleId,
      });
      return data;
    } catch (error: any) {
      if (error.response?.data?.error?.message) {
        Toast.danger({message: error.response.data.error.message});
      }
      const typedError = error as Error;
      return rejectWithValue(typedError);
    }
  },
);

export const tokenGenerateMiddleWare = createAsyncThunk(
  GET_TOKEN,
  async ({appointmentId}: {appointmentId: string}, {rejectWithValue}) => {
    try {
      const {data} = await axios.get(
        `${appoinmentTokenApi}?appointment=${appointmentId}`,
      );
      return data;
    } catch (error: any) {
      if (error.response?.data?.error?.message) {
        Toast.danger({message: error.response.data.error.message});
      }
      const typedError = error as Error;
      return rejectWithValue(typedError);
    }
  },
);
export const getLabReportList = createAsyncThunk(
  GET_LAB_REPORT,
  async ({where, include}: any, {rejectWithValue}) => {
    const params = {
      where,
      include,
    };
    try {
      const {data} = await axios.get(
        `${labReportsApi}?filter=${urlEncode(params)}`,
      );
      return data;
    } catch (error: any) {
      if (error.response?.data?.error?.message) {
        Toast.danger({message: error.response.data.error.message});
      }
      const typedError = error as Error;
      return rejectWithValue(typedError);
    }
  },
);

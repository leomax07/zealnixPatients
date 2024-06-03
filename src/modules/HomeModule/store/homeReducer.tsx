import { createSlice } from '@reduxjs/toolkit';
import {
  DepartmentIntialState,
  TodayAppointmentReducerState,
} from './home.types';
import {
  departmentListMiddleware,
  todaysappointmentMiddleWare,
} from './homeMiddleware';

const todaysappointmentInitialState: TodayAppointmentReducerState = {
  isLoading: false,
  error: '',
  appointment: [
    {
      id: "",
      type: "",
      hospitalId: "",
      branchId: "",
      patientId: "",
      doctorId: "",
      appointmentStart: "",
      appointmentEnd: "",
      patientContact: "",
      patientEmail: "",
      appointmentScheduleId: "",
      title: "",
      notes: "",
      status: "",
      createdAt: "",
      updatedAt: "",
      hospital: {
        id: '',
        name: '',
        profilePicUrl: '',
        address: '',
        pinCode: '',
        city: '',
        state: '',
        country: '',
        email: '',
        phone: '',
        createdAt: '',
        updatedAt: ''
      },
      patient: {
        id: '',
        name: '',
        gender: '',
        dateOfBirth: '',
        email: '',
        weightInKg: 0,
        heightInCm: 0,
        bloodGroup: '',
        phone: '',
        maritalStatus: '',
        address: '',
        pinCode: '',
        city: '',
        state: '',
        country: '',
        profilePicUrl: '',
        emergencyContactName: '',
        emergencyContactPhone: '',
        emergencyContactRelationship: '',
        takingMedicationsCurrently: false,
        currentMedicationsDescription: '',
        reasonForVisit: '',
        drugAllergies: '',
        exerciseHabit: '',
        dietStyle: '',
        alcoholConsumption: '',
        caffeineConsumption: '',
        smokingHabit: '',
        medicalHistoryComments: '',
        status: '',
        hospitalId: '',
        branchId: ''
      },
      doctor: {
        id: '',
        employeeId: '',
        name: '',
        type: '',
        dateOfBirth: '',
        email: '',
        dutyInTime: 0,
        dutyOutTime: 0,
        status: '',
        phone: '',
        hospitalId: '',
        branchId: '',
        departmentId: '',
        createdBy: '',
        createdAt: '',
        updatedAt: '',
        salt: '',
        profileImageUrl: '',
        additionalProp1: {},
        department: {
          id: '',
          name: '',
          status: '',
          hospitalId: '',
          branchId: '',
          createdBy: '',
          createdAt: '',
          updatedAt: '',
          additionalProp1: {}
        }

      },
      appointmentDate: "",
      appointmentSchedule: {
        id: '',
        appointmentRangeStart: 0,
        appointmentRangeEnd: 0,
        regularSlot: 0,
        prioritySlot: 0,
        videoSlot: 0,
        maxSlots: 0,
        createdAt: '',
        updatedAt: '',
        createdById: '',
        updatedById: '',
        hospitalId: '',
        branchId: ''
      },
    }
  ],
};

const todaysAppointmentReducer = createSlice({
  name: 'todaysappointment',
  initialState: todaysappointmentInitialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(todaysappointmentMiddleWare.pending, state => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(todaysappointmentMiddleWare.fulfilled, (state, action) => {
      state.isLoading = false;
      state.appointment = action.payload;
    });
    builder.addCase(todaysappointmentMiddleWare.rejected, (state, action) => {
      state.isLoading = false;
      if (typeof action.payload === 'string') {
        state.error = action.payload;
      }
    });
  },
});

const departmentInitialState: DepartmentIntialState = {
  isLoading: false,
  error: '',
  departmentList: [
    {
      id: '',
      name: '',
      status: '',
      hospitalId: '',
      branchId: '',
      createdBy: '',
      createdAt: '',
      updatedAt: '',
      additionalProp1: {},
    },
  ],
};

const departmentListReducer = createSlice({
  name: 'departmentList',
  initialState: departmentInitialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(departmentListMiddleware.pending, state => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(departmentListMiddleware.fulfilled, (state, action) => {
      state.isLoading = false;
      state.departmentList = action.payload;
    });
    builder.addCase(departmentListMiddleware.rejected, (state, action) => {
      state.isLoading = false;
      if (typeof action.payload === 'string') {
        state.error = action.payload;
      }
    });
  },
});

export const todaysAppointmentReducers = todaysAppointmentReducer.reducer;
export const departmentListReducers = departmentListReducer.reducer;

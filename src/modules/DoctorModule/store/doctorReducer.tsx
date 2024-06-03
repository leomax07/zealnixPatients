import { createSlice } from '@reduxjs/toolkit';
import {
  DoctorDetailList,
  DoctorDetailsReducerState,
  DoctorList,
  DoctorListReducerState,
  SlotList,
  appointmentSlotList,
} from './doctor.types';
import {
  appointmentSlotListMiddleWare,
  doctorDetailsMiddleWare,
  doctorListMiddleWare,
} from './doctorMiddleware';

const doctorListIntialState: DoctorListReducerState = {
  isLoading: false,
  error: '',
  data: [
    {
      id: '',
      name: '',
      type: '',
      email: '',
      dutyInTime: 0,
      dutyOutTime: 0,
      status: '',
      phone: '',
      hospitalId: '',
      branchId: '',
      departmentId: '',
      designationId: '',
      salt: '', profileImageUrl: '',
      department: {
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
      branch:{
        id: '',
        branchID: '',
        name: '',
        address: '',
        pinCode: '',
        city: '',
        state: '',
        country: '',
        status: '',
        email: '',
        phone: '',
        isMainBranch: false,
        hospitalId: '',
        createdBy: '',
        createdAt: '',
        updatedAt: ''
      }
    },
  ],
};

const doctorListReducer = createSlice({
  name: 'doctorList',
  initialState: doctorListIntialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(doctorListMiddleWare.pending, state => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(
      doctorListMiddleWare.fulfilled,
      (state, { payload }: { payload: DoctorList[] }) => {
        state.isLoading = false;
        state.data = payload;
      },
    );
    builder.addCase(doctorListMiddleWare.rejected, (state, action) => {
      state.isLoading = false;
      if (typeof action.payload === 'string') {
        state.error = action.payload;
      }
    });
  },
});
const doctorDeatailsIntialState: DoctorDetailsReducerState = {
  isLoading: false,
  error: '',
  data: {
    id: '',
    name: '',
    type: '',
    email: '',
    dutyInTime: 0,
    dutyOutTime: 0,
    status: '',
    phone: '',
    hospitalId: '',
    branchId: '',
    departmentId: '',
    designationId: '',
    salt: '',
    profileImageUrl: '',
    department: {
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
      updatedAt: '',
    },
    branch: {
      id: '',
      branchID: '',
      name: '',
      address: '',
      pinCode: '',
      city: '',
      state: '',
      country: '',
      status: '',
      email: '',
      phone: '',
      isMainBranch: false,
      hospitalId: '',
      createdBy: '',
      createdAt: '',
      updatedAt: '',
    },
  },
};

const doctorDetailsReducer = createSlice({
  name: 'doctorDetails',
  initialState: doctorDeatailsIntialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(doctorDetailsMiddleWare.pending, state => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(
      doctorDetailsMiddleWare.fulfilled,
      (state, { payload }: { payload: DoctorDetailList }) => {
        state.isLoading = false;
        state.data = payload;
      },
    );
    builder.addCase(doctorDetailsMiddleWare.rejected, (state, action) => {
      state.isLoading = false;
      if (typeof action.payload === 'string') {
        state.error = action.payload;
      }
    });
  },
});


const appointmentSlotListIntialState: appointmentSlotList = {
  isLoading: false,
  error: '',
  data: [{
    id: "",
    appointmentRangeStart: 0,
    appointmentRangeEnd: 0,
    regularSlot: 0,
    prioritySlot: 0,
    videoSlot: 0,
    maxSlots: 0,
    createdAt: "",
    updatedAt: "",
    doctorIds: [''],
    createdById: "",
    updatedById: "",
    hospitalId: "",
    branchId: "",
  }]
};

const appointmentSlotListReducer = createSlice({
  name: 'appointmentSlotList',
  initialState: appointmentSlotListIntialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(appointmentSlotListMiddleWare.pending, state => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(
      appointmentSlotListMiddleWare.fulfilled,
      (state, { payload }: { payload: SlotList[] }) => {
        state.isLoading = false;
        state.data = payload;
      },
    );
    builder.addCase(appointmentSlotListMiddleWare.rejected, (state, action) => {
      state.isLoading = false;
      if (typeof action.payload === 'string') {
        state.error = action.payload;
      }
    });
  },
});



export const appointmentSlotListReducers = appointmentSlotListReducer.reducer;



export const doctorListReducers = doctorListReducer.reducer;
export const doctorDetailsReducers = doctorDetailsReducer.reducer;

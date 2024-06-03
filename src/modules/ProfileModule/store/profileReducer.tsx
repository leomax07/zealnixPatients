import {createSlice} from '@reduxjs/toolkit';
import {UserReducerPatchState, UserReducerState} from './profile.types';
import {getUserMiddleWare, patchUserMiddleWare} from './profileMiddleware';

const userInitialState: UserReducerState = {
  isLoading: false,
  error: '',
  data: {
    profileImageUrl: '',
    id: '',
    name: '',
    email: '',
    isMobileAppLoginEnabled: false,
    phone: '',
    hospitalId: '',
    branchId: '',
    createdBy: '',
    dateOfBirth: '',
    gender: '',
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

const profileReducer = createSlice({
  name: 'profile',
  initialState: userInitialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getUserMiddleWare.pending, state => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(getUserMiddleWare.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getUserMiddleWare.rejected, (state, action) => {
      state.isLoading = false;
      if (typeof action.payload === 'string') {
        state.error = action.payload;
      }
    });
  },
});

const patchUserInitialState: UserReducerPatchState = {
  isLoading: false,
  error: '',
  data: {
    id: '',
    name: '',
    email: '',
    isMobileAppLoginEnabled: false,
    phone: '',
    hospitalId: '',
    branchId: '',
    createdBy: '',
  },
};

const patchProfileReducer = createSlice({
  name: 'pacthProfile',
  initialState: patchUserInitialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(patchUserMiddleWare.pending, state => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(patchUserMiddleWare.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(patchUserMiddleWare.rejected, (state, action) => {
      state.isLoading = false;
      if (typeof action.payload === 'string') {
        state.error = action.payload;
      }
    });
  },
});

export const profileReducers = profileReducer.reducer;
export const patchProfileReducers = patchProfileReducer.reducer;

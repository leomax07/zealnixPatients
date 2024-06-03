import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice } from '@reduxjs/toolkit';
import { USER_DATA } from '../../../utils/asyncStorageConstants';
import {
  LoginReducerState,
  BranchReducerInitailState,
  SignUpReducerState,
} from './login.types';
import {
  loginMiddleWare,
  signupMiddleWare,
  branchListMiddleWare,
} from './loginMiddleWare';

const userInitialState: any = {
  isLoader: false,
  data: {},
};

export const userReducer = createSlice({
  name: 'user_data',
  initialState: userInitialState,
  reducers: {
    logIn: (state, action) => {
      AsyncStorage.setItem(USER_DATA, JSON.stringify({ ...action.payload }));
      state.isLoader = false;
      state.data = action.payload;
    },
    logOut: (state, action) => {
      AsyncStorage.removeItem(USER_DATA);
      state.isLoader = false;
      state.data = action.payload;
    },
  },
});

const loginInitialState: LoginReducerState = {
  isLoading: false,
  error: '',
  token: '',
};

const loginReducer = createSlice({
  name: 'login',
  initialState: loginInitialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loginMiddleWare.pending, state => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(loginMiddleWare.fulfilled, (state, action) => {
      state.isLoading = false;
      state.token = action.payload.token;
    });
    builder.addCase(loginMiddleWare.rejected, (state, action) => {
      state.isLoading = false;
      if (typeof action.payload === 'string') {
        state.error = action.payload;
      }
    });
  },
});

const SignUpInitialState: SignUpReducerState = {
  isLoading: false,
  error: '',
  data: {
    id: '',
    name: '',
    gender: '',
    dateOfBirth: '',
    email: '',
    isMobileAppLoginEnabled: false,
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
    branchId: '',
    createdBy: '',
  },
};

const signupReducer = createSlice({
  name: 'signup',
  initialState: SignUpInitialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(signupMiddleWare.pending, state => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(signupMiddleWare.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(signupMiddleWare.rejected, (state, action) => {
      state.isLoading = false;
      if (typeof action.payload === 'string') {
        state.error = action.payload;
      }
    });
  },
});

const BranchInitialState: BranchReducerInitailState = {
  isLoading: false,
  error: '',
  branch: [
    {
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
  ],
};

const branchReducer = createSlice({
  name: 'branch',
  initialState: BranchInitialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(branchListMiddleWare.pending, state => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(
      branchListMiddleWare.fulfilled,
      (state, { payload }: { payload: any }) => {
        state.isLoading = false;
        state.branch = payload;
      },
    );
    builder.addCase(branchListMiddleWare.rejected, (state, action) => {
      state.isLoading = false;
      if (typeof action.payload === 'string') {
        state.error = action.payload;
      }
    });
  },
});
export const { logIn, logOut } = userReducer.actions;

export const userReducers = userReducer.reducer;
export const loginReducers = loginReducer.reducer;
export const signupReducers = signupReducer.reducer;
export const branchReducers = branchReducer.reducer;

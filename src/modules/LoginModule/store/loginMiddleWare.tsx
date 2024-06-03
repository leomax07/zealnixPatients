import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {Toast} from 'squashapps-react-native-uikit';
import {branchApi, loginApi, signupApi} from '../../../routes/apiRoutes';
import {BRANCHLIST, LOGIN, SIGNUP} from '../../../redux/actions';
import {BranchListPayload, SignUpPayload} from './login.types';

export const loginMiddleWare = createAsyncThunk(
  LOGIN,
  async (
    {email, password}: {email: string; password: string},
    {rejectWithValue},
  ) => {
    try {
      delete axios.defaults.headers.common['Authorization'];

      const {data} = await axios.post(loginApi, {email, password});
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

export const signupMiddleWare = createAsyncThunk(
  SIGNUP,
  async (
    {
      name,
      email,
      password,
      branchId,
      hospitalId,
      phone,
      createdBy = '644d3737e07b0e5122204f8c',
      isMobileAppLoginEnabled,
      status,
      gender,
      dateOfBirth
    }: SignUpPayload,
    {rejectWithValue},
  ) => {
    try {
      delete axios.defaults.headers.common['Authorization'];

      const {data} = await axios.post(signupApi, {
        name,
        email,
        password,
        phone,
        hospitalId,
        branchId,
        createdBy,
        isMobileAppLoginEnabled,
        status,
        gender,
        dateOfBirth,
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

export const branchListMiddleWare = createAsyncThunk(
  BRANCHLIST,
  async (
    {
      offset = 0,
      limit = 100,
      skip = 0,
      hospitalId,
      id = true,
      branchID = true,
      name = true,
      address = true,
      pinCode = true,
      city = true,
      state = true,
      country = true,
      status = true,
      email = true,
      phone = true,
      isMainBranch = true,
      hospitalIdBool = true,
      createdBy = true,
      createdAt = true,
      updatedAt = true,
    }: BranchListPayload,
    {rejectWithValue},
  ) => {
    try {
      const {data} = await axios.get(branchApi, {
        params: {
          filter: {
            offset,
            limit,
            skip,
            where: {
              hospitalId,
            },
            fields: {
              id,
              branchID,
              name,
              address,
              pinCode,
              city,
              state,
              country,
              status,
              email,
              phone,
              isMainBranch,
              hospitalId: hospitalIdBool,
              createdBy,
              createdAt,
              updatedAt,
            },
          },
        },
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

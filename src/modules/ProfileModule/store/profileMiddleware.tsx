import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {Toast} from 'squashapps-react-native-uikit';
import {currentUser, fileUploadApi, userApi} from '../../../routes/apiRoutes';
import {FILE_UPLOAD, GET_USER, PATCH_USER} from '../../../redux/actions';
import {User} from './profile.types';

export const getUserMiddleWare = createAsyncThunk(
  GET_USER,
  async (_a, {rejectWithValue}) => {
    try {
      const {data} = await axios.get(currentUser);
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

export const patchUserMiddleWare = createAsyncThunk(
  PATCH_USER,
  async (
    {
      id,
      name,
      email,
      isMobileAppLoginEnabled,
      phone,
      hospitalId,
      branchId,
      createdBy,
      profileImageUrl
    }: User,
    {rejectWithValue},
  ) => {
    try {
      const {data} = await axios.patch(userApi(id), {
        id,
        name,
        email,
        isMobileAppLoginEnabled,
        phone,
        hospitalId,
        branchId,
        createdBy,
        profileImageUrl
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

export const fileUploadMiddleWare = createAsyncThunk(
  FILE_UPLOAD,
  async ({formData}: any, {rejectWithValue}) => {
    try {
      const {data} = await axios.post(fileUploadApi, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
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
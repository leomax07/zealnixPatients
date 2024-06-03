import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Toast } from 'squashapps-react-native-uikit';
import { DEPARTMENTLIST, TODAYSAPPOINTMET } from '../../../redux/actions';
import { appointmentsListApi, departmentList } from '../../../routes/apiRoutes';
import { urlEncode } from '../../../utils/helpers';

export const todaysappointmentMiddleWare = createAsyncThunk(
  TODAYSAPPOINTMET,
  async (
    {
      order,
      where,
      include,
    }: any,
    { rejectWithValue },
  ) => {
    const params = {
      order,
      where,
      include,
    };
    try {
      const { data } = await axios.get(
        `${appointmentsListApi}?filter=${urlEncode(params)}`,
      );
      return data;
    } catch (error: any) {
      if (error.response?.data?.error?.message) {
        Toast.danger({ message: error.response.data.error.message });
      }
      const typedError = error as Error;
      return rejectWithValue(typedError);
    }
  },
);

export const departmentListMiddleware = createAsyncThunk(
  DEPARTMENTLIST,
  async (_a, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(departmentList);
      return data;
    } catch (error: any) {
      if (error.response?.data?.error?.message) {
        Toast.danger({ message: error.response.data.error.message });
      }
      const typedError = error as Error;
      return rejectWithValue(typedError);
    }
  },
);

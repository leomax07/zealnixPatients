import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {
  APPOINTMENT_SLOT_LIST,
  DOCTOR_DETAILS,
  DOCTOR_LIST,
} from '../../../redux/actions';
import {GetDoctorDetailsType, GetDoctorListType} from './doctor.types';
import {urlEncode} from '../../../utils/helpers';
import {
  doctorListApi,
  doctorDetailsApi,
  appointmentSlotApi,
} from '../../../routes/apiRoutes';

export const doctorListMiddleWare = createAsyncThunk(
  DOCTOR_LIST,
  async (
    {where, include = [{relation: 'branch'}, {relation: 'department'}]}: any,
    {rejectWithValue},
  ) => {
    const params = {
      where,
      include,
    };

    try {
      const {data} = await axios.get(
        `${doctorListApi}?filter=${urlEncode(params)}`,
      );
      return data;
    } catch (error) {
      const typedError = error as Error;
      return rejectWithValue(typedError);
    }
  },
);

export const doctorDetailsMiddleWare = createAsyncThunk(
  DOCTOR_DETAILS,
  async (
    {
      offset = 0,
      limit = 100,
      skip = 0,
      order,
      doctorId,
      id = true,
      employeeId = true,
      name = true,
      type = true,
      dateOfBirth = true,
      email = true,
      hospitalId = true,
      departmentId = true,
      designationId = true,
      branchId = true,
      profileImageUrl = true,

      dutyInTime = true,
      dutyOutTime = true,
      status = true,
      hash = true,
      salt = true,
      phone = true,
      hospital = true,
      branch = true,
      department = true,
      createdBy = true,
      createdAt = true,
      updatedAt = true,
      where,
      include = [
        {relation: 'branch'},
        {relation: 'hospital'},
        {relation: 'department'},
      ],
    }: GetDoctorDetailsType,
    {rejectWithValue},
  ) => {
    const params = {
      offset,
      limit,
      skip,
      order,
      where,
      fields: {
        id,
        type,
        employeeId,
        hospitalId,
        branchId,
        departmentId,
        designationId,
        name,
        dateOfBirth,
        email,
        status,
        dutyInTime,
        dutyOutTime,
        hash,
        salt,
        phone,
        hospital,
        createdBy,
        createdAt,
        updatedAt,
        branch,
        department,
        profileImageUrl,
      },
      include,
    };

    try {
      const {data} = await axios.get(
        `${doctorDetailsApi(doctorId)}?filter=${urlEncode(params)}`,
      );
      return data;
    } catch (error) {
      const typedError = error as Error;
      return rejectWithValue(typedError);
    }
  },
);

export const appointmentSlotListMiddleWare = createAsyncThunk(
  APPOINTMENT_SLOT_LIST,
  async ({id, type, date}: any, {rejectWithValue}) => {
    try {
      const {data} = await axios.post(appointmentSlotApi(id), {
        type,
        date,
      });
      return data;
    } catch (error) {
      const typedError = error as Error;
      return rejectWithValue(typedError);
    }
  },
);

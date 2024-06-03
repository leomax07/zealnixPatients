import {createAsyncThunk} from '@reduxjs/toolkit';
import {Toast} from 'squashapps-react-native-uikit';
import axios from 'axios';
import {
  feedsApi,
  feedsReactionsApi,
  fileUploadApi,
} from '../../../routes/apiRoutes';
import {
  FEEDS_LIST,
  FEEDS_PROFILE_LIST,
  FILE_UPLOAD,
  FEEDS_REACTION,
} from '../../../redux/actions';

export const feedsListMiddleWare = createAsyncThunk(
  FEEDS_LIST,
  async (
    {
      include = ['createdBy'],
    }: {
      include?: string[];
    },
    {rejectWithValue},
  ) => {
    try {
      const {data} = await axios.get(feedsApi, {
        params: {
          filter: {
            include,
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

export const feedsProfileListMiddleWare = createAsyncThunk(
  FEEDS_PROFILE_LIST,
  async (
    {
      include = ['createdBy'],
      createdById,
    }: {
      include?: string[];
      createdById: string;
    },
    {rejectWithValue},
  ) => {
    try {
      const {data} = await axios.get(feedsApi, {
        params: {
          filter: {
            include,
            where: {
              createdById,
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

export const feedsReactionsMiddleWare = createAsyncThunk(
  FEEDS_REACTION,
  async (
    {
      feedId,
      type = 'like',
    }: {
      feedId: string;
      type: 'like' | 'unlike' | 'saved' | 'unsaved';
    },
    {rejectWithValue},
  ) => {
    try {
      const {data} = await axios.post(feedsReactionsApi, {
        type,
        feedId,
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

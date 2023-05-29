import AsyncStorage from '@react-native-async-storage/async-storage';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {AUTH_TOKEN_KEY} from '../../utils/constant/Constant';
const REACT_APP_API_URL = 'http://192.168.0.103:5000/';
const baseQuery = fetchBaseQuery({
  baseUrl: REACT_APP_API_URL,
  prepareHeaders: async (headers, {getState, endpoint}) => {
    const token = await AsyncStorage.getItem(AUTH_TOKEN_KEY);
    if (token) {
      headers.set('Authorization', token);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: 'api',
  // baseQuery:async(args,api,extraOptions)=>{

  // },
  tagTypes: [],
  endpoints: builder => ({}),
  baseQuery: async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result?.error?.status === 401) {
      //   localStorage.clear();
    }
    return result;
  },
});

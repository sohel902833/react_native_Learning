import {apiSlice} from '../api/apiSlice';
import {TagTypes} from '../api/tagTypes';
import {setUserInfo} from './authSlice';
export const authApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    register: builder.mutation({
      query: (data: any) => ({
        url: '/auth/signup',
        method: 'POST',
        body: data,
      }),
    }),
    login: builder.mutation({
      query: data => ({
        url: '/auth/login',
        method: 'POST',
        body: data,
      }),
    }),
    forgetPassword: builder.mutation({
      query: (data: any) => ({
        url: 'auth/forget-password',
        method: 'PUT',
        body: data,
      }),
    }),
    resetPasswordByCode: builder.mutation({
      query: (data: any) => ({
        url: 'auth/set-new-password',
        method: 'PUT',
        body: data,
      }),
    }),
    getCurrentUser: builder.query({
      query: data => ({
        url: '/user/',
        method: 'GET',
      }),
      providesTags: [TagTypes.CURRENT_USER],
      async onQueryStarted(arg, {dispatch, queryFulfilled}) {
        try {
          const result: any = await queryFulfilled;
          if (result?.data?._id) {
            dispatch(setUserInfo(result?.data));
          }
        } catch (err) {}
      },
    }),
  }),
});
export const {
  useLoginMutation,
  useRegisterMutation,
  useGetCurrentUserQuery,
  useForgetPasswordMutation,
  useResetPasswordByCodeMutation,
} = authApi;

import {apiSlice} from '../api/apiSlice';
import {TagTypes} from '../api/tagTypes';
export const transectionApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    validateSendMoney: builder.mutation({
      query: (data: {phone: string; amount: string; password: string}) => ({
        url: 'user/validate-send-money',
        method: 'POST',
        body: data,
      }),
    }),
    confirmSendMoney: builder.mutation({
      query: (data: {token: string}) => ({
        url: 'user/send-money/' + data.token,
        method: 'POST',
      }),
      invalidatesTags: [TagTypes.CURRENT_USER],
    }),
  }),
});
export const {useValidateSendMoneyMutation, useConfirmSendMoneyMutation} =
  transectionApi;

import { Dispatch } from "@reduxjs/toolkit";
import { Callbacks, useCallbacks } from "../utils/useCallBacks";
import { postRequest } from "../utils/https/postRequest";
import { EndPointsConstants } from "../constants/EndPointsConstants";
export const LoginUser = <T>(loginData: any, callbacks?: Callbacks<T>) => {
  const { onError, onLoading, onSuccess } = useCallbacks<T>(callbacks);
  console.log(loginData);

  return async (dispatch: Dispatch) => {
    onLoading(true);
    try {
      const { data } = await postRequest(
        `${EndPointsConstants.login}`,
        loginData
      );
      console.log(data);

      onSuccess(data);
    } catch (error) {
      onError(error as Error);
    } finally {
      onLoading(false);
    }
  };
};

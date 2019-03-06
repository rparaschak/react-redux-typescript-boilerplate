import { ILoginState } from './Interfaces';
import { createStateHelper } from '../../common/helpers/reducerHelpers';

export const initialState: ILoginState = {
  loginForm: {
    email: '',
    password: '',
  },
};

export const reducerName = 'login';
export const loginStateHelper = createStateHelper(reducerName);
export default loginStateHelper.extend((state = initialState) => state);

/** Actions */
export const onFormChange = (prop: string, value: string) => {
  return (dispatch: any, getState: IGetStateFunc) => {
    const loginForm = getState().login.loginForm;
    dispatch(loginStateHelper.createAssignAction('loginForm', {
      ...loginForm,
      [prop]: value,
    }));
  };
};

export interface ILoginPageProps extends ILoginPageStateProps, ILoginPageDispatchProps {
}

export interface ILoginState {
  loginForm: {
    email: string;
    password: string;
  };
}

export interface ILoginPageStateProps {
  loginForm: {
    email: string;
    password: string;
  };
}

export interface ILoginPageDispatchProps {
  onFormChange: (prop: string, value: string) => void;
}
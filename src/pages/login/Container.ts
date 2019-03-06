import { connect } from 'react-redux';

import { IStoreShape } from '../../store';
import { ILoginPageDispatchProps, ILoginPageStateProps } from './Interfaces';
import { onFormChange } from './State';
import { LoginPageComponent } from './Component';

const mapStateToProps = ({login}: IStoreShape): ILoginPageStateProps => ({
  loginForm: login.loginForm,
});

const mapDispatchToProps = (dispatch: any): ILoginPageDispatchProps => ({
  onFormChange: (prop: string, value: string) => dispatch(onFormChange(prop, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPageComponent);

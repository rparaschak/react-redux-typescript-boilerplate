import * as React from 'react';

import { ILoginPageProps } from './Interfaces';

export class LoginPageComponent extends React.Component<ILoginPageProps>{

  public onFormChange = (event) => {
    const { name, value } = event.target;
    this.props.onFormChange(name, value);
  }

  public render() {
    return (
      <div>
        <span>This is login page</span>
        <div>{this.props.loginForm.email}</div>
        <input
          name="email"
          onChange={this.onFormChange}
          value={this.props.loginForm.email}
        />
      </div>
    );
  }
}

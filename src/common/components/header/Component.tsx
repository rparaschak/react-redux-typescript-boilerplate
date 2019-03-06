import * as React from 'react';
import { Link } from 'react-router-dom';

export class HeaderComponent extends React.Component {
  public render() {
    return (
      <div>
        <header>Hello header</header>
        <ul>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/'>Landing</Link></li>
        </ul>
      </div>

    );
  }
}

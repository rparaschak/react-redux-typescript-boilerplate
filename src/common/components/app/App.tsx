import * as React from 'react';

import {AppRouter} from '../../../router';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <AppRouter />
      </div>
    );
  }
}

export default App;

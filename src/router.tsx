import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LoginPageContainer from './pages/login/Container';
import { LandingPageComponent } from './pages/landing/Component';
import { HeaderComponent } from './common/components/header/Component';

export const AppRouter = () => (
  <Router>
    <div>
      <HeaderComponent />
      <Route exact={true} path="/" component={LandingPageComponent}/>
      <Route path="/login" component={LoginPageContainer}/>
    </div>
  </Router>
);

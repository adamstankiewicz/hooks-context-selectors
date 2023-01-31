import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { Container } from '@edx/paragon';

import BasicReduxExample from '../examples/basic-redux/BasicRedux';
import BasicHooksContextExample from '../examples/basic-hooks-context/BasicHooksContext';
import HooksContextReducerExample from '../examples/hooks-context-reducer/HooksContextReducer';
import HooksContextSelectorExample from '../examples/hooks-context-selectors/HooksContextSelectors';

import BreadcrumbNav from '../components/breadcrumb/BreadcrumbNav';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <Container className="py-3">
          <h1>Examples</h1>
          <p>Below are example usages to compare patterns between Redux and React hooks + context.</p>
          <ul>
            <li><Link to="/basic-redux">Basic Redux</Link></li>
            <li><Link to="/basic-hooks-context">Basic React hooks + context</Link></li>
            <li><Link to="/hooks-context-reducer">React hooks + context + reducer</Link></li>
            <li><Link to="/hooks-context-selectors">React hooks + context selectors</Link></li>
          </ul>
        </Container>
      </Route>
      <Route path="/basic-redux" exact>
        <BasicReduxExample />
      </Route>
      <Route path="/basic-hooks-context" exact>
        <BasicHooksContextExample />
      </Route>
      <Route path="/hooks-context-reducer" exact>
        <HooksContextReducerExample />
      </Route>
      <Route path="/hooks-context-selectors" exact>
        <HooksContextSelectorExample />
      </Route>
      <Route path="*">
        <Container className="py-3">
          <BreadcrumbNav activeLabel="Page not found" />
          <h1>Page not found</h1>
          <p>Oops, that page does not exist.</p>
        </Container>
      </Route>
    </Switch>
  </Router>
);

export default Routes;

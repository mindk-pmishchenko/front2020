import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UsersListContainer from "./containers/Users/UsersList";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/users">
          <UsersListContainer/>
        </Route>
        {/*<Route exact path="/admin/:action(test|new)/:id/:name/" render={props => {*/}
        {/*  return <App {...props} testProp={1} />*/}
        {/*}} />*/}
        {/*<Route exact path="/new" render={props => {*/}
        {/*  return <App {...props} testProp={2} />*/}
        {/*}} />*/}
        {/*<Route path="*">404 Error</Route>*/}
      </Switch>
      {/*<Switch>*/}
      {/*  <Route path="/test" render={props => {*/}
      {/*    return <App {...props} testProp={3} />*/}
      {/*  }} />*/}
      {/*  <Route path="/new" render={props => {*/}
      {/*    return <App {...props} testProp={4} />*/}
      {/*  }} />*/}
      {/*  <Route path="*">404 Error #2</Route>*/}
      {/*</Switch>*/}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from "./store";
import TodoList from "./features/tasks/components/TodoList";
import Login from "./features/auth/components/Login";
import Error from "./features/error/Error";
import Registration from "./features/auth/components/Registration";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/registration">
              <Registration />
            </Route>
            <Route path="/tasks-manager:userId?">
              <TodoList />
            </Route>
            <Route path="*">
              <Error />
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

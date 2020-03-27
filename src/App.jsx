import React, { Component } from "react";
import TodoList from "./components/TodoList/TodoList";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login/Login";
import Registration from "./components/auth/Register/Registration";
import Error from "./components/Error/Error";

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
            <Route path="/user/:userId">
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

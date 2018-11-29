import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../components";
import Login from "../components/auth/loginComponent";
import ProtectedRoute from "./protectedRoutes";
import SignUp from "../components/auth/signUpComponent";
import ViewEntries from "../components/entries/viewEntries";


export default function AppRoutes() {
  return (
    <div>
      <BrowserRouter >
        <Switch>
          <ProtectedRoute path="/" component={Home} exact strict />
          <Route path="/login" component={Login} exact strict />
          <Route path="/signup" component={SignUp} exact strict />
          <ProtectedRoute path="/view-entries" component={ViewEntries} exact strict />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

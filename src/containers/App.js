import React from 'react';
import { Provider } from "react-redux";
import { configureStore } from "../store";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./NavBar";
import Main from "../containers/Main";
import { setAuthorizationToken, setCurrentUser } from '../store/actions/auth';
import jwtDecode from 'jwt-decode';

const store = configureStore();

if(localStorage.jwtToken){
    setAuthorizationToken(localStorage.jwtToken);
    //prevent someone from tampering with jwtToken in storage
    try {
      store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
    } catch(e) {
        store.dispatch(setCurrentUser({}));
    }
}

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="onboarding">
        <NavBar />
        <Main />
      </div>
    </Router>
  </Provider>
)

export default App;

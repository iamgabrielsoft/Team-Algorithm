import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './App.css';

import Register from "./Auth/Register";   
import Login from "./Auth/Login";
import HomePage from "./pages/Homepage";



const App = () => {
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/"  exact component={HomePage} />
      <Route path="/register" component={ Register } />
      <Route path="/login" component={Login} />

      {/* add routes without layouts */}
     
      {/* <Route path="/profile" exact component={Profile} />
      <Route path="/" exact component={Index} /> */}
      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>


}


export default App;

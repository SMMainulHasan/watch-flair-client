import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddProduct from "./components/AddProduct/AddProduct";
import Admin from "./components/Admin/Admin";
import CheckOut from "./components/CheckOut/CheckOut";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import ManageProduct from "./components/ManageProduct/ManageProduct";
import Orders from "./components/Orders/Orders";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const userContext = createContext();

function App() {
  const [user, setUser] = useState({
    name:'',
    email:'',
    displayPic:''
  });
  // console.log(user);
  return (
    <userContext.Provider value={[user, setUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <Route path="/admin/manageProduct">
            <ManageProduct />
          </Route>
          <Route path="/admin/addProduct">
            <AddProduct />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/checkout/:id">
            <CheckOut/>
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <Orders/>
          </PrivateRoute>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;

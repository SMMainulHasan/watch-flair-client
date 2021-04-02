import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddProduct from "./components/AddProduct/AddProduct";
import Admin from "./components/Admin/Admin";
import Home from "./components/Home/Home";
import ManageProduct from "./components/ManageProduct/ManageProduct";

const userContext = createContext();

function App() {
  const [user, setUser] = useState({
    name:'',
    email:'',
    displayPic:''
  });
  return (
    <userContext.Provider value={[user, setUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/admin/manageProduct">
            <ManageProduct />
          </Route>
          <Route path="/admin/addProduct">
            <AddProduct />
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;

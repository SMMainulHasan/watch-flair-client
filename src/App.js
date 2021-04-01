import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {/* <Route path="/cart">
          
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;

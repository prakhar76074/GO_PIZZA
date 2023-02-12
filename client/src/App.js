import "./App.css";
import { Container } from "react-bootstrap";
import TopBar from "./components/TopBar";
import {BrowserRouter as Router , Switch , Route } from 'react-router-dom'
import About from "./components/About";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import Policy from "./components/Policy";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import Register from "./screens/Register";
import Login from "./screens/Login";
import OrderScreen from "./screens/OrderScreen";
import AdminScreen from "./screens/AdminScreen";
function App() {
  return (
    <Router>
     <TopBar />
     <NavBar />
     <Switch>
     <Route path ='/admin' component={AdminScreen}  />
       <Route path ='/register' component={Register} exact />
       <Route path ='/login' component={Login} exact />
       <Route path ='/about' component={About} exact />
       <Route path ='/contact' component={Contact} exact />
       <Route path ='/policy' component={Policy} exact />
       <Route path ='/cart' component={CartScreen} exact />
       <Route path ='/orders' component={OrderScreen} exact />
       <Route path ='/' component={HomeScreen} exact />
     </Switch>
    </Router>
  );
}

export default App;

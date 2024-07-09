import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { CentralStateProvider } from "./page/CenteralState";
import Navbar from "./components/Navbar";
import Home from "./page/Home";
import Cart from "./page/Cart";
import Product from "./page/Product";
import About from "./page/About";
import Contact from "./page/Contact";
import Details from "./page/Details";
import Signin from "./page/Signin";
import Signup from "./page/SignUp";
import Confirm from "./page/Confirm";
import Footer from "./page/Footer";

const App = () => {
  return (
    <CentralStateProvider>
      <Router>
        <div>
          <Navbar />
          <Route path="/home" component={Home} />
          <Route path="/product" exact component={Product} />
          <Route path="/cart" component={Cart} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/details/:id" component={Details} />
          <Route path="/confirm" component={Confirm} />
          <Redirect from="/" to="/home" />
        </div>
        <Footer />
      </Router>
    </CentralStateProvider>
  );
};
export default App;

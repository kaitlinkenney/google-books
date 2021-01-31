import React from "react";
// import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Saved from "./pages/saved";
import Search from "./pages/search";
import Navbar from "./components/navbar";
// import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
          {/* <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} /> */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
}


export default App;

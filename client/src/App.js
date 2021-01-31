import React from "react";
// import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SavedPage from "./pages/saved";
import Search from "./pages/search";
import Navbar from "./components/navbar";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path={["/", "/books"]}>
            <Search />
          </Route>
          <Route exact path="/saved" component={SavedPage} />
          {/* <Route exact path="/books/:id">
            <Detail />
          </Route> */}
      </div>
    </Router>
  );
}


export default App;

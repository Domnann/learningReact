import React from "react";
import Navbar from "./navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from "./create";
import BLogDetails from "./BlogDetails";

function App() {
  const title = "Welcome to Domnan's Blog"
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/blogs/:id">
              <BLogDetails />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;

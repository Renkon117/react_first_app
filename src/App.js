import React from 'react';
import './App.css';
import Nav from "./Nav";
import Shop from "./Shop";
import About from "./About";
import ItemDetail from "./ItemDetail";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        {/* Switch will detect the path and use it only once so / does not overlap on other paths*/}
        <Switch>
          <Route path="/" exact component= {Home}/>
          <Route path="/about" component= {About}/>
          <Route path="/shop" exact component= {Shop}/>
          <Route path="/shop/:id" component= {ItemDetail}/>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
    <p>Welcome to my first app page. This website is one of my proctice project, created for no business purpose.
      Please take a look at Shop page to see Fortnite Items, which is imported API from Fortnite. <a href="https://console.fortniteapi.com/"> https://console.fortniteapi.com/ </a>
    </p>
  </div>
);

export default App;

import Header from "./components/Header";
import Hero from "./components/Hero";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Header />
            <Hero />
          </Route>

          <Route exact path="/channels">
            <Home />
          </Route>

          <Route exact path="/channels/:id">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

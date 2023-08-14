import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/landingPage.jsx";
import Home from "./pages/home.jsx";
import Detail from "./pages/detail.jsx";
import Form from "./pages/form.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/videogames/:id" component={Detail} />
          <Route path="/videogames" component={Home} />
          <Route exact path="/form" component={Form} />
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

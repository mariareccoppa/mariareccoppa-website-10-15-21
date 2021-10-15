import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./Maria/Index.js";
import Drawing from "./Maria/Drawing.js";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route exact path="/Maria/Drawing.js">
          <Drawing />
        </Route>
        <Route path="/">
          <h1>Error 404: File Not Found :(</h1>
        </Route>
      </Switch>
    </Router>
  );
}

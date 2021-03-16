import "./main.sass"
import GlobalNavbar from "./components/GlobalNavbar";
import Jumbo from "./components/Jumbo";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NotFound from "./pages/NotFound";

function App() {

  return (
    <Router>
      <GlobalNavbar />
      <Container className="py-4">
        <Jumbo />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </Router>
  );
  
}

export default App;

import "./main.sass"
import GlobalNavbar from "./components/GlobalNavbar";
import Jumbo from "./components/Jumbo";
import Results from "./components/Results";
import { Container } from "react-bootstrap";

// import "bootstrap/scss/_variables.scss";
// import "bootstrap/scss/_mixins.scss";
// import "bootstrap/scss/_utilities.scss";
// import "bootstrap/scss/bootstrap-grid.scss";
// import "bootstrap/scss/bootstrap-reboot.scss"
// import "bootstrap/scss/_navbar.scss"

function App() {

  return (
    <div>
      <GlobalNavbar />
      <Container className="py-4">
          <Jumbo />
          <Results />
      </Container>
    </div>
  );

}

export default App;

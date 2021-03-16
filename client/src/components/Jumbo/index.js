import { Container, Jumbotron } from "react-bootstrap";

function Jumbo() {
    return (
        <Jumbotron fluid>
            <Container>
                <h1>Google Book Search</h1>
                <p>Search for and save your favorite books</p>
            </Container>
        </Jumbotron>
    )
}

export default Jumbo;
import { Button, Card } from "react-bootstrap";

function Results() {
    return (
        <Card>
            <Card.Header as="h5">Featured</Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default Results;
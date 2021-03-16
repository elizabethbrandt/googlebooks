import { Button, Card } from "react-bootstrap";
import SaveBookButton from "../SaveBookButton";

function Results({ books }) {

    return (

        <Card className="my-4">
            <Card.Body>

                {books.length

                    ? (
                        <div>
                            <h2>Results</h2>
                            {books.map((book) => (
                                <Card className="my-4" key={book.id}>
                                    {/* <Card.Header as="h5">{book.title}</Card.Header> */}
                                    <Card.Body>
                                        <Card.Title>{book.title}</Card.Title>
                                        <Card.Title>{book.authors}</Card.Title>
                                        <Card.Text>{book.description}</Card.Text>
                                        <Button className="mr-3" variant="primary">See More Info</Button>
                                        <SaveBookButton book={book}/>
                                    </Card.Body>
                                </Card>
                            ))}
                        </div>

                    )

                    : <h2>No results</h2>}

            </Card.Body>
        </Card>
    )
}

export default Results;
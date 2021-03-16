import { Button } from "react-bootstrap";
import API from "../../utils/api";

function SaveBookButton({book}) {
    // API.saveBook();

    return (
        <Button variant="primary">Save Book</Button>
    )
}

export default SaveBookButton;
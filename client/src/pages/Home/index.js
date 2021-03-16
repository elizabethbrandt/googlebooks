import { useState } from "react";
import Results from "../../components/Results";
import Search from "../../components/Search";

function Home() {

    const [books, setBooks] = useState([]);
    console.log("Books", books);

    return (
        <div>
            <Search setBooks={setBooks} />
            <Results books={books}/>
        </div>
    )
}

export default Home;
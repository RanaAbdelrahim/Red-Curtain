import { useState } from "react";
import '../styles/SearchBar.css';

const SearchBar = ({onSearch}) => {
    const [input,setInput] = useState("");  // store user input

    // Handle form submission
    const Submit = (e) => {
        e.preventDefault();
        onSearch(input); // pass the input back to parent
        setInput("");
    };

    return(
        <form className="search-bar" onSubmit={Submit}>
            <input
            type = "text"
            value = {input}
            placeholder = "Search for a movie..."
            onChange = {(e) => setInput(e.target.value)}
            />
            <button>Search</button>
        </form>
    );
    
};

export default SearchBar ;
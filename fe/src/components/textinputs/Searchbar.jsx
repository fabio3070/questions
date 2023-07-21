import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { SearchBar } from "./searchbar.styles";
import SearchButton from "../buttons/SearchButton";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Searchbar({ setFilter, label, text, style, setShareScreen }) {
    const [query, setQuery] = useState("");
    //create a search query paremeter for filtering
    const handleClick = () => {
        setFilter(query);
        
    };

    return(
        <SearchBar 
            style={style}
        >
            <TextField
            fullWidth
            label={label}
            variant="outlined"
            value={query} 
            onChange={(text) => setQuery(text.target.value)}

            >

            </TextField>
            <SearchButton text={text} onClick={() => handleClick()} />

        </SearchBar>
    );
}
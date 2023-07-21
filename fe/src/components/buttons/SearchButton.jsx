import Button from '@mui/material/Button';
import { ThemeColors } from "../../themes/global.colors";
import {Searchbutton} from "../textinputs/searchbar.styles";


export default function SearchButton({ disabled, text, onClick, top=0, type="text" }) {

    return(
        <Searchbutton 
        top={top}
        variant="contained" 
        size="large"
        type={type}
        disabled={disabled}
        onClick={onClick}
        >{text}</Searchbutton>
    );
};
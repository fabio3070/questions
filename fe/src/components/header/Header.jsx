import { HeaderContainer, HeaderBack } from "./header.styles";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState } from "react";
import Share from "./Share";


export default function Header({question, setShareScreen}) {

    const handleClick = () => {
        setShareScreen(true);
    };

    return(
        <HeaderContainer>
            <HeaderBack to="/">
                <ArrowBackIosIcon />
                <p>Return</p>
            </HeaderBack>
            <h1>{question}</h1>
            <Share onClick={handleClick}/>
            
        </HeaderContainer>
    );
}
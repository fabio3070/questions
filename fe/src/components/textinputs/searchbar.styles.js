import styled from "styled-components";
import { ThemeColors } from "../../themes/global.colors";
import { size } from "../../themes/media.styles";
import Button from '@mui/material/Button';

export const SearchBar = styled.div`
    display:flex;
    gap: 1rem;
    margin-top: 2rem;
    width: 100%;

    @media (max-width: ${size.sm}) {
        flex-direction: column;
        max-width: 100%;
        
    }
`;

export const B = styled(Button)`
    padding: 0 2rem!important;
    height: 56px;
    margin-top: 2rem!important;
    margin-left: 0.5rem!important;


    @media (max-width: ${size.sm}) {
        margin-left: 0rem!important;
        margin-top: 1rem!important;
        width: 100%;
        height: 36px;
    }
`;

export const SearchContainer = styled.div`
    display: flex;

    @media (max-width: ${size.sm}) {
        flex-direction: column;
    }
`;

export const Searchbutton = styled(Button)`
    color: ${ThemeColors.primary}; 
    background-color: ${ThemeColors.text}!important;
    padding: 0.5rem 3rem;
    margin-top: ${(props) => props.top || "0"}!important;
    height: 56px;
    min-width: 10rem!important;
    &:hover {
        background-color: ${ThemeColors.text};
        color: ${ThemeColors.primary};
    }
    @media (max-width: ${size.sm}) {
        margin-left: 0rem!important;
        margin-top: 1rem!important;
        width: 100%;
        height: 36px;
    }
    &.Mui-disabled {
        color: rgba(0, 0, 0, 0.26);
        box-shadow: none;
        background-color: rgba(0, 0, 0, 0.12)!important;
      }

`;
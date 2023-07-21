import styled from "styled-components";
import { ThemeColors } from "./global.colors";

export const ListGrid = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

export const Section = styled.section`
    margin: 1rem 2rem;
    display: block;
`;

export const ShareContainer = styled.div`
    display: flex;
    height: 2rem;
    align-items: center;
    color: ${ThemeColors.text};
    text-decoration: none;

    &:hover {
        cursor: pointer;
    }
`;

export const NoConectivityContainer = styled.div`
    width: 30rem;
    margin: 2rem auto;
    padding: 2rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
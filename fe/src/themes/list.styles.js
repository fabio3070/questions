import styled from "styled-components";
import { ThemeColors } from "./global.colors";
import { size } from "./media.styles"

export const List = styled.section`
    display: flex;
    flex-flow: column;
    gap: 2rem;

`;

export const ListGrid = styled.ul`
    list-style-type: none;
    margin: 2rem 0;
    padding: 0;
    overflow: auto;
`;

export const Question = styled.li`
    color: ${ThemeColors.text};
    font-size: 1rem;
    margin-bottom: 0.5rem;
    height: 8rem;
    background-color: ${ThemeColors.listitem};
    display: flex;
`;

export const ListTitle = styled.p`
    margin-left: 1rem;
    font-size: 1.5rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;

    @media (max-width: ${size.sm}) {
        font-size: 1.2rem;
    }
`;

export const SubTitle = styled.p`
    font-size: 1rem;
    margin-left: 1rem;
    color: ${ThemeColors.textAlpha}
`;

export const RetryButton = styled.button`
    width: 8rem;
    height: 2rem;
    border: 1px solid ${ThemeColors.textAlpha};
    margin: 2rem auto;

`;

export const RetryButtonContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;

export const TagItem = styled.div`
    display: flex;
    align-items: center;
    height: 1.5rem;
    width: fit-content;
    display: flex;
    margin: 0;
    padding: 0.5rem 0.5rem; 
    border: 1px solid ${ThemeColors.text};
    border-radius: 0.5rem;
    margin-top: 0.5rem;
`;
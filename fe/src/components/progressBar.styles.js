import styled from "styled-components";
import { ThemeColors } from "../themes/global.colors";

export const ProgressBarContainer = styled.div`
    height: 3rem;
    background-color: ${ThemeColors.text};
    width: ${(props) => props.width}%;
    transition: width 0.5s;
`;
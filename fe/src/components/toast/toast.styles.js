import styled from "styled-components";
import { ThemeColors } from "../../themes/global.colors";

export const ToastContainer = styled.div`
    visibility: ${(props) => props.visible === true ? "visible" : "hidden"};
    height: 3rem;
    line-height: 3rem;
    padding: 0 1rem;
    background-color: ${(props) => props.toast === true ? ThemeColors.success : ThemeColors.error}
`;

export const ToastText = styled.p`
    float: left;
    margin: 0;
`;
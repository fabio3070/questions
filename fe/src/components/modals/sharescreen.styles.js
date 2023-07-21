import styled from "styled-components";
import { ThemeColors } from "../../themes/global.colors";
import { size } from "../../themes/media.styles";

export const ModalBackground = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.4);
    top: 0;
    left: 0;
`;

export const ModalContainer = styled.div`
    display:block;
    padding: 0 1rem;
    position: absolute;
    top: 7rem;
    left: 50%;
    transform: translateX(-50%);
    width: 30rem;
    height: 11rem;
    z-index: 2;
    background-color: ${ThemeColors.primary};

    @media (max-width: ${size.sm}) {
        width: 25rem;
    }
    @media (max-width: ${size.xs}) {
        width: 16rem;
    }
`;

export const ModalParent = styled.div`
    display: ${(props) => props.visible === true ? "block" : "none"};
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`;
import styled from "styled-components";
import { ThemeColors } from "../../themes/global.colors";
import { size } from "../../themes/media.styles";
import { Link } from "react-router-dom";


export const HeaderContainer = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: ${size.sm}) {
        display:block;
    }

`;

export const HeaderBack = styled(Link)`
    display: flex;
    height: 2rem;
    align-items: center;
    color: ${ThemeColors.text};
    text-decoration: none;

    @media (max-width: ${size.sm}) {
        margin-bottom: 2rem;
    }
`;

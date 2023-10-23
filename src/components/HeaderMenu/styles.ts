import styled from 'styled-components'

import bgHeaderImage from '../../assets/images/fundo.png'
import { breakpoints } from '../../styles'

export const BgHeader = styled.header`
    background-image: url(${bgHeaderImage});
    width: 100%;
    height: 186px;

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 70px;
    }

    p {
        font-weight: bold;
        font-size: 18px;
        cursor: pointer;

        @media (max-width: ${breakpoints.tablet}) {
            font-size: 12px;
        } 
    }

    img {
        @media (max-width: ${breakpoints.tablet}) {
            width: 80px;
        } 
    }
`

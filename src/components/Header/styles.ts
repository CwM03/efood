import styled from 'styled-components'

import bgHeaderImage from '../../assets/images/fundo.png'
import { breakpoints } from '../../styles'

export const BgHeader = styled.header`
    background-image: url(${bgHeaderImage});
    width: 100%;
    height: 384px;
    text-align: center;

    @media (max-width: ${breakpoints.tablet}) {
        height: 200px;
    }
    
    img {
        margin-top: 40px;
        margin-bottom: 138px;

        @media (max-width: ${breakpoints.tablet}) {
            margin-bottom: 20px;
        }
    }

    p {
        margin-top 138px;
        font-weight: bold;
        font-size: 36px;

        @media (max-width: ${breakpoints.tablet}) {
            font-size: 24px;
            margin-bottom: 40px;
        }
    }
`

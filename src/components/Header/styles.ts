import styled from 'styled-components'

import bgHeaderImage from '../../assets/images/fundo.png'

export const BgHeader = styled.header`
    background-image: url(${bgHeaderImage});
    width: 100%;
    height: 384px;
    text-align: center;
    
    img {
        margin-top: 40px;
        margin-bottom: 138px;
    }

    p {
        margin-top 138px;
        font-weight: bold;
        font-size: 36px;
    }
`

import styled from 'styled-components'

import bgFooterImage from '../../assets/images/fundo.png'

export const BgFooter = styled.footer`
  background-image: url(${bgFooterImage});
  width: 100%;
  height: 298px;
  text-align: center;

  .container p {
    font-size: 10px;
  }
`

export const Logo = styled.div`
  padding-top: 40px;
`

export const RedesSociais = styled.div`
  margin-top: 32px;
  margin-bottom: 40px;

  img {
    margin-right: 8px;
  }
`

import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  position: relative;
  width: 100%;
  height: 280px;

  background-repeat: no-repeat;
  background-size: cover;

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.5;
  }

  .container {
    position: relative;
    padding-top: 24px;
    padding-bottom: 32px;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    color: ${cores.branca};
    z-index: 1;

    h1 {
      font-weight: normal;
      font-size: 32px;
    }

    p {
      font-weight: bold;
      font-size: 32px;
    }
  }
`

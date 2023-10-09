import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.section`
  padding: 80px 0px;

  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 80px;
    width: 320px;

    background-color: ${cores.vermelha};
    border: 1px solid ${cores.vermelha};
    color: ${cores.branca};
    display: block;

    img {
      width: 300px;
      height: 160px;
      margin: 8px 8px 0 8px;
    }

    h1 {
      font-size: 16px;
      font-weight: bold;
      margin: 8px 8px 0 8px;
    }

    p {
      font-size: 14px;
      margin: 8px;
    }

    .botton {
      background-color: ${cores.branca};
      color: ${cores.vermelha};
      margin: 8px;
      display: flex;
      justify-content: center;
      width: 92%;
    }
  }
`

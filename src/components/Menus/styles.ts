import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  padding: 80px 0 88px 0;
`

export const Item = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  padding-bottom: 32px;

  li {
    background-color: ${cores.vermelha};
    border: 1px solid ${cores.vermelha};
    color: ${cores.branca};
  
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
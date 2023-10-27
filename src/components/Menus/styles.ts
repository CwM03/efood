import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Container = styled.div`
  padding: 80px 0 88px 0;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 40px 0 40px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

`

export const Item = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  padding-bottom: 32px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    width: 100%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    width: 50%;
  }

  @media (max-width: ${breakpoints.phone}) {
    grid-template-columns: 1fr;
    width: 100%;
  }

  li {
    background-color: ${cores.vermelha};
    border: 1px solid ${cores.vermelha};
    color: ${cores.branca};
  
    img {
      width: 300px;
      height: 160px;
      width: 100%;
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
      padding: 8px;
      display: flex;
      justify-content: center;
      width: 100%;
    }
  }
`

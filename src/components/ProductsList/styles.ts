import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.section`
  padding-top: 80px;

  @media (max-width: ${breakpoints.tablet}) {
    padding-top: 40px;
}
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;

  @media (max-width: ${breakpoints.desktop}){
    grid-template-columns: 1fr;
    width: 100%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

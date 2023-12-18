import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${colors.white};
  border: 1px solid ${colors.red};
  border-top: 0px;
  color: ${colors.red};
  position: relative;
  margin-bottom: 48px;

  ${TagContainer} {
    margin-right: 8px;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 8px;
    margin-bottom: 16px;
  }

  img {
    width: 472px;
    height: 217px;

    @media (max-width: ${breakpoints.desktop}) {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }

    @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
      height: 180px;
      object-fit: cover;
    }
  }
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  padding: 0px 8px;
`

export const Note = styled.h3`
  font-size: 18px;
  font-weight: bold;
  display: flex;
  padding: 0px 8px;

  img {
    width: 20px;
    height: 20px;
    margin-left: 8px;
  }
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  padding: 0px 8px;
`

export const Infos = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
`

export const KnowMore = styled.button`
  margin: 16px 8px 8px 8px;
  border: 0px;
`

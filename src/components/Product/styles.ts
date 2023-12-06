import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.branca};
  border: 1px solid ${cores.vermelha};
  border-top: 0px;
  color: ${cores.vermelha};
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
  }
`

export const Titulo = styled.h3`
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

export const Descricao = styled.p`
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

export const SaibaMais = styled.button`
  margin: 16px 8px 8px 8px;
  border: 0px;
`

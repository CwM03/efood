import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  color: ${(props) =>
    props.variant === 'primary' ? cores.branca : cores.vermelha};
  background-color: ${(props) =>
    props.variant === 'primary' ? cores.vermelha : cores.branca};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  text-decoration: none;
  border: none;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  background-color: ${cores.vermelha};
  color: ${cores.branca};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  text-decoration: none;
`

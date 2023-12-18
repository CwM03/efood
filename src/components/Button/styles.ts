import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../styles'

import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  color: ${(props) =>
    props.variant === 'primary' ? colors.white : colors.red};
  background-color: ${(props) =>
    props.variant === 'primary' ? colors.red : colors.white};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  text-decoration: none;
  border: none;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  background-color: ${colors.red};
  color: ${colors.white};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  text-decoration: none;
`

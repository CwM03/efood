import { styled } from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0p;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
`

export const ModalContent = styled.div`
  background-color: ${colors.red};
  color: ${colors.white};
  postion: relative;
  max-width: 1024px;
  z-index: 1;

  div img {
    width: 280px;
    height: 280px;
    margin: 0px 16px 16px 16px;
    object-fit: cover;

    @media (max-width: ${breakpoints.phone}) {
      width: 100%;
      margin: 0;
    }
  }

  header {
    display: flex;
    aligm-items: right;
    justify-content: right;
    margin: 8px;

    img {
      cursor: pointer;
      width: 16px;
    }
  }

  > div {
    display: flex;
    justify-content: space-between;

    @media (max-width: ${breakpoints.phone}) {
      display: block;
      justify-content: center;
      align-items: center;
      padding: 0px 16px 16px 16px;
    }

    h4 {
      margin-bottom: 24px;
      font-size: 16px;

      @media (max-width: ${breakpoints.phone}) {
        margin-top: 8px;
      }
    }

    p {
      font-size: 14px;
      margin-bottom: 16px;
      margin-right: 32px;
    }
  }

  .botton {
    background-color: ${colors.white};
    color: ${colors.red};
    font-size: 14px;
    font-weight: bold;
    border: 0;
    padding: 4px;
    cursor: pointer;
  }
`

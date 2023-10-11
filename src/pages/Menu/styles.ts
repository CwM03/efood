import { styled } from 'styled-components'
import { cores } from '../../styles'

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
  background-color: ${cores.vermelha};
  color: ${cores.branca};

  max-width: 1024px;
  position: relative;
  z-index: 1;

  div img {
    display: block;
    width: 280px;
    height: 280px;
    margin: 0px 24px 32px 32px;
    object-fit: cover;
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

    h4 {
      margin-bottom: 24px;
      font-size: 16px;
    }

    p {
      font-size: 14px;
      margin-bottom: 16px;
      margin-right: 32px;
    }
  }

  .botton {
    background-color: ${cores.branca};
    color: ${cores.vermelha};
  }
`

import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

import dump from '../../assets/images/lixeira-de-reciclagem.png'

export const CartContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    justify-content: flex-end;
    z-index: 1;

    &.is-open {
        display: flex;
    }
`

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.7;
`

export const Sidebar = styled.aside`
    z-index: 1;
    background-color: ${cores.vermelha};
    color: ${cores.branca};
    padding: 32px 8px 0px 8px;
    max-width: 360px;
    width: 360px;

    @media (max-width: ${breakpoints.tablet}) {
        max-width: 320px;
    }    

    p {
        padding-top: 24px;
        padding-bottom: 8px;
        font-size: 14px;
        display: flex;
        justify-content: space-between;

        span {
            font-size: 14px;
        }
    }

    .botton {
        background-color: ${cores.branca};
        color: ${cores.vermelha};
        display: flex;
        justify-content: center;
        width: 100%;
    }
`

export const CartItem = styled.li`
    display: flex;
    background-color: ${cores.branca};
    padding: 8px;
    margin-bottom: 16px;

    img {
        width: 80px;
        height: 80px;
        object-fit: cover;
    }

    div {
        margin-left: 8px;
        color: ${cores.vermelha};

        h3 {
            font-size: 18px;
            margin-bottom: 16px;
        }

        span {
            font-size: 14px;
        }
    }
`

export const Dump = styled.div`
    position: relative;

    button {
        background-image: url(${dump});
        background-color: transparent;
        border: 0;
        position: absolute;
        bottom: 0;
        margin-left: 84px;
        width: 16px;
        height: 16px;
    }
`

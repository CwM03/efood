import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

import dump from '../../assets/images/lixeira-de-reciclagem.png'

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.7;
`

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

export const Sidebar = styled.aside`
    background-color: ${colors.red};
    z-index: 1;
    color: ${colors.white};
    padding: 32px 8px 0px 8px;
    max-width: 360px;
    width: 100%;

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

    .button-primary {
        display: block;
        background-color: ${colors.white};
        color: ${colors.red};
        font-size: 14px;
        font-weight: bold;
        padding: 4px 6px;
        text-decoration: none;
        border: 0;
        text-align: center;
        width: 100%;
        margin-top: 24px;
        margin-bottom: 8px;
    }

    .button-secondary {
        display: block;
        background-color: ${colors.white};
        color: ${colors.red};
        font-size: 14px;
        font-weight: bold;
        padding: 4px 6px;
        text-decoration: none;
        border: 0;
        text-align: center;
        width: 100%;
    }

    .empty-text {
        font-size: 14px;
        line-height: 22px;
        color: ${colors.white};
        text-align: center;
    }
`

export const CartItem = styled.li`
    background-color: ${colors.white};
    padding: 8px;
    margin-bottom: 16px;
    
    div {
        display: flex;
        position: relative;
        margin-left: 8px;
        color: ${colors.red};

        img {
            width: 80px;
            height: 80px;
            object-fit: cover;
        }

        div {
            display: block;
            width: 100%;/

            h3 {
                font-size: 18px;
                margin-bottom: 16px;
            }
    
            span {
                font-size: 14px;
            }

            button {
                position: absolute;
                background-image: url(${dump});
                background-color: transparent;
                border: 0;
                bottom: 0;
                right: 0;
                width: 16px;
                height: 16px;
                cursor: pointer;
            }
        }
    }
`

export const Form = styled.form`

    h2 {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 16px;
    }

    div label {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 8px;
    }

    input {
        border: 2px solid transparent;
        border-radius: 2px;
        padding: 8px;
        width: 100%;
        margin-bottom: 8px;
    }
`



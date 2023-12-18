import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#FFF8F2',
  red: '#E66767'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
  phone: '425px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${colors.white};
    color: ${colors.red};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }

    @media (max-width: ${breakpoints.tablet}) {
      max-width: 80%;
    }

    @media (max-width: ${breakpoints.phone}) {
      max-width: 80%;
    }
  }
`

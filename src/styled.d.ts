import 'styled-components'

interface IPalette {
  main: string
  contrastText: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    common: {
      black: string
      white: string
      gray: string
    }
    primary: IPalette
    secondary: IPalette
  }
}

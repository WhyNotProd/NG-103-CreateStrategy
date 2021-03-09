// styled.d.ts
import 'styled-components';

interface IPalette {
  main: string
  contrastText: string
}
interface IBreakPoints {
  sm: string //mobile
  md: string //tablet
  lg: string //desktop
}

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string
    palette: {
      common: {
        black: string
        white: string
      }
      primary: IPalette
      secondary: IPalette
    },
    breakPoints: IBreakPoints
  }
}

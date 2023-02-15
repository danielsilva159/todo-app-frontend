import { ThemeProvider } from "styled-components"

interface Props {
  children: React.ReactNode;
}

const fontsSizes: any = [14,20,96]
fontsSizes.body = fontsSizes[0];
fontsSizes.bodyExtraLarge = fontsSizes[1];
fontsSizes.displayExtraLarge = fontsSizes[2];

const primary = '#256784';
const secondary = '#F98531';
const theme = {
  fontsSizes,
  colors: {
    primary,
    secondary
  }

}

export type ThemeType = typeof theme;
export const Theme: React.FC<Props> = ({children}) => {
  
  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )
}
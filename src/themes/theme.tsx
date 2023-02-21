import { ThemeProvider } from "styled-components"

interface Props {
  children: React.ReactNode;
}

const fontSizes: any = [14,18,20,96];
fontSizes.body = fontSizes[0];
fontSizes.bodyLarge = fontSizes[1];
fontSizes.bodyExtraLarge = fontSizes[2];
fontSizes.displayExtraLarge = fontSizes[3];

const primary = '#256784';
const secondary = '#F98531';
const theme = {
  fontSizes,
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
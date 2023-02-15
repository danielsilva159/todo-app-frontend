import styled from "styled-components"
import { TypographyProps, typography } from "styled-system"

type TextProps = TypographyProps;
export const Text = styled.p<TextProps>`
  font-family: 14px;
  color: #fff;
  ${typography}
`

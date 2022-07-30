import { css } from 'styled-components'
import { breakpoints } from './breakpoints'

const FontSizeVars = {
  defaultText: 20,
  header: 26,
  subheader: 24
}

type FontVars = keyof typeof FontSizeVars

export const TextVars = (fontVars: FontVars) => css`
  @media (min-width: ${breakpoints.xl}) {
    font-size: ${FontSizeVars[fontVars] + 4}px;
  }

  @media (min-width: ${breakpoints.lg}) {
    font-size: ${FontSizeVars[fontVars] + 2}px;
  }

  @media (min-width: ${breakpoints.md}) {
    font-size: ${FontSizeVars[fontVars]}px;
  }

  @media (min-width: ${breakpoints.sm}) {
    font-size: ${FontSizeVars[fontVars] - 2}px;
  }

  @media (min-width: ${breakpoints.xs}) {
    font-size: ${FontSizeVars[fontVars] - 4}px;
  }
`

export const breakpoints = {
  xs: 500,
  sm: 700,
  md: 1000,
  lg: 1400,
  xl: 2000
}

Object.keys(breakpoints).forEach(
  (key) => (breakpoints[key] = breakpoints[key] + 'px')
)

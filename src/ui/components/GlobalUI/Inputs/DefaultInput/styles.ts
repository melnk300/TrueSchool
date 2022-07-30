import styled from 'styled-components'
import { colorsCustom } from '../../colors'
import { TextVars } from '../../TextVars'

interface IDefaultInputProps {
  isTitleShown: boolean
  backgroundColor?: string
}

interface ITitleProps {
  isTitleShown: boolean
}

export const Wrapper = styled.div`
  padding: 8px 16px;
  background-color: ${colorsCustom.primary};
  border-radius: 15px;
  color: white;
  display: flex;
  justify-items: center;
  flex-direction: column;
`

// export const Title = styled.label<ITitleProps>`
//   font-size: 12px;
//   width: 100%;
//   transition-delay: 0.2s;
//   transition-property: visibility;
//   transition-property: height;
//
//   ${(props) =>
//     props.isTitleShown
//       ? 'visibility: visible; height: 100%'
//       : 'visibility: hidden; height: 0%'}
// `

export const InputError = styled.p``

export const DefaultInput = styled.input<IDefaultInputProps>`
  border: none;
  background: none;
  color: white;
  width: 100%;
  transition: 0.2s ease-in-out;
  ${TextVars('defaultText')};

  &::placeholder {
    color: ${colorsCustom.textSecondary};
  }
`

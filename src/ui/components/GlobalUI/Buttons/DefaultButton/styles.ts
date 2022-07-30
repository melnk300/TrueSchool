import styled from 'styled-components'

interface IWrapperProps {
  background?: string
}

export const Wrapper = styled.button<IWrapperProps>`
  display: block;
  background-color: ${(props) => props.background || '#841a20'};
  border: none;
  padding: 0.8em 1.5em;
  border-radius: 0.8em;
  color: #d7d0d0;
  font-weight: 700;
`

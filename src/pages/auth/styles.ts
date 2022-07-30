import styled from 'styled-components'

interface IInputGroupProps {
  cols?: number
}

export const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  background: linear-gradient(
    90deg,
    rgba(34, 0, 0, 1) 0%,
    rgba(61, 0, 0, 1) 61%,
    rgba(107, 0, 0, 1) 100%
  );
  min-height: 100vh;
  padding: 0 30px;
`

export const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Wrapper = styled.form``

export const InputGroup = styled.div<IInputGroupProps>`
  display: grid;
  grid-template-columns: ${(props) => '1fr '.repeat(props.cols || 1)};
  gap: 20px;
  margin: 20px 0;
`

export const NameGroup = styled(InputGroup)``

import * as S from './styles'

export interface IDefaultButtonProps {
  value: string
  handleClick(): void
}

const DefaultButton = (props: IDefaultButtonProps) => {
  const { value, handleClick } = props

  return <S.Wrapper onClick={handleClick}>{value}</S.Wrapper>
}

export default DefaultButton

import * as S from './styles'

export interface IProfileCardProps {
  title: string
  description: string
  logo: string
}

const ProfileCard = (props: IProfileCardProps) => {
  const { title, description } = props

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Wrapper>
  )
}

export default ProfileCard

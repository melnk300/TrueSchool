import * as S from './styles'
import DefaultInput from '../../ui/components/GlobalUI/Inputs/DefaultInput'
import { ChangeEvent, useState } from 'react'
import { Heading1 } from '../../ui/components/GlobalUI/Text/styles'
import DefaultButton from '../../ui/components/GlobalUI/Buttons/DefaultButton'

interface IAuthValue {
  name: string
  surname: string
  email: string
  password: string
}

const AuthPage = () => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [birthday, setBirthday] = useState('')

  const handleRegistration = (e) => {
    e.preventDefault()
    console.log(name)
  }

  return (
    <S.PageContainer>
      <S.Container>
        <Heading1>Создание аккаунта</Heading1>
        <S.Wrapper>
          <S.NameGroup cols={2}>
            <DefaultInput title="Имя" value={name} setter={setName} />
            <DefaultInput title="Фамилия" value={surname} setter={setSurname} />
          </S.NameGroup>
          <S.InputGroup>
            <DefaultInput title="Эл. почта" value={email} setter={setEmail} />
          </S.InputGroup>
          <S.InputGroup>
            <DefaultInput
              title="Пароль"
              value={password}
              setter={setPassword}
            />
          </S.InputGroup>
          <S.InputGroup>
            <DefaultInput
              title="Дата рождения"
              value={birthday}
              setter={setBirthday}
            />
          </S.InputGroup>
          <DefaultButton
            value="Зарегестрироваться"
            handleClick={handleRegistration}
          />
        </S.Wrapper>
      </S.Container>
    </S.PageContainer>
  )
}

export default AuthPage

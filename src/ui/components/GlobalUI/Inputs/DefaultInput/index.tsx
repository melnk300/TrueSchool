import * as S from './styles'
import { useState } from 'react'

const DefaultInput = (props) => {
  const { title, setter, value } = props
  const [isTitleShown, setIsTitleShown] = useState(false)

  const handleChange = (e) => {
    setIsTitleShown(value)
    setter(e.target.value)
  }

  return (
    <S.Wrapper>
      <S.DefaultInput
        name={title}
        onChange={handleChange}
        isTitleShown={isTitleShown}
        placeholder={title}
        backgroundColor={props?.backgroundColor}
      />
    </S.Wrapper>
  )
}

export default DefaultInput

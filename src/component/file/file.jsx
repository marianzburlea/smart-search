import * as S from './file.style'

const File = ({ name, refIndex, description, match }) => {
  return (
    <S.File match={match}>
      <S.Name>{name}</S.Name>
      <S.Description>{description}</S.Description>
    </S.File>
  )
}

export default File

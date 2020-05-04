import styled from 'styled-components'
import Text from '../../components/Text'
export const ProfileContainer = styled.div``

export const ProfileField = styled.div`
  margin-top: 30px;
`

export const TextColoredSmall = styled(Text)`
  color: ${props => props.theme.colors.primary};
  font-size: 8px;
`

export const TextColored = styled(Text)`
  color: ${props => props.theme.colors.primary};
`

export const ButtonSimple = styled.button`
  outline: none;
`
export const LanguageField = styled.div`
align-self: flex-end;
`
export const ButtonLanguage = styled.button`
margin: 5px;
`

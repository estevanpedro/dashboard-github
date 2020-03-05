import styled from 'styled-components'
import Text from '../../components/Text'

export const SignUpContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const SignUpForm = styled.form`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  button {
    margin-top: 30px;
    margin-bottom: 10px;
    align-self: center;
  }
`

export const ReturnText = styled(Text)`
  margin-top: 10px;
  align-self: center;
`

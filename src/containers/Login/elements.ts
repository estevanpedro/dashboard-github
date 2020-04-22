import styled from 'styled-components'

export const LoginForm = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const LoginContainer = styled.div`
  margin-top: 60px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SmallText = styled.p`
margin: 15px 0 5px 0;
color: ${props => props.theme.colors.contrast};
`

export const LoginCDA = styled.button<LoginHover>`
width: 250px;
border-radius: 30px;
  background-color: ${props => props.hover ? props.theme.colors.confirm : props.theme.colors.cda};
  color:  ${props => props.hover ? props.theme.colors.background : props.theme.colors.white};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 5px 20px 5px 20px;
  outline: none;
  margin: 10px 0 0 0;
`
interface LoginHover {
  hover?: boolean
}

export const CDAText = styled.p`
font-size: ${props => props.theme.fontSize.verySmall};
margin-right: 15px;
`
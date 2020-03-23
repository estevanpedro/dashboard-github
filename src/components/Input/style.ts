import styled from 'styled-components'

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  width: ${props => props.width};
  height: 86px;
  margin-bottom: ${props => props.marginBottom}px;
`

interface ContainerProps {
  width: string
  marginBottom: number
}

export const Label = styled.label<LabelProps>`
  margin-bottom: 10px;
  font-size: ${props => props.theme.fontSize.small};
  color: ${props =>
    !props.isFocused
      ? props.theme.colors.contrast
      : props.theme.colors.primary};
  transition: 0.3s ease color;
`

interface LabelProps {
  isFocused: boolean
}

export const InputField = styled.input<InputFieldProps>`
  border-bottom-width: 1px;
  border-bottom-color: ${props =>
    !props.isFocused
      ? props.theme.colors.contrast
      : props.theme.colors.primary};
  font-size: ${props => props.theme.fontSize.big};
  background: transparent;
  outline: none;
  transition: 0.3s ease border-bottom;
  border-top: none;
  border-left: none;
  border-right: none;
  caret-color: ${props => props.theme.colors.contrast};
  color: ${props => props.theme.colors.contrast};
`

interface InputFieldProps {
  isFocused: boolean
}

export const Error = styled.span`
  color: ${props => props.theme.colors.cancel};
`

import styled from 'styled-components'

import ds from '../../design/designSystem'

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  width: ${props => props.width};
  height: 86px;
  margin-bottom: 20px;
`

interface ContainerProps {
  width: string
}

export const Label = styled.label<LabelProps>`
  margin-bottom: 10px;
  font-size: ${ds.fontSize.small};
  color: ${props =>
    !props.isFocused ? ds.colors.contrast : ds.colors.primary};
  transition: 0.3s ease color;
`

interface LabelProps {
  isFocused: boolean
}

export const InputField = styled.input<InputFieldProps>`
  font-size: ${ds.fontSize.regular};
  border: none;
  border-bottom: ${props =>
    !props.isFocused
      ? `1px solid ${ds.colors.line}`
      : `1px solid ${ds.colors.primary}`};
  font-size: ${ds.fontSize.big};
  background: transparent;
  outline: none;
  transition: 0.3s ease border-bottom;
`

interface InputFieldProps {
  isFocused: boolean
}

export const Error = styled.span`
  color: ${ds.colors.cancel};
`

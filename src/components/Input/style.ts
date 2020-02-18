import styled from 'styled-components'

import ds from '../../design/designSystem'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 460px;
  height: 86px;
`

export const Label = styled.label<LabelProps>`
  font-size: ${ds.fontSize.small};
  color: ${props =>
    !props.isFocused ? ds.colors.contrast : ds.colors.primary};
  transition: 0.3s ease color;
`

interface LabelProps {
  isFocused: boolean
}

export const InputField = styled.input<InputFieldProps>`
  border: none;
  border-bottom: ${props =>
    !props.isFocused
      ? `1px solid ${ds.colors.line}`
      : `1px solid ${ds.colors.primary}`};
  font-size: ${ds.fontSize.big};
  outline: none;
  transition: 0.3s ease border-bottom;
`

interface InputFieldProps {
  isFocused: boolean
}

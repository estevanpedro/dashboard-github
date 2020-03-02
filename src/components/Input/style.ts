import styled from 'styled-components'

import ds from '../../design/designSystem'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 460px;
  height: 86px;
  margin-bottom: 20px;
`

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
  border-bottom-width: 1px;
  border-bottom-color: ${props =>
    !props.isFocused ? ds.colors.contrast : ds.colors.primary};
  font-size: ${ds.fontSize.big};
  background: transparent;
  outline: none;
  transition: 0.3s ease border-bottom;
  border-top: none;
  border-left: none;
  border-right: none;
`

interface InputFieldProps {
  isFocused: boolean
}

export const Error = styled.span`
  color: ${ds.colors.cancel};
`

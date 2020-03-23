import styled from 'styled-components'

export const Containner = styled.div``
export const TableContainner = styled.div`
  border-bottom: 1px solid white;
`

export const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const Option = styled.button<OptionProps>`
  width: 170px;
  height: 30px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  background-color: ${props =>
    !props.isFocused
      ? props.theme.colors.primary
      : props.theme.colors.contrast};
  outline: none;
  color: ${props => props.theme.colors.background};
  font-size: ${props => props.theme.fontSize.regular};
  font-weight: bold;
  cursor: pointer;
  margin: 0 2px 0 2px;
`

interface OptionProps {
  isFocused?: boolean
}

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
export const NewButton = styled.button`
    display: flex;
    background-color: ${props => props.theme.colors.secondary};
    color: white;
    font-size: 18px;
    padding: 5px 15px 5px 15px;
    align-self: center;
    border-radius: 2px;
    justify-self: flex-end;
    margin: 30px 40px 0 5px;
`
import styled from 'styled-components'

export const SelectorContainer = styled.div`
  display: flex;
  width: 100%;
`

export const SelectorOption = styled.div<SelectorOptionsProps>`
  height: 30px;
  display: flex;
  padding: 5px;
  justify-content: center;
  align-items: center;
  color: ${props =>
    props.selected
      ? props.theme.colors.background
      : props.theme.colors.contrast};
  font-weight: ${props => (props.selected ? 'bold' : 'regular')};
  flex: 1;
  background-color: ${props =>
    props.selected ? props.theme.colors.primary : 'transparent'};
  border: ${props =>
    props.selected ? 'none' : `2px solid ${props.theme.colors.primary}`};
  cursor: pointer;
  box-sizing: border-box;
  margin-right: 5px;
  &.start {
    border-radius: 4px 0 0 4px;
  }
  &.end {
    border-radius: 0 4px 4px 0;
  }
  margin-bottom: 20px;
`

interface SelectorOptionsProps {
  selected: boolean
}

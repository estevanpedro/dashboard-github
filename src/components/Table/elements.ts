import styled from 'styled-components'
import FlexContainer from '../FlexContainer'

interface ColumnProps {
  width?: string
}

export const Container = styled.div<ContainerProps>`
  padding: 4px 4px;
  border-top: 1px solid ${props => props.theme.colors.contrast};
  align-items: center;
  display: flex;
  justify-content: space-between;
  background-color: ${props =>
    props.pair
      ? props.theme.colors.secondaryBg
      : props.theme.colors.background};
`
interface ContainerProps {
  pair: boolean
}
export const Colunm = styled.div<ColunmField>`
  width: ${props => (props.width ? props.width : '150px')};
  flex-direction: column;
  display: flex;
  padding: 0 20px;
  margin: 5px;
`
interface ColunmField {
  width?: string
}

export const Column = styled(FlexContainer)<ColumnProps>`
  width: ${props => props.width || '150px'};
  flex-direction: column;
  padding: 0 20px;
  margin: 5px;
`

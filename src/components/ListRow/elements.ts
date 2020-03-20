import styled from 'styled-components'
import FlexContainer from '../FlexContainer'

interface ColumnProps {
  width?: string
}

export const Column = styled(FlexContainer)<ColumnProps>`
  width: ${props => props.width || '150px'};
  flex-direction: column;
  padding: 0 20px;
  margin: 5px;
`

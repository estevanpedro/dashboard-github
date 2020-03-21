import styled from 'styled-components'
import ds from '../../design/designSystem'
import Text from '../Text'

export const Container = styled.div<ContainerProps>`
  padding: 4px 4px;
  border-top: 1px solid ${ds.colors.contrast};
  align-items: center;
  display: flex;
  justify-content: space-between;
  background-color: ${props => (props.pair ? ds.colors.secondaryBg : ds.colors.background)};
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
  width?: string;
}

export const Title = styled(Text)`
 font-weight: bold;
`
export const PayloadText = styled(Text)`
  color: ${ds.colors.primary};;
`

export const Name = styled(Text)`
  font-style: italic;
  font-size: ${ds.fontSize.verySmall};
`
import styled from 'styled-components'
import Text from '../Text'

export const Container = styled.div`
  padding: 10px 10px;
  border-top: 1px solid ${props => props.theme.colors.contrast};
  align-items: center;
  display: flex;
  justify-content: space-between;
`
export const Colunm = styled.div<ColunmField>`
  width: ${props => (props.width ? props.width : '150px')};
  flex-direction: column;
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  margin: 5px 5px 5px 5px;
`
interface ColunmField {
  width?: string
}

export const Title = styled(Text)`
  font-weight: bold;
`
export const PayloadText = styled(Text)`
  color: ${props => props.theme.colors.primary};
`

export const Name = styled(Text)`
  font-style: italic;
  font-size: ${props => props.theme.fontSize.verySmall};
`

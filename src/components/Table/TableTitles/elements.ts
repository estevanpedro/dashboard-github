import styled from 'styled-components'
import Text from '../../Text'

export const ContainerTitles = styled.div`
  padding: 0 10px;
  border-top: 1px solid ${props => props.theme.colors.contrast};
  align-items: center;
  display: flex;
  justify-content: space-between;
`

export const Colunm = styled.div<ColunmField>`
  width: ${props => (props.width ? props.width : '150px')};
  flex-direction: column;
  display: flex;
  padding-left: 10px;
  padding-right: 10px;
  margin: 5px 5px 5px 5px;
`
interface ColunmField {
  width?: string
}

export const Title = styled(Text)`
  font-weight: bold;
`

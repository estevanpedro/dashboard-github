import styled from 'styled-components'
import Text from '../../components/Text'

export const Container = styled.div`
 margin-top: 60px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
align-items: center;
`
export const TableText = styled(Text) <WidthProps>`
  color: ${props => props.theme.colors.contrast};
  font-size: 14px;
  width: ${props => (props.width ? props.width : '')};
`
interface WidthProps {
  width?: string
  color?: any

}
export const IdText = styled(Text) <WidthProps>`
  color: ${props => props.theme.colors.confirm};
  font-size: 14px;
  position: initial;
  width: ${props => (props.width ? props.width : '')};
  margin: 0 0 0 15px;
`

export const ValuesField = styled.div<ValuesProps>`
  justify-content: space-between;
  display: flex;
  width: 30%;
  background-color: ${props =>
    props.pair ? props.theme.colors.grey : props.theme.colors.secondaryBg};
`
interface ValuesProps {
  pair?: boolean
}

export const Colunm = styled.div<ColunmField>`
  width: ${props => (props.width ? props.width : '200px')};
  flex-direction: column;
  display: flex;
  padding: 0 20px;
  margin: 5px;
`
interface ColunmField {
  width?: string
}

export const Row = styled.div<ColunmField>`
  flex-direction: row;
  display: flex;
`
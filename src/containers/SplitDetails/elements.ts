import styled from 'styled-components'
import Text from '../../components/Text'

export const Container = styled.div`
`

export const Header = styled.div`
display: flex;
  flex-direction: row;
`
export const Body = styled.div`
flex-direction: row;
display: inline-block;
justify-content: space-around;
align-items: stretch;
`

export const Bottom = styled.div`
margin: 30px 0 0 0;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
`

export const Category = styled.div`
    height: 22px;
    margin-left:10px;
    padding: 0px 5px 0px 5px;
    border: 2px solid ${props => props.theme.colors.primary};
    align-self: center;
    display: block;
    justify-content: flex-start;
    margin-right: auto;
`

export const CategoryName = styled(Text)`
  color: ${props => props.theme.colors.primary};
`
export const SubtitleText = styled.p`
  font-size: 18px;
  color: ${props => props.theme.colors.contrast};
  font-weight: bold;
`
export const PayloadText = styled.p`
  font-size: 16px;
  color: ${props => props.theme.colors.contrast};
`

export const QRField = styled.div`
    margin: 25px;
    padding: 15px;
    background-color: white;
    display: inline-block;
`
export const DetailsField = styled.div`
    margin: 20px 5px 5px 5px;
    padding: 10px;
    flex-direction: row;
    display: inline-block;
`
export const GraphicField = styled.div`
    margin: 5px;
    padding: 5px;
    flex-direction: row;
    display: inline-block;
`
export const GraphicText = styled(Text)`
    margin: 5px;
`
export const BottomField = styled.div`
    margin: 5px;
    padding: 5px;
    flex-direction: row;
    display: inline-block;
    background-color: ${props => props.theme.colors.secondaryBg};
`

export const TableTitle = styled(Text)`
  color: ${props => props.theme.colors.contrast};
  font-size: 16px;
  padding: 0 10px 0 10px; 
  margin: 0 10px 0 0px;
`

export const InfoText = styled(Text)`
  color: ${props => props.theme.colors.contrast};
  font-size: 16px;
  padding: 0 10px 0 10px; 
  margin: 0 10px 0 0px;
`

export const TableText = styled(Text) <TableTextProps>`
  color: ${props => props.theme.colors.contrast};
  font-size: 14px;
  /* padding: 0 20px 0 10px; */
  border: 1px solid green;
  width: ${props => props.width ? props.width : ''};
`
interface TableTextProps {
  width?: string
}

export const BalanceText = styled(Text)`
  color: ${props => props.theme.colors.confirm};
  font-size: 14px;
  padding: 0 10px 0 10px;
  border: 1px solid green;
  position: initial;
`

export const TitleField = styled.div`
  justify-content: space-between;
  display: flex;
  width: 400px;
`
export const ValuesField = styled.div<ValuesProps>`
  justify-content:  space-between;
  display: flex;
  width: 400px;
  background-color: ${props =>
    props.pair
      ? props.theme.colors.grey
      : props.theme.colors.secondaryBg};
`
interface ValuesProps {
  pair?: boolean
}
export const EditButton = styled.button`
    display: flex;
    background-color: ${props => props.theme.colors.secondary};
    color: white;
    font-size: 18px;
    /* height: 35px; */
    padding: 5px 15px 5px 15px;
    align-self: center;
    /* display: block; */
    border-radius: 2px;
    justify-self: flex-end;
    margin: 0 40px 0 5px;

`
export const Line = styled.div`
background-color: ${props => props.theme.colors.line};
height: 1px;
display: flex;
align-self: center;
`
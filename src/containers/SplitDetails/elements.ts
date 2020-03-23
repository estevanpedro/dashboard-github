import styled from 'styled-components'
import Text from '../../components/Text'

export const Container = styled.div`
`

export const Header = styled.div`
  display: flex;
`
export const Body = styled.div`
flex-direction: column;
display: inline-block;
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

export const TableText = styled(Text)`
color: ${props => props.theme.colors.contrast};
font-size: 14px;
padding: 0 20px 0 10px;
`

export const BalanceText = styled(Text)`
color: ${props => props.theme.colors.confirm};
font-size: 14px;
padding: 0 10px 0 10px;
`

export const TitleField = styled.div`
justify-content: space-between;
display: flex;
width: 400px;
`
export const ValuesField = styled.div`
justify-content:  space-between;
display: flex;
width: 400px;
background-color: grey;
`
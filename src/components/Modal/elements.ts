import styled from 'styled-components'
import ds from '../../design/designSystem'

export const Container = styled.div`
  padding: 10px 10px;
`

export const Input = styled.input<InputProps>`
  border-radius: 4px;
  border-color: ${ds.colors.secondaryBg};
  border-width: 0.1;
  width: 300px;
  height: 25px;
`
interface InputProps { }

export const ModalField = styled.div<ModalField>`
  width: 100%;
  margin-top: 10px;
  text-align: ${props => props.align ? props.align : 'left'}
`
interface ModalField {
  align?: 'left' | 'center' | 'right'
}

export const Button = styled.button`
width: 150px;
height: 40px;
background-color: ${ds.colors.confirm};
color: ${ds.colors.background};
font-size: ${ds.fontSize.regular};
font-weight: bold;
border-radius: 50px;
font-size: 16px;
box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.25);
cursor: pointer;
&:active {
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
  }
`

export const Close = styled.a`
  cursor: pointer;
  position: absolute;
  display: block;
  padding: 2px 5px;
  line-height: 20px;
  right: -10px;
  top: -10px;
  font-size: 24px;
  background: #ffffff;
  border-radius: 18px;
  border: 1px solid #cfcece;
`

export const IconButton = styled.button`
`

//Stylesheet para o contentStyle do Popup
export const ModalLight = {
  width: 400,
  borderRadius: 4,
  border: 'none',
}
export const ModalDark = {
  width: 400,
  borderRadius: 4,
  backgroundColor: '#262E33',
  border: 'none',
}
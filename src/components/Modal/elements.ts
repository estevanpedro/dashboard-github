import styled from 'styled-components'
import ds from '../../design/designSystem'

export const PopupStyle = {
  width: 400,
  borderRadius: 4,
  border: 'none',
  display: 'flex',
  padding: '15px 30px',
}

export const Container = styled.div`
  padding: 10px 10px;
`

interface InputProps {}

export const ModalField = styled.div<ModalField>`
  width: 100%;
  margin-top: 10px;
  text-align: ${props => (props.align ? props.align : 'left')};
`
interface ModalField {
  align?: 'left' | 'center' | 'right'
}

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

export const IconButton = styled.button``

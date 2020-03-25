import styled from 'styled-components'

import ds from '../../design/designSystem'

export const PopupStyleLight = {
  width: 600,
  height: 730,
  borderRadius: 4,
  border: 'none',
  display: 'flex',
  padding: '15px 30px',
  backgroundColor: ds.light.colors.secondaryBg,
}

export const PopupStyleDark = {
  width: 600,
  height: 730,
  borderRadius: 4,
  border: 'none',
  display: 'flex',
  padding: '15px 30px',
  backgroundColor: ds.dark.colors.secondaryBg,
}

export const Container = styled.div`
  padding: 10px 10px;
  width: 100%;
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

export const IconButton = styled.button``

export const ErrorAlert = styled.div`
  width: 52px;
  height: 52px;
  background-color: ${props => props.theme.colors.cancel};
`

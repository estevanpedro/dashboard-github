import styled from 'styled-components'

import ds from '../../design/designSystem'

const CommonStyle = {
  width: 700,
  height: '70vh',
  borderRadius: 4,
  border: 'none',
  display: 'flex',
  padding: '10px 0',

}

export const PopupStyleLight = {
  ...CommonStyle,
  backgroundColor: ds.light.colors.secondaryBg,
}

export const PopupStyleDark = {
  ...CommonStyle,
  backgroundColor: ds.dark.colors.secondaryBg,
}

export const Container = styled.div`
  padding: 0 25px;
  width: 100%;
  height: 100%;
  overflow: scroll;
  ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px ${props => props.theme.colors.secondaryBg};
      border-radius: 10px;
    }
    ::-webkit-scrollbar-corner {
      background: ${props => props.theme.colors.secondaryBg};
    }
    ::-webkit-scrollbar {
      width: 13px;
      background: ${props => props.theme.colors.secondaryBg};
    }
    ::-webkit-scrollbar-thumb {
      background: ${props => props.theme.colors.primary};
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: ${props => props.theme.colors.primary};
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

export const IconButton = styled.button``

export const ErrorAlert = styled.div`
  width: 32px;
  height: 32px;
  background-color: ${props => props.theme.colors.cancel};
  margin-right: 10px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 22px;
    height: 22px;
  }
`

export const ErrorInfo = styled.div`
  width: 320px;
  height: 60px;
  background-color: ${props => props.theme.colors.cancel};
  opacity: 0.8;
  position: absolute;
  left: -5px;
  border-radius: 4px;
  overflow-y: scroll;
  padding: 10px;
  box-sizing: border-box;
  div {
    color: ${props => props.theme.colors.contrast};
    font-size: ${props => props.theme.fontSize.regular};
    display: flex;
    align-items: center;
  }
`

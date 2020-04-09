import styled from 'styled-components'

import FlexContainer from '../../../components/FlexContainer'

export const MenuContainer = styled.menu`
  width: 350px;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  background-color: ${props => props.theme.colors.secondaryBg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  overflow-y: scroll;
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px ${props => props.theme.colors.background};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-corner {
    background: ${props => props.theme.colors.background};
  }
  ::-webkit-scrollbar {
    width: 13px;
    background: ${props => props.theme.colors.background};
  }
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.primary};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.primary};
  }
`

export const OptionContainer = styled.div`
  width: 92px;
  height: 92px;
  margin: 0 20px 20px 20px;
  border: 3px solid ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 4px;
  color: ${props => props.theme.colors.contrast};
  cursor: pointer;
`

export const MenuButtonContainer = styled(FlexContainer)`
  background-color: ${props => props.theme.colors.secondaryBg};
  position: sticky;
  width: 100%;
  align-items: feComponentTransfer;
  justify-content: flex-end;
  bottom: 0;
`

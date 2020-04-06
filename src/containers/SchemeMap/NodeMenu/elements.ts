import styled from 'styled-components'

export const MenuContainer = styled.menu`
  width: 23%;
  height: 100%;
  padding: 20px;
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

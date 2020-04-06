import styled from 'styled-components'

export const SchemeContainer = styled.div`
  height: 70%;
  width: 100%;
  position: relative;
  border: 1px solid ${props => props.theme.colors.secondaryBg};
  border-radius: 4px;
  box-sizing: border-box;
`

export const OverflowContainer = styled.div`
  width: 82%;
  height: 100%;
  overflow: scroll;
`

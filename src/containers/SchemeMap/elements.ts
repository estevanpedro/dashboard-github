import styled from 'styled-components'

export const SchemeContainer = styled.div`
  height: 70%;
  width: 100%;
  position: relative;
  padding: ${props => props.theme.spacing.lateral};
  border: 1px solid ${props => props.theme.colors.secondaryBg};
  border-radius: 4px;
  box-sizing: border-box;
`

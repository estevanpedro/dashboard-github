import styled from 'styled-components'

export default styled.h1`
  font-size: ${props => props.theme.fontSize.title};
  color: ${props => props.theme.colors.contrast};
`

export const SubTitle = styled.h1`
  font-size: ${props => props.theme.fontSize.big};
  color: ${props => props.theme.colors.contrast};
`

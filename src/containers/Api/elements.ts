import styled from 'styled-components'

export const Containner = styled.div``
export const Text = styled.p`
  /* margin: 0 0 0 0; */
  font-size: ${props => props.theme.fontSize.regular};
  color: ${props => props.theme.colors.contrast};
  
`
export const TextMargin = styled.p`
  margin: 15px 0 25px 0;
  font-size: ${props => props.theme.fontSize.regular};
  color: ${props => props.theme.colors.contrast};
  
`
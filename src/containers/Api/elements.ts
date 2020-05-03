import styled from 'styled-components'
export const Container = styled.div`
padding: 0 100px 0 100px;
`
export const Text = styled.p`
  /* margin: 0 0 0 0; */
  font-size: ${props => props.theme.fontSize.regular};
  color: ${props => props.theme.colors.contrast};
  
`
export const ApiTitles = styled.h2`
  margin: 15px 0 15px 0;
  font-size: ${props => props.theme.fontSize.regular};
  color: ${props => props.theme.colors.contrast};
  
`
export const ItalicText = styled(Text)`
  font-style: italic;
`

export const Paragraph = styled.br`
`
export const CodeText = styled.span`
    background-color: ${props => props.theme.colors.secondaryBg};
    border-radius: 3px;
    padding: 0 3px;
`
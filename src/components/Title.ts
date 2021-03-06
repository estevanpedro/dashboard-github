import styled from 'styled-components'

export default styled.h1`
  font-size: ${props => props.theme.fontSize.title};
  color: ${props => props.theme.colors.contrast};
  margin-bottom: 40px;
`

export const SubTitle = styled.h2`
  font-size: ${props => props.theme.fontSize.big};
  color: ${props => props.theme.colors.contrast};
  margin-bottom: 30px;
`

export const FieldTitle = styled.h3<FieldTitleProps>`
  color: ${props => props.theme.fontSize.xMedium};
  color: ${props => props.theme.colors.contrast};
  margin: ${props => props.margin || '0 0 15px 0'};
`

interface FieldTitleProps {
  margin?: string
}

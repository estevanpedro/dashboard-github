import styled from 'styled-components'

export default styled.div<FlexContainer>`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  position: ${props => props.position || 'static'};
  margin: ${props => props.margin || '0'};
  padding: ${props => props.padding || '0'};
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'center'};
  align-items: ${props => props.align || 'stretch'};
`;

interface FlexContainer {
  width?: string
  height?: string
  position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky'
  margin?: string
  padding?: string
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  justify?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  align?: 'stretch' | 'center' | 'flex-start' | 'flex-end
}
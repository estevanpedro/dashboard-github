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
  overflow: ${props => props.overflow || 'visible'};
  box-sizing: border-box;
  top: ${props => props.top || 'auto'};
  bottom: ${props => props.bottom || 'auto'};
  left: ${props => props.left || 'auto'};
  right: ${props => props.right || 'auto'};
  z-index: ${props => props.zIndex || '1'};
`

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
  align?: 'stretch' | 'center' | 'flex-start' | 'flex-end'
  overflow?: 'scroll' | 'hidden' | 'auto'
  top?: string
  bottom?: string
  left?: string
  right?: string
  zIndex?: string
}

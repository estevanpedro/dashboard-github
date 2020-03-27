import styled from 'styled-components'

export default styled.div<FlexContainer>`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  max-height: ${props => props.maxHeight || 'auto'};
  position: ${props => props.position || 'static'};
  margin: ${props => props.margin || '0'};
  padding: ${props => props.padding || '0'};
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'center'};
  align-items: ${props => props.align || 'stretch'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  overflow: ${props => props.overflow || 'visible'};
  box-sizing: border-box;
  top: ${props => props.top || 'auto'};
  bottom: ${props => props.bottom || 'auto'};
  left: ${props => props.left || 'auto'};
  right: ${props => props.right || 'auto'};
  ${props => (props.zIndex ? `z-index: ${props.zIndex}` : '')};
`

interface FlexContainer {
  width?: string
  height?: string
  maxHeight?: string
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
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse' | 'initial' | 'inherit'
  overflow?: 'scroll' | 'hidden' | 'auto'
  top?: string
  bottom?: string
  left?: string
  right?: string
  zIndex?: string
}

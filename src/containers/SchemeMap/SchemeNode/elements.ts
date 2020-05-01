import styled, { css } from 'styled-components'

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  margin-bottom: 5rem;
`

interface ContainerProps {
  hasChildren: boolean
}

export const Node = styled.button<NodeProps>`
  height: 60px;
  padding: 20px 25px 20px 25px;
  border-radius: 4px;
  background-color: ${props =>
    props.primary ? props.theme.colors.primary : props.theme.colors.secondary};
  color: ${props => props.theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  font-size: ${props => props.theme.fontSize.medium};
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: bold;
  outline: none;
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.25);
  &:active {
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
  }
  &.tool {
    background-color: ${props => props.theme.colors.secondary};
    border-radius: 40px;
    width: 200px;
  }
  &.address {
    background-color: transparent;
    border: 2px solid ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.contrast};
    font-weight: normal;
  }
  &.root {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  &.scheme {
    background-color: ${props => props.theme.colors.tertiary};
  }
`

export interface NodeProps {
  primary?: boolean
}

const arrowPointerMixin = css`
  ::after {
    content: '';
    position: absolute;
    right: 1rem;

    border: solid ${props => props.theme.colors.contrast};
    border-width: 0 1px 1px 0;
    display: inline-block;

    padding: 3px;
    top: -3px;

    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }
`

export const RelativeContainer = styled.div`
  position: relative;
`

export const Arrow = styled.div<ArrowProps>`
  height: 1px;
  width: 2.5rem;
  margin-right: ${props => props.margin === 'right' && '1rem'};
  background-color: ${props => props.theme.colors.contrast};

  ${props => props.margin === 'right' && arrowPointerMixin}
`

interface ArrowProps {
  margin: 'left' | 'right'
}

export const VerticalArrow = styled.div`
  width: 1px;
  height: 100%;
  position: absolute;
  left: 0;
  top: 30px;

  background-color: ${props => props.theme.colors.contrast};
`

export const OptionNode = styled(Node)`
  width: 140px;
  height: 62px;
  margin-bottom: 10px;
  font-size: ${props => props.theme.fontSize.verySmall};
  background-color: ${props => props.theme.colors.secondaryBg};
  color: ${props =>
    props.primary ? props.theme.colors.contrast : props.theme.colors.secondary};
  border: 2px solid
    ${props =>
      props.primary
        ? props.theme.colors.primary
        : props.theme.colors.secondary};
  flex-direction: column;
`

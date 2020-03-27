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
  width: 130px;
  height: 82px;
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
`

export interface NodeProps {
  primary?: boolean
}

export const OverflowContainer = styled.div`
  width: 99%;
  height: 280px;
  overflow: scroll;
  border: 1px solid ${props => props.theme.colors.contrast};
  border-radius: 4px;
`

export const SplitContainer = styled.div`
  border-bottom: 4px solid ${props => props.theme.colors.primary};
  padding: 20px;
`

const arrowPointerMixin = css`
  ::after {
    content: '';
    position: absolute;
    right: 1rem;

    border: solid ${props => props.theme.colors.contrast};
    border-width: 0 1px 1px 0;
    display: inline-block;

    /* Change this to alter arrow pointer size */
    padding: 3px;
    top: -3px;

    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }
`

export const RelativeContainer = styled.div`
  position: relative;
`

export const Arrow = styled.div<{ margin: 'left' | 'right' }>`
  height: 1px;
  width: 2.5rem;
  margin-right: ${props => props.margin === 'right' && '1rem'};
  background-color: ${props => props.theme.colors.contrast};

  ${props => props.margin === 'right' && arrowPointerMixin}
`

export const VerticalArrow = styled.div`
  width: 1px;
  height: 100%;
  position: absolute;
  left: 0;
  top: 42px;

  background-color: ${props => props.theme.colors.contrast};
`

export const OptionNode = styled(Node)<OptionNode>`
  width: 140px;
  height: 62px;
  margin-bottom: 10px;
  font-size: ${props => props.theme.fontSize.verySmall};
  img {
    height: 18px;
    margin-bottom: 4px;
  }
  background-color: ${props => props.theme.colors.secondaryBg};
  color: ${props =>
    props.primary ? props.theme.colors.primary : props.theme.colors.secondary};
  border: 2px solid
    ${props =>
      props.primary
        ? props.theme.colors.primary
        : props.theme.colors.secondary};
  flex-direction: column;
`

interface OptionNode extends NodeProps {}

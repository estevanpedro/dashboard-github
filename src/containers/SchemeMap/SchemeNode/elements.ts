import styled, { css } from 'styled-components'

import ds from '../../../design/designSystem'

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  margin-bottom: 5rem;
  display: flex;
  align-items: center;
`

interface ContainerProps {
  hasChildren: boolean
}

export const Node = styled.button<NodeProps>`
  width: 130px;
  height: 82px;
  border-radius: 4px;
  background-color: ${props =>
    props.primary ? ds.colors.primary : ds.colors.secondary};
  color: ${ds.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  font-size: ${ds.fontSize.medium};
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: bold;
  outline: none;
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.25);
  &:active {
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
  }
  &.tool {
    background-color: ${ds.colors.secondary};
    border-radius: 40px;
    width: 200px;
  }
  &.address {
    background-color: transparent;
    border: 2px solid ${ds.colors.primary};
    color: ${ds.colors.contrast};
    font-weight: normal;
  }
`

export interface NodeProps {
  primary?: boolean
}

export const OverflowContainer = styled.div`
  width: 100%;
  height: 400px;
  overflow: scroll;
`

export const SplitContainer = styled.div`
  border: 1px solid ${ds.colors.primary};
  padding: 20px;
  margin-bottom: ${ds.spacing.vertical};
  border-radius: 4px;
`

const arrowPointerMixin = css`
  ::after {
    content: '';
    position: absolute;
    right: 1rem;

    border: solid black;
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
  background-color: black;

  ${props => props.margin === 'right' && arrowPointerMixin}
`

export const VerticalArrow = styled.div`
  width: 1px;
  height: 100%;
  position: absolute;
  left: 0;
  top: 42px;

  background-color: black;
`

export const OptionNode = styled(Node)<OptionNode>`
  width: 90px;
  height: 62px;
  font-size: ${ds.fontSize.verySmall};
  margin: 0 10px;
  img {
    height: 18px;
    margin-bottom: 4px;
  }
  background-color: ${ds.colors.white};
  color: ${props => (props.primary ? ds.colors.primary : ds.colors.secondary)};
  border: 2px solid
    ${props => (props.primary ? ds.colors.primary : ds.colors.secondary)};
  flex-direction: column;
`

interface OptionNode extends NodeProps {}

import styled from 'styled-components'

import ds from '../../../design/designSystem'

export const Container = styled.div`
  display: flex;
  align-items: center;
`

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
    border-radius: 50%;
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

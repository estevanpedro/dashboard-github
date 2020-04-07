import styled, { keyframes } from 'styled-components'

export const LoadingContainer = styled.div<LoadingContainerProps>`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${props => props.theme.colors.background};
  z-index: 1000;
  display: ${props => (props.isLoading ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`

interface LoadingContainerProps {
  isLoading: boolean
}

const rotate = keyframes`
   to {
      transform: rotate(360deg);
    }
`

export const Loader = styled.div`
  border: 8px solid ${props => props.theme.colors.primary};
  border-left-color: #22a6b3;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${rotate} 1s linear infinite;
`

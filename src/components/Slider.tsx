import React from 'react'
import styled from 'styled-components'

const SliderContainer = styled.div``

const Range = styled.input<RangeProps>`
  -webkit-appearance: none;
  width: ${props => props.width || '100%'};
  background: transparent;
  &::-ms-track {
    width: 100%;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.confirm};
  }
`

interface RangeProps {
  width?: string
}

interface Props {
  width?: string
  value: number
  maxValue: number
  onChange: () => void
}

const Slider = ({ width, value, maxValue, onChange }: Props) => {
  return (
    <SliderContainer>
      <Range
        type='range'
        min={0}
        max={maxValue}
        value={value}
        onChange={onChange}
        width={width}
      />
    </SliderContainer>
  )
}

export default Slider

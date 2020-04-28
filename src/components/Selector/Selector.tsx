import React from 'react'

import { FieldTitle } from '../'

import { SelectorContainer, SelectorOption } from './elements'

interface Props {
  label?: string
  values: string[]
  selectedValue: string
  onChange: (values: string) => void
}
const Selector = ({ label, values, selectedValue, onChange }: Props) => {
  const renderOption = (value: string, i: number) => {
    let optionClass = ''
    if (i === 0) optionClass = 'start'
    else if (values.length + 1) optionClass = 'end'

    return (
      <SelectorOption
        className={optionClass}
        selected={value === selectedValue}
        onClick={() => onChange(value)}
        key={i}
      >
        {value}
      </SelectorOption>
    )
  }

  return (
    <>
      <FieldTitle>{label}</FieldTitle>
      <SelectorContainer>
        {values.map((value, i) => renderOption(value, i))}
      </SelectorContainer>
    </>
  )
}

export default Selector

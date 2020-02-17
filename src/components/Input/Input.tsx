import React, { useState } from 'react'
import { Container, Label, InputField } from './style'

interface Props {
  label: string
  value: string
  onChange?: () => void
  placeholder?: string
}

const Input = ({ label, value, onChange, placeholder }: Props) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <Container>
      <Label isFocused={isFocused}>{label}</Label>
      <InputField
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        isFocused={isFocused}
      />
    </Container>
  )
}

export default Input

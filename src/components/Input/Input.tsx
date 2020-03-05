import React, { useState } from 'react'
import { Container, Label, InputField, Error } from './style'

interface Props {
  label: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  type: string
  width?: string
  error?: string
  placeholder?: string
  marginBottom?: number
}

const Input = ({
  width,
  label,
  value,
  onChange,
  placeholder,
  type,
  error,
  marginBottom,
}: Props) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <Container width={width || '460px'} marginBottom={marginBottom || 20}>
      <Label isFocused={isFocused}>{label}</Label>
      <InputField
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        isFocused={isFocused}
        type={type}
      />
      {error && error.length && <Error>{error}</Error>}
    </Container>
  )
}

export default Input

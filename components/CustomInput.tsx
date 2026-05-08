import { TextField } from '@mui/material'

type CustomInputProps = {
  label: string
  type?: string
  value: string
  onChange: (value: string) => void
  error?: boolean
  helperText?: string
}

export default function CustomInput({
  label,
  type = 'text',
  value,
  onChange,
  error,
  helperText,
}: CustomInputProps) {
  return (
    <TextField
      fullWidth
      label={label}
      type={type}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      error={error}
      helperText={helperText}
      margin="normal"
    />
  )
}
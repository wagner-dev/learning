import { FC } from 'react'
import { 
  InputWrapped,
  TextInput,
  FieldInput
} from './style'

interface Props{
  name: string
  value: number,
  SetValue: (value: number) => void
}

const Input: FC<Props> = ({ name, value, SetValue }) => {

  const FormatValueToNumber = (value: string) => Number(value)
  const ChangeText = (value: string) => {
    const valueNumber = FormatValueToNumber(value)
    SetValue(valueNumber)
  }

  return (
    <InputWrapped>
      <TextInput>{ name }</TextInput>
      <FieldInput
        keyboardType="numeric"
        onChangeText={() => ChangeText}
      >
        { value }
      </FieldInput>
    </InputWrapped>
  )
}   

export { Input }
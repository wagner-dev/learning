import {
  Wrapped
} from './style'
import {
  Input,
  Button
} from '../index'
import { useState } from 'react'
import { Text } from 'react-native'

const Form = () => {
  const [error, SetError] = useState('')
  const [weight, SetWeight] = useState(0)
  const [height, SetHeight] = useState(0)

  const ValidateForm = () => {
    const formIsValid = weight && height
    if(formIsValid){
      CalculateImc()
    } else {
      SetError('Preencha o peso e a altura')
    }
  }
  const CalculateImc = () => {
    const imcValue = weight / ( height * height )

    return imcValue
  }

  return (
    <Wrapped>
      <Text>{ error }</Text>
      <Input
        name="Peso"
        value={1}
      />
      <Input
        name="Altura"
        value={10}
      />
      <Button
        onPress={() => ValidateForm()}
        value="Calcular"
      />
    </Wrapped>
  )
}   

export { Form }
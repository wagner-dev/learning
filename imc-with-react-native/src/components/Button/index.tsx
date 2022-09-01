import { FC } from 'react'
import { Text } from 'react-native'
import {
  SubmitButton
} from './style'

interface Props{
  value: string

}
const Button: FC<Props> = ({ value }) => {
  return (
    <SubmitButton>
      <Text 
        style={{
          textAlign: 'center',
          color:'#fff'
        }}
      >
        { value }
      </Text>
    </SubmitButton>
  )
}   

export { Button }
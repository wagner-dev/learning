import { FC } from 'react'
import { View } from 'react-native'
import {
  TitleText
} from './style'

interface Props{
  value: string
}
const Title: FC<Props> = ({ value }) => {
  return (
    <View>
      <TitleText>{ value }</TitleText>
    </View>
  )
}   

export { Title }
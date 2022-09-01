import { useState } from 'react'
import {
  Body
} from './style'
import { Title, Form  } from '../'

const Main = () => {

  return (
    <Body>
      <Title value="Calculadora de IMC " />
      <Form />
    </Body>
  )
}   

export { Main }
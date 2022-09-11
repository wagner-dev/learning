import { FC } from 'react'
import {
  Body,
  Title,
  SubTitle,
} from './styles'

const Wrapped: FC = () => {
  return (
    <Body>
      <Title>
        Tailwind with Next.js And the Lib tailwind-styled-components
      </Title>
      <SubTitle>LEARNING</SubTitle>

    </Body>
  )
}

export { Wrapped }
import styled from 'styled-components'
import tailwind from 'tailwind-styled-components'

export const Body = tailwind.div`
  w-full
  h-screen
  bg-blue-500
  flex
  justify-center
  items-center
  flex-col
`

export const Title = tailwind.h1`
  text-gray-100
  text-2xl
  font-mono
`

export const SubTitle = tailwind.h2`
  text-white
  text-sm
  font-mono
`
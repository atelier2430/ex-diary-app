import React from 'react'
import styled from 'styled-components'

function InputRenderer() {
  return <InputWrapper>Hello World</InputWrapper>
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: lightblue;
`

export default InputRenderer

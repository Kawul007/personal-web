import React from 'react'
import { HiWrapper } from './SayHi.style'

const SayHi = () => {
  return (
    <HiWrapper id='messages'>
      <h3>请输入你想说的一句话</h3>
      <input type='text'></input>
      <button>提交</button>
    </HiWrapper>
  )
}

export default SayHi
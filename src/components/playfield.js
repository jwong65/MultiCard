import React from 'react'
import { useState } from 'react'

export default function Playfield() {
    const [state, changeState]= useState(1)
  return (
    <>
        <div>
            playfield testing : {state}
        </div>
        <button onClick={()=> changeState(state+1)}>This button is changes the state.</button>
    </>
  )
}

import React from 'react'
import { useState } from 'react'
import "../css/form.css"

export default function Playfield() {
    const [state, changeState]= useState(1)
  return (
    <>
        <div className='play'>
            playfield testing : {state}
        </div>
        <button className='testbutton' onClick={()=> changeState(state+1)}>This button is changes the state.</button>
    </>
  )
}

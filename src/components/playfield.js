import React from 'react'
import { useState } from 'react'
import "../css/form.css"

import { sql } from '@vercel/postgres';
async function sqltesting(){
const likes = 100;    
const { rows, fields } = await sql`SELECT * FROM posts WHERE likes > ${likes};`;
}

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

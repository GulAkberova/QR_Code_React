import React, { useState } from 'react'
import QRCode from "react-qr-code";

function Qr() {
const[value,setValue]=useState('')
const[btn,setBtn]=useState('')
const handleSubmit=(e)=>{
    e.preventDefault();
    setBtn(value)
    setValue('')

}

  return (
   <>
   
   <div className='qr_bigdiv'>
        <h1>QR Code Generator</h1>
        <QRCode value={btn}/>

      <div>
       
      <form onSubmit={handleSubmit}>
      <input type={'text'} value={value} onChange={(e)=>setValue(e.target.value)} placeholder='Enter your text here'/>
      <button>Generate</button>
      </form>
      </div>
    </div>
    </>
  )
}

export default Qr
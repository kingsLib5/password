

import React, { useRef, useState } from 'react'

function Password() {

  let [typo, settypo] = useState('password')
  let [view,setview] = useState('show')
  let [width, setwidth] = useState('0%')
  let [bg,setbg] = useState("")
  let [forstrength, setForStrength] = useState('weak')
  let strval = useRef()

  function checker() {
    if (typo == "password") {
      settypo("text")
      setview("hide")
    } else {
      settypo("password")
      setview("show")
    }
  }

  function status() {
    if (strval.current.value.length <= 0) {
      setwidth("0%")
      setbg("white")
      setForStrength("strength")
      
    } else if (strval.current.value.length <= 4) {
      setwidth("30%")
      setbg("red")
      setForStrength("very weak")
    }
    else if (strval.current.value.length <= 6) {
      setwidth("70%")
      setbg("yellow")
      setForStrength("weak")
    } else if (strval.current.value.length <= 10) {
      setwidth("100%")
      setbg("green")
      setForStrength("strong")
    }
    
    
  }
  
  





  return (
    <>
    
    <div className='bg-slate-700 h-[60vh] flex justify-center items-center'>


            <div className='flex flex-col gap-[20px]'>
            <div className='flex gap-[20px]' >
                <input  type={typo} className='h-[30px] w-[300px] rounded-xl ' ref={strval} onInput={status} placeholder='Password'/>
                <button className='bg-green-500 w-[50px] border-none rounded-xl ' onClick={checker}>{view}</button>
            </div>
            <div className='flex flex-row gap-[20px]'>
              <div className='flex flex-row bg-white h-[9px] rounded-xl w-[100%]'>
                <div className='bg-red-600 h-[9px] duration-[0.5s] rounded-xl'  style={{width:width, background:bg}} ></div>
              
            </div>
               <div className=' '>
                  <h1 className='text-[10px] text-white'>{forstrength}</h1>
                </div>

            </div>
            
            </div>

    </div>
    
    
    
    </>
  )
}

export default Password
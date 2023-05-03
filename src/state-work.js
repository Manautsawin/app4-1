import React, {useState} from 'react'

export default function Crat(){
    let [size,setSize] = useState(16)
    


    const onClicKAddSize = () =>{
        setSize(size + 1)
        
}
    const onClickDeletesize = () =>{
    if (size > 0 ){
     setSize(size - 1)
    }
}
  const dStyle ={
    fontSize: size
  }

return(
    <div>
        <div style = {dStyle}> ขนาดตัวอักษร : {size}</div>
        <button onClick={onClicKAddSize}>เพิ่ม Size</button>
        <button onClick={onClickDeletesize}>ลด Size</button>
    </div>
)
}
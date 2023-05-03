import React, {useState} from 'react'

export default function Crat(){
    let [numItem,setNumItem] = useState(0)

    const onClicKAddCart = () =>{
            if (numItem < 10){
            let newItem = numItem + 1
            setNumItem(newItem)
            }
    }
    const onClickDeleteCart = () =>{
        if (numItem > 0 ){
         let newItem = numItem - 1
         setNumItem(newItem)
        }
    }

    return(
        <div>
            <div>จำนวนสินค้าในตะกล้า : {numItem}</div>
            <button onClick={onClicKAddCart}>เพิ่มสินค้าในตะกล้า</button>
            <button onClick={onClickDeleteCart}>ลบสินค้าในตะกล้า</button>
        </div>
    )
}
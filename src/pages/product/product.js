import React, { useEffect, useState } from "react"

const EmpDetails=()=>{
    const [message,setMessage]=useState([])
    
    useEffect(()=>{
        fetch(`http://localhost:5000/api/users/getalldata`)
        .then(res=>res.json())
        .then((json)=>{
            setMessage(json)
            
        })
    },[])

        // let dataf=message.employee
   console.log(message.length,message)
    return(
        <React.Fragment>
            
            <h1>hello from product</h1>
            {
                message.length >0 && <p>{message[0].map((p)=><li>{p.title}
                </li>)}</p>
            }
            
            
        </React.Fragment>
    )
}
export default EmpDetails
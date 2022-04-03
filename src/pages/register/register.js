import { Fragment, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { register } from "../../features/auth/authSlice"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { reset } from "./../../features/auth/authSlice"
const Register=()=>{
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {user,isError,isLoading,isSucess,message}=useSelector((state)=>state.auth)
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        password:"",
        password2:""
    })
    
    useEffect(()=>{

        if(isError){
            toast.error(message)
        }
        if(isSucess){
            toast.success("successfully registered")
            
            navigate("/loggedin")
            dispatch(reset())

        }
    },[user,isError,isLoading,isSucess,message,navigate,dispatch])

    const {name,email,password,password2}=formData
    const onchange=(e)=>{
        e.preventDefault()
        setFormData((prevstate)=>({...prevstate,[e.target.name]:e.target.value}))
    }
    const onsubmit=(e)=>{
        e.preventDefault();
        if(password!==password2){
            alert("password doesn'nt match")
        }
        else{
            const userData={
                name,
                email,
                password
            }
        console.log(userData)
        dispatch(register(userData))
        }
    }

    return(
        <Fragment>
            <form onSubmit={onsubmit}>
                <h1>hello from register</h1>
                <label>Name</label>
                <input type="text" required name="name" id="name" value={name} onChange={onchange}></input>
                <label>Email</label>
                <input type="text" required name="email" id="email" value={email} onChange={onchange}></input>
                <label>Password</label>
                <input type="password" required name="password" id="password" value={password} onChange={onchange}></input>
                <label>Confirm Password</label>
                <input type="password" required name="password2" id="confirmpassword" value={password2} onChange={onchange}></input>
                <button type='submit'>submit</button>
            </form>
        </Fragment>
    )
}
export default Register
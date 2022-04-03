import{Fragment, useEffect, useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login } from '../../features/auth/authSlice'
import {reset} from './../../features/auth/authSlice'



const Login=()=>{
   
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const {user,isSucess,isLoading,isError,message}=useSelector(state=>state.auth)
    const [formData,setFormData]=useState({
        email:"",
        password:""
    })
    const {email,password}=formData
    const onchange=(e)=>{
        e.preventDefault()
        setFormData((prevstate)=>({...prevstate,[e.target.name]:e.target.value}))
    }
  const onsubmit=(e)=>{
      e.preventDefault()
      const userData={
          email,
          password,
      }
      console.log(userData)
      dispatch(login(userData))
      
  }
  useEffect(()=>{
    if(isError){
        toast.error(message)
    }
    if(isSucess){
        toast.success(message)
        navigate('/loggedin')
    }
    dispatch(reset())

},[user,isSucess,isLoading,isError,message,navigate,dispatch])
    return(
        <Fragment>
            <form onSubmit={onsubmit}>
                <h1>hello from login  </h1>
                <label>Email</label>
                <input type="text" name="email" id='email' value={email} onChange={onchange}></input>
                <label>Password</label>
                <input type="password" name='password' id='password' value={password} onChange={onchange}></input>
                <button type='submit'>submit</button>
            </form>
        </Fragment>
       
    )
}
export default Login
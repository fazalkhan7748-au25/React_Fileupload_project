import { Fragment } from "react"
import { useSelector } from "react-redux"
import { Link, Outlet, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { reserlogout } from "../../features/auth/authSlice"

const Header=()=>{
    const navigate=useNavigate()
    const dispatch=useDispatch()
    let cond=true
    const {user}=useSelector(state=>state.auth)
        if(user){
            cond=false
        }
    return(
        <div>
            <h1>
            hi I am header

            {cond?(<Fragment> 
                <Link to={"/login"}>login</Link>
                <Link to={"/register"}>Register</Link>
                </Fragment>):
                
                (<Fragment><button onClick={()=>{
                    navigate('/')
                    dispatch(reserlogout())
                    localStorage.removeItem('user')
                    
                }}>Logout</button></Fragment>)}
            
            
                
            </h1>
            <Outlet></Outlet>
        </div>
    )
}
export default Header
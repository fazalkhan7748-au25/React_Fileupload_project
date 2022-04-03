import axios from "axios"

const Api_url="http://localhost:5000/api/users/"

const register = async(userData)=>{

    const response= await axios.post(Api_url+"register",userData)

    if(response.data){
        console.log(response.data)
    }
    return response.data
}

const login=async(userData)=>{

    const response= await axios.post(Api_url+"login",userData)
    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }
    return response.data
}

const authService={register,login}

export default authService
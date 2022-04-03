import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import authService from "./authService"


const userStorage=localStorage.getItem('user')

const initialState= {

    user:userStorage?userStorage:null,
    isError:false,
    isSucess:false,
    isLoading:false,
    message:" "
}
export const register=createAsyncThunk('auth/register',async(user,thunkAPI)=>{
    try{
        return await authService.register(user)
    }
    catch(error){
        const message=(error.respose && error.respose.data && error.respose.data.message)||error.message||error.toString()

        return thunkAPI.rejectWithValue(message)
    }

})

export const login =createAsyncThunk('auth/login',async(user,thunkAPI)=>{
    try{ return await authService.login(user)}
    catch(error){

        const message=(error.respose && error.respose.data && error.respose.data.message)||error.message||error.toString()

        return thunkAPI.rejectWithValue(message)

    }
})

export const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        reset:(state)=>{
            
           state.isError=false
           state.isSucess=false
           state.isLoading=false
           state.message=" "
        },
        reserlogout:(state)=>{
            state.user=null
            state.isError=false
            state.isSucess=false
            state.isLoading=false
            state.message=" "
         }
    },
    extraReducers:(builder)=>{
        builder.addCase(register.pending,(state)=>{
          state.isLoading=true
          state.isError=false
          state.isSucess=false
          state.user=null 
        })
        builder.addCase(register.fulfilled,(state,action)=>{
            state.user=action.payload
            state.isSucess=true
            state.isLoading=false
            state.isError=false
            
          })
        builder.addCase(register.rejected,(state,action)=>{
            state.user=null
            state.message=action.payload
            state.isError=true
            state.isLoading=false
            state.isSucess=false
        })
        builder.addCase(login.pending,(state)=>{
             state.isLoading=true
             state.isError=false
             state.isSucess=false
             state.user=null 
             state.message="Loading Please Wait"

        })
        builder.addCase(login.fulfilled,(state,action)=>{
            state.user=action.payload
            state.isSucess=true
            state.isLoading=false
            state.isError=false
            state.message="sucessfully loggedin"
        })
        builder.addCase(login.rejected,(state,action)=>{
            state.user=null
            state.message=action.payload
            state.isError=true
            state.isLoading=false
            state.isSucess=false
            state.message="authorization failed"
        })
    }
})

export default authSlice.reducer
export const{reset,reserlogout}=authSlice.actions
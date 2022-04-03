import {useState} from 'react'
import './style.css'
import axios from 'axios'

export const Fileuploader=({})=>{
    const [file,setFile]=useState()
    const InputChange=(e)=>{
        console.log("hi from inputchange")
        console.log(e.target.files)
        setFile(e.target.files[0])
    }
    const onsubmit=(e)=>{
        e.preventDefault();
        
        const data =new FormData();

        data.append('file',file)
        console.log(data,file)
        axios.post("http://localhost:5000/api/users/getfeature",data)
        .then((e)=>{
            console.log("sucess")
        })
        .catch((err)=>{
            console.error('Error',err)
        })
    }
    return(
        <div className="fileuploader">
        <form onSubmit={onsubmit}>
            <div className="form-group files">
              <label>Upload Your File </label>
              <input type="file" className="form-control" name='files'  onChange={InputChange} ></input>
            </div>
            <button>Fileupload</button>
          
        </form>
        
        
    </div>
    )
}
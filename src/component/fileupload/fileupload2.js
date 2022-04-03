import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Fileupload2=()=>{
    const [file,setFile]=useState()
    const send=(event)=>{
        console.log("hi")
      const data =new FormData();
      data.append("file",file)
      axios.post("http://localhost:5000/api/users/upload",data)
      .then(res=>console.log(res))
      .catch(err=>console.log(err));
    }
      return (
        <div className="App">
          <Link to='/filedata'>check result</Link>
          <form>
            <label>File</label>
            <input type="file" id="file" accept=".json" onChange={event=>{
              const file =event.target.files[0];
              setFile(file) 
            }}></input>
          </form>
          <button onClick={send}>upload</button>
          
        </div>
      );
}
export default Fileupload2 
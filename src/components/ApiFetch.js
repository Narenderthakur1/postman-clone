import React,{useState} from 'react'
import {Form,Button} from "react-bootstrap"
import axios from 'axios';
function ApiFetch({setApiData}) {
    const [method,setMethod]=useState("GET")
    const [url,setUrl]=useState("");
    
    const handleSubmit=(e)=>{
           e.preventDefault();
           axios({
                url: url,
                method:method
           }).then((response)=>{
            //    console.log(response.data)
                setApiData(response.data);
           }).catch((err)=>{
               console.log(err)
           })
    }
    return (
       <div className="p-4"> 
                <Form data-form onSubmit={handleSubmit} >
                   <div className="input-group mb-4">
                       <select className="form-select flex-grow-0 w-auto" onChange={(e)=>setMethod(e.target.value)}>
                           <option value="GET" defaultValue>GET</option>
                           <option value="POST" >POST</option>
                           <option value="PUT" >PUT</option>
                           <option value="PATCH" >PATCH</option>
                           <option value="DELETE" >DELETE</option>
                       </select>
                        <input data-url required className="form-control" type="url" placeholder="http://example.com" onChange={(e)=>setUrl(e.target.value)}/>
                        <Button type="submit" className="btn btn-primary">Send</Button>
                   </div>
                     

                </Form>
        </div>
    )
}

export default ApiFetch

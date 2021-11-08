import React from 'react'
import {Form,Button} from "react-bootstrap"
import axios from 'axios';
function ApiFetch() {
    const handleSubmit=(e)=>{
           e.preventDefault();

           axios({
                url: document.querySelector('[data-url]').value,
                method:document.querySelector('[data-method]').value,
             
           }).then((response)=>{
               console.log(response.data)
           }).catch((err)=>{
               console.log(err)
           })
    }
    return (
       <div className="p-4"> 
                <Form data-form onSubmit={handleSubmit} >
                   <div className="input-group mb-4">
                       <select className="form-select flex-grow-0 w-auto" data-method>
                           <option value="GET" defaultValue>GET</option>
                           <option value="POST" >POST</option>
                           <option value="PUT" >PUT</option>
                           <option value="PATCH" >PATCH</option>
                           <option value="DELETE" >DELETE</option>
                       </select>
                        <input data-url required className="form-control" type="url" placeholder="http://example.com"/>
                        <Button type="submit" className="btn btn-primary">Send</Button>
                   </div>
                     

                </Form>
        </div>
    )
}

export default ApiFetch

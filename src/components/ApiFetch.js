
import {Form,Button} from "react-bootstrap"
import axios from 'axios';
function ApiFetch({setApiData,method,setMethod,url,setUrl,body,header,setStatus,history,setHistory}) {

    const handleSubmit=(e)=>{
        e.preventDefault();
           if(method==="GET"){
                axios.get(url).then((response)=>{
                        const id=Math.random();
                        setApiData(response.data);
                        setStatus(response.status)
                        setHistory([...history,{id:id.toString(),method,url}]);
                        console.log(history)
                }).catch((err)=>{
                    setStatus(404)
                    setApiData(err.message)
                })
            }
          if(method==="POST"){
                axios.post(url,JSON.parse(body),{header}).then((response)=>{
                    const id=Math.random();
                    setApiData(response.data);
                    setStatus(response.status)
                    setHistory([...history,{id:id.toString(),method,url}]);
                }).catch((err)=>{
                    setApiData(err.message)
                    setStatus(404)
                })
          }
    }
    return (
       <div className="p-4"> 
                <Form data-form onSubmit={handleSubmit} >
                   <div className="input-group ">
                       <select className="form-select flex-grow-0 w-auto" value={method} onChange={(e)=>setMethod(e.target.value)}>
                           <option value="GET" defaultValue>GET</option>
                           <option value="POST" >POST</option>
                           <option value="PUT" >PUT</option>
                           <option value="PATCH" >PATCH</option>
                           <option value="DELETE" >DELETE</option>
                       </select>
                        <input data-url required className="form-control" value={url} type="url" placeholder="http://example.com" onChange={(e)=>setUrl(e.target.value)}/>
                        <Button type="submit" className="btn btn-primary">Send</Button>
                   </div>
               
                  
                </Form>
        </div>
    )
}

export default ApiFetch

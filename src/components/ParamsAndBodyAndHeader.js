import React,{useState,useEffect} from 'react'
import {Form} from "react-bootstrap"
function ParamsAndBodyAndHeader({body,setBody,header,setHeader,url,setUrl}) {
    const [show,setShow]=useState(3);
    const [key,setKey]=useState("");
    const [value,setValue]=useState("")
    const [count,setCount]=useState(2)
  
    useEffect(()=>{
      console.log(key)

      if(key.length===1 && count===2){
        if(!url.includes("?")){
         const newurl=url+'?'+key
         console.log(newurl)
         setUrl(newurl)
        }
      } 
      else if(count===key.length){
        setCount(count+1)
      
        setUrl(`${url}${key[key.length-1]}`)
      }
      else if(key.length>0){
        
          setCount(count-1)
          setUrl(`${url.slice(0,-1)}`)
          if(!key){
            setCount(2)
            setUrl(`${url.slice(0,-3)}`)
        
            
          }  
      } 
    },[key])
    // const handleInputKey=(e)=>{
    //   setKey(e.target.value);

    //     if(key==="" ){
    //        setUrl(`${url}?${key}`)
    //     } 
    //     else if(count===key.length){
    //       setCount(count+1)
    //       setUrl(`${url}${key[key.length-1]}`)
    //     }
    //     else{
    //       if(url.includes("?")){
    //         setCount(count-1)
    //         setUrl(`${url.slice(0,-1)}`)
    //         if(key.length===1){
    //           setCount(1)
    //           setUrl(`${url.slice(0,-3)}`)
    //           setKey("")
              
    //         }}  
    //     } 
    // }
   
  const handleInputValue=(e)=>{
    setValue(e.target.value);
        if(value==="" ){
            setCount(1)
            setUrl(`${url}=${value}`)
        } 
        else if(count===value.length){
          setCount(count+1)
          setUrl(`${url}${value[value.length-1]}`)
        }
        else{
          if(url.includes("=")){
            setUrl(`${url.slice(0,-1)}`)
            if(value.length===1){
              setCount(1)
              setValue("")
              setUrl(`${url.slice(0,-3)}`)
            }}  
        } 
    

  }  
  return (
        <Form className="mx-4">
            <ul
              className="nav nav-pills "
              id="pills-tab"
              role="tablist" >
              <li className="nav-item" role="presentation">
                 <button
                    className="nav-link active "
                  
                  
                    onClick={()=>setShow(3)} >
                    Params
                  </button>  
              </li>
              <li className="nav-item" role="presentation">
                <button
                    className="nav-link active ms-4"
                    type="button"
                  
                    onClick={()=>setShow(1)}>
                    Header
              </button>
            </li>
            <li className="nav-item" role="presentation">
                <button
                    className="nav-link active ms-4" 
                      type="button"
                      
                      onClick={()=>setShow(2)}>
                      Body
                </button>
            </li>
          
        </ul>
       
        <div className="tab-content" id="pills-tabContent">
        {show===1 ?
          <div
                className="tab-pane fade show active"
                role="tabpanel"
                aria-labelledby="pills-header-tab"    >
                <textarea
                    className="bg-light w-100 border border-1 rounded p-3"
                    value={header}
                    rows="4"
                    onChange={e => setHeader(e.target.value)}>
                    {header}
                </textarea>
           </div>
        : show===2 ?
           <div
                className="tab-pane fade show active"
                role="tabpanel"
                aria-labelledby="pills-body-tab">
                <textarea
                    className="bg-light border w-100 border-1 rounded p-3 json-pretty"
                    value={body}
                    rows="4"
                    onChange={e => setBody(e.target.value)}>

                </textarea>
          </div>
        :
          <div> 
              <div><b>Query Params</b></div>
              <div className="d-flex">
                  <h6 className="w-50 border border-1  border-dark p-1">Key</h6>
                  <h6 className="w-50 border border-1     border-dark p-1">Value</h6>
               </div>
                   
                <div className="mt-1" >
                    <input type="text" placeholder="key" 
                    name="key" 
                    value={key}
                    className="w-50" 
                    onChange={(e)=>{setKey(e.target.value)
                    }} />
                             
                  <input type="text" placeholder="value"
                      name="value" 
                      value={value}
                      className="w-50" 
                      onChange={handleInputValue} />
                
                </div>
              </div>}
          </div>
       </Form>
    )
}

export default ParamsAndBodyAndHeader

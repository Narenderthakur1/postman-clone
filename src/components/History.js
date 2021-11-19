import React from 'react'

function History({history,setHistory,setMethod,setUrl,setApiData,setStatus,setBody}) {
    const clickHistoryItemHandler = (e) => {
        const itemId = e.currentTarget.id;
        const requestItemConfig = history.find((item) => item.id === itemId);

    
        setMethod(requestItemConfig.method);
        
        setUrl(requestItemConfig.url);
        setApiData("")
        setStatus("")
        setBody("{\n\n}")
        
      };
    const handleDeleteRequest=(id)=>{
        const requestItemConfig = history.filter((item) => item.id !== id);
        setHistory(requestItemConfig)

    }  
     
    return (
        <div>
           <ul className="list-group ">
               <li className="list-group-item d-flex justify-content-center align-items-center pe-2 ">
               <h3 className="text-primary">History</h3>
               </li>
              {!history.length ? (
                 <div className="text-center text-danger mx-5"><h4>No history items available</h4> </div>
              ) : (
               history.map((requestItem) => (
               <li
                    key={requestItem.id}
                    id={requestItem.id}
                    className="list-group-item d-flex btn justify-content-between align-items-center"
                    onClick={clickHistoryItemHandler}>    
                    <h5 className="m-2 font-weight-bold text-primary ">{requestItem.method}</h5>
                    {requestItem.url}
                    <button className="  btn btn-danger text-light" onClick={()=>handleDeleteRequest(requestItem.id)}>Delete</button>
             </li>
             ))
          )}
      </ul>
    </div>
    )
}

export default History

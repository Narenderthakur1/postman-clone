import React from 'react'
import JSONPretty from 'react-json-pretty'
import "react-json-pretty/themes/monikai.css";

const ApiResponseData = ({apiData,status}) => {
    return (
       <div> 
            <div className="d-flex justify-content-between ">
            
                <button className="btn btn-primary mx-4 m-4 ">Response</button>
                {status!==404?<span className=" m-4 mt-4 pt-3 text-primary ">Status  {status}</span>
                : <span className=" m-4 mt-4 pt-3 text-danger ">Status  {status}</span>
                }
            </div>
            <JSONPretty className="mx-4" data={apiData}/>
        </div>
        
    )
}

export default ApiResponseData;

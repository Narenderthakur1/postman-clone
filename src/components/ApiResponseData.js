import React from 'react'
import JSONPretty from 'react-json-pretty'
import "react-json-pretty/themes/monikai.css";

const ApiResponseData = ({apiData}) => {
    return (
        <div>
            <JSONPretty data={apiData}/>
        </div>
    )
}

export default ApiResponseData;

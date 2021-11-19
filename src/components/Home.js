import React,{useState,useEffect} from 'react'
import ApiFetch from './ApiFetch';
import ApiResponseData from './ApiResponseData';
import ParamsAndBodyAndHeader from './ParamsAndBodyAndHeader';
import History from './History'
// import ParamComponent from './ParamComponent';


function Home() {
    const [apiData, setApiData] = useState([]);
    const [method,setMethod]=useState();
    const [url,setUrl]=useState();
    const [header,setHeader]=useState()
    const [body,setBody]=useState()
    const [status,setStatus]=useState()
    const [history,setHistory]=useState([
    ]);
    
    useEffect(() => {
        setMethod("GET");
        setUrl("http://localhost:3000");
        setHeader(`{\n"Access-Control-Allow-Origin":"*",\n"Content-Type":"application/json"\n}`);
      
        setBody("{\n\n}");
      }, []);
     
      return (
        <div className="d-flex">
          <div className=" bg-light w-30 h-100 justify-content-start">
              <History
                  history={history}
                  setHistory={setHistory}
                  setMethod={setMethod}
                  setUrl={setUrl}
                  setApiData={setApiData}
                  setStatus={setStatus}
                  setBody={setBody}
              />
          </div>
           <div className="w-100 justify-content-between align-items-center">
              <div className="mx-5 mt-2">
                  {url!=="http://localhost:3000"&&url!==""?<h5 className="font-italic">{url}</h5>:<div><h4>Untitled Request</h4></div>}
             </div>
            <ApiFetch
                setApiData = {setApiData}
                method={method}
                setMethod={setMethod}
                url={url}
                setUrl={setUrl}
                body={body}
                header={header}
                setStatus={setStatus}
                history={history}
                setHistory={setHistory}/>
    
            <ParamsAndBodyAndHeader 
                body={body}
                setBody={setBody}
                header={header}
                setHeader={setHeader}
                url={url}
                setUrl={setUrl} />
    
            <ApiResponseData 
                apiData={apiData}
                status={status}/>
             {/* <ParamComponent/> */}
          </div>
    </div>
  );
    
}

export default Home

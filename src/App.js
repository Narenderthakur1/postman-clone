
import { useState } from 'react';
import './App.css';
import ApiFetch from './components/ApiFetch';
import ApiResponseData from './components/ApiResponseData';

function App() {
  const [apiData, setApiData] = useState([]);
  
  return (
    <div className="App">
      <ApiFetch setApiData = {setApiData}/>
      <ApiResponseData apiData={apiData}/>
   </div>
  );
}

export default App;

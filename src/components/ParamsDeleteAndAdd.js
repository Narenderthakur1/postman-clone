import React,{useState} from 'react'


function ParamsDeleteAndAdd() {
    const [params, setParams] = useState([]);

    return (
        <div>
        <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item" role="presentation">
                <button className="nav-link active" id="query-params-tab" data-bs-toggle="tab"
                 data-bs-target="#query-params"
                type="button"  role="tab" aria-controls="query-params" aria-selected="true"
                >Query Params</button>
            </li>
           
        </ul>
       <div className="tab-content p-3  border-top-0 border"> 
        <div className="tab-pane fade active" id="query-params" role="tabpanel"
        aria-labelledby="query-params-tab">
        <div data-query-params></div>
        <button data-add-query-param-btn className="mt-2 btn 
        btn-outline-success" type="button">Add</button>
        </div>
        </div>
        <template>
        <div className="input-group my-2" data-key-value-pair>
           <input type="text" data-key className="form-control" placeholder="key" />
           <input type="text" data-value className="form-control" placeholder="value" />
           <button type="button" data-remove-btn className=" btn btn-outline-danger">Reomve</button>
        </div>
        </template>
    </div>  
    )
}

export default ParamsDeleteAndAdd

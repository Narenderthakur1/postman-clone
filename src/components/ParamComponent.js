import React from 'react'

function ParamComponent() {
    return (
        <div className="mb-3">
        <ul
          className="nav nav-pills mb-3 "
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="pills-body-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-body"
              type="button"
              role="tab"
              aria-controls="pills-body"
              aria-selected="true"
            >
              Body
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-headers-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-headers"
              type="button"
              role="tab"
              aria-controls="pills-headers"
              aria-selected="false"
            >
              Headers
            </button>
          </li>
          <li className="nav-item align-self-end ms-1">
            <button className="btn btn-outline-warning" 
            // onClick={sendHandler}
            >
              Send
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-body"
            role="tabpanel"
            aria-labelledby="pills-body-tab"
          >
            <textarea
              name="body"
              className="bg-light border border-1 rounded p-3 json-pretty"
              id="body"
            //   value={body}
              cols="70"
              rows="10"
            //   onChange={e => setBody(e.target.value)}
            ></textarea>
          </div>
          <div
            className="tab-pane fade"
            id="pills-headers"
            role="tabpanel"
            aria-labelledby="pills-headers-tab"
          >
            <textarea
              name="headers"
              className="bg-light border border-1 rounded p-3"
            //   value={headers}
              id="headers"
              cols="70"
              rows="10"
            //   onChange={e => setHeaders(e.target.value)}
            >
              {/* {headers} */}
            </textarea>
          </div>
        </div>
      </div>
    )
}

export default ParamComponent

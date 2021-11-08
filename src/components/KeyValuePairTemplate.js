import React from 'react'

function KeyValuePairTemplate() {
    return (
        <template data-key-value-template>
        <div className="input-group my-2" data-key-value-pair>
                <input type="text" data-key className="form-control" placeholder="Key"/> 
                <input type="text" data-value className="form-control" placeholder="Value"/>
                <button type="button" data-remove-btn className="btn btn-outline-danger">Remove</button> 
            </div>
        </template>
     
    
    )
}

export default KeyValuePairTemplate

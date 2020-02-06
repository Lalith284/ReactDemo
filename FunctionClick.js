import React from 'react'

function FunctionClick(){

    function ClickEvent() {
        console.log("Event Fired")
    }
    return(
        <div>
            <button onClick={ClickEvent}>click
            </button>
        </div>
    )
}
export default FunctionClick
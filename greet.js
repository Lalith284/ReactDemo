import React from 'react'

// function Greet(){
//     return <h1>Welcome Lalith</h1>
// }

export const Greet = (props) => {
console.log(props);
return (
<div>
<h1>Welcome {props.name} HERO {props.heroname}</h1>
<h1>{props.children}</h1>
</div>
)
}
//export default Greet
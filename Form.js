
import React, {Component} from 'react'

class Form extends Component{
constructor(props){
    super(props)
    this.state={
        UserName:" ",
        topic:"React"
    }
}

changeTyped = (typed) =>{
this.setState({
    UserName:typed.target.value
})
}


topicChange =(event)=>{
this.setState({
    topic:event.target.value
})
}

handleSubmit = (event) =>{
    alert(`${this.state.UserName} ${this.state.topic}`)
    event.preventDefault()
}
    render(){
        return ( 
   <form onSubmit={this.handleSubmit}> 
       <div>
           <label>UserName</label>
           <input type ="text" value={this.state.UserName} onChange={this.changeTyped}></input>
       </div>

       <div>
           <label>Topic</label>
           <select value={this.state.topic} onChange={this.topicChange}>
           <option value="Angular">Angular</option>
               <option value="React">React</option>
              
           </select>
       </div>
       <div><button type="submit">Submit</button></div>
   </form>
        )
        }

}
export default Form
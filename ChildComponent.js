import React, {Component} from 'react'

class ChildComponent extends Component{
    constructor(props){
        super(props);
        console.log();
        this.state={
            childName: "Child"
        }
    }
    render(){
        return ( 
        <div>
    
                  <button onClick ={() => this.props.greetHandler(this.state.childName)} >GREET</button>
        </div>
        )
        }

}
export default ChildComponent
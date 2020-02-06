import React, {Component} from 'react'

class Count extends Component{

    constructor(props){
        super(props);
        this.state={
            count: 0
        }
    }

    Increment(){
        // this.setState({
        //     count:this.state.count + 1
        // }, ()=> {console.log("CallBack", this.state.count)})
      
            //console.log(this.state.count)
    this.setState(previousState => ({
        count:previousState.count + 1
    }))
    console.log(this.state.count)

    }

    IncrementFive(){
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()

    }

    render(){
        return  <div>
        <h1>{this.state.count}</h1>
                      <button onClick ={() => this.IncrementFive()} >Increment</button>
            </div>
    }
}
export default Count
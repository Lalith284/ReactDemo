import React, {Component} from 'react'
import Login from "./Login"
import {Redirect} from 'react-router-dom';
class Signup extends Component{

    constructor(props){ 
        super(props)
        this.state={
            username:"",
            password:"",
            number:"",
            age:"",
            city:"",
            state:"",
            email:"",
            cpassword:"",
            valid:false
        }
        this.changeHandler=this.changeHandler.bind(this)
        this.loginSubmit=this.signSubmit.bind(this)
        this.signupList=[
            {username:"lalith",
              password:"pwd"
            }
        ]
    }
changeHandler(event){
    this.setState(
        {
            [event.target.name]:event.target.value
        }
    )
}

signSubmit(event){
    event.preventDefault()
    this.setState({
        valid:true
    })
        
}

render(){
    if(!this.state.valid){
    return(
<div class="row">
<div class="col-sm-3 mx-auto">

<div class="card mt-5 border border-dark rounder-lg text-center bg-dark">
<h1 class="mt-5">SIGNUP</h1>
{this.state.valid ?  <div class="alert alert-danger ml-5 mr-5" >Invalid Username / Password</div>: null }
<form onSubmit={this.loginSubmit}>
<div class="row">
    <div class="col-6">
    <kbd class="mr-4 ml-3" >UserName</kbd>
    <input class="border border-danger ml-1" type="text" value={this.state.username} placeholder="name" name="username" onChange={this.changeHandler}></input>
</div>

<div class="col-6 ">
    <kbd class="mr-5">Age</kbd>
    <input class="border border-danger" type="text" value={this.state.age} placeholder="age" name="age" onChange={this.changeHandler}></input>
</div>
</div>

<div class="row mt-5">
<div class="col-6">
    <kbd class="mr-5 ml-4">number</kbd>
    <input class="border border-danger ml-0" type="text" value={this.state.number} placeholder="number" name="number" onChange={this.changeHandler}></input>
</div>
<div class="col-6">
    <kbd class="mr-5">City</kbd>
    <input class="border border-danger" type="text" value={this.state.city} placeholder="city" name="city" onChange={this.changeHandler}></input>
</div>
</div>

<div class="row mt-5">
<div class="col-6">
    <kbd class="mr-5 ml-4">State</kbd>
    <input class="border border-danger" type="text" value={this.state.State} placeholder="state" name="state" onChange={this.changeHandler}></input>
</div>
<div class="col-6">
    <kbd class="mr-5">Email</kbd>
    <input class="border border-danger" type="text" value={this.state.Email} placeholder="email" name="email" onChange={this.changeHandler}></input>
</div>
</div>

<div class="row mt-5">
<div class="col-6">
    <kbd class="mr-4 ml-4">Password</kbd>
    <input class="border border-danger" type="password" value={this.state.password} placeholder="password" name="password" onChange={this.changeHandler}></input>
</div>
<div class="col-6 ml-auto mr-auto">
    <kbd class="mr-5">Confirm </kbd>
    <input class="border border-danger ml-3" type="password" value={this.state.cpassword} placeholder="conform password" name="cpassword" onChange={this.changeHandler}></input>
</div>
</div>


<div class="row mt-5 ml-5">
<div class="col-12">
    <button class="btn btn-danger" onSubmit={this.signSubmit}>SignUp</button>
</div>
</div>
</form>

</div>


</div>


</div>







    )
    }
    else if(this.state.valid){
        return(
            
              <Login  username={this.state.username} password={this.state.password} />
            
        )
    }
}
}
export default Signup
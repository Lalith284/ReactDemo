import React, {Component} from 'react'
import { Link, withRouter } from "react-router-dom";
class Login extends Component{

    constructor(props){ 
        super(props)
        this.state={
            username:"",
            password:"",
            valid:false
        }
        this.changeHandler=this.changeHandler.bind(this)
        this.loginSubmit=this.loginSubmit.bind(this)
        this.signupList=[
            {username:"lalith",
              password:"pwd"
            }
            
        ]
        this.signupList.push(this.props)
    }

changeHandler(event){
    this.setState(
        {
            [event.target.name]:event.target.value
        }
    )
}

loginSubmit(event){
    event.preventDefault()
        var user=null
        user=this.signupList.filter(users=>(this.state.username===users.username & this.state.password===users.password))
        if(user.length){
            alert(this.state.username + " loggedIn Sucessfully")
            this.setState({
                valid:false
            })
            this.props.history.push({
                pathname : '/adminhome',
                state :{
                           userName : this.state.username,
                           data : [
                               {id:1,movie:"Titanic",boxoffice:2134444,relesedate:"21/1/1990",genre:"Romance",hasteaser:true,url:"https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F877330410%2F960x0.jpg%3Ffit%3Dscale"},
                               {id:2,movie:"Avengers End Game",boxoffice:212311,relesedate:"1/4/2018",genre:"Action",hasteaser:false,url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYTgZWEhI6vzj119BqlV-aZ8TuZzVkJ5YAniOqnfOwaY4zFinH&s"},
                               {id:3,movie:"Captain Marvel",boxoffice:213123,relesedate:"4/4/2019",genre:"Action",hasteaser:true,url:"https://vignette.wikia.nocookie.net/disneyprincess/images/a/a0/Captain_Marvel_EW_Textless_Cover.jpg/revision/latest?cb=20181117124349"},
                               {id:4,movie:"F&F 9",boxoffice:1231212,relesedate:"4/1/2020",genre:"cars",hasteaser:false,url:"https://pbs.twimg.com/media/DEqUpTDVoAAifCQ.jpg"},
                               {id:5,movie:"1917",boxoffice:32453412,relesedate:"7/1/2020",genre:"war",hasteaser:true,url:"https://thumbor.forbes.com/thumbor/1280x868/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ddc5d83ef7cd600067ba728%2F960x0.jpg%3FcropX1%3D0%26cropX2%3D1333%26cropY1%3D94%26cropY2%3D844"},
                               {id:6,movie:"Avatar",boxoffice:9097812,relesedate:"3/1/2010",genre:"Science fiction",hasteaser:false,url:"https://pbs.twimg.com/media/DEqUpTDVoAAifCQ.jpg"},
                               {id:4,movie:"F&F 9",boxoffice:1231212,relesedate:"4/1/2020",genre:"cars",hasteaser:false,url:"https://pbs.twimg.com/media/DEqUpTDVoAAifCQ.jpg"},
                               {id:4,movie:"F&F 9",boxoffice:1231212,relesedate:"4/1/2020",genre:"cars",hasteaser:false,url:"https://pbs.twimg.com/media/DEqUpTDVoAAifCQ.jpg"},
                               {id:4,movie:"F&F 9",boxoffice:1231212,relesedate:"4/1/2020",genre:"cars",hasteaser:false,url:"https://pbs.twimg.com/media/DEqUpTDVoAAifCQ.jpg"},
                               {id:4,movie:"F&F 9",boxoffice:1231212,relesedate:"4/1/2020",genre:"cars",hasteaser:false,url:"https://pbs.twimg.com/media/DEqUpTDVoAAifCQ.jpg"},
                               {id:4,movie:"F&F 9",boxoffice:1231212,relesedate:"4/1/2020",genre:"cars",hasteaser:false,url:"https://pbs.twimg.com/media/DEqUpTDVoAAifCQ.jpg"},
                            ]

                }
                } 
              );
        }
        else{
            //alert(this.state.username + " invalid")
            this.setState({
                valid:true
            })
        }
}

render(){
 
 console.log(this.props.username)
    console.log(this.signupList)
    return(
<div class="row">
<div class="col-sm-3 mx-auto">

<div class="card mt-5 border border-dark rounder-lg text-center bg-info">
<h1 class="mt-5">LOGIN</h1>
{this.state.valid ?  <div class="alert alert-danger ml-5 mr-5" >Invalid Username / Password</div>: null }
<form onSubmit={this.loginSubmit}>
<div class="row mt-5 ml-5 mr-5">
    <div class="col-12 mx-auto">
    <kbd class="mr-5">UserName</kbd>
    <input class="border border-danger" type="text" value={this.state.username} name="username" onChange={this.changeHandler}></input>
</div>
</div>
<div class="row mt-5 ml-5 mr-5">
<div class="col-12 ml-auto mr-auto">
    <kbd class="mr-5"    >Password</kbd>
    <input class="border border-danger" type="password" value={this.state.password} name="password" onChange={this.changeHandler}></input>
</div>
</div>
<div class="row mt-5 ml-5">
<div class="col-12">
    <button class="btn btn-danger" onSubmit={this.loginSubmit}>Login</button>
</div>
</div>
</form>

</div>


</div>


</div>







    )
}
}
export default Login
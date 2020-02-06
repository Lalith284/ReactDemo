import React,{Component} from 'react'
class AdminHome extends Component{
    constructor(props){
        super(props);
        this.state={
          
        }
    }
  
    render(){
        console.log(this.props.location.state.data)
        let myData = this.props.location.state.data
       return(
           <div className="card-deck mt-3">
               
        {myData.map(function(d, id){
         
         return(
             <div className="col-3 mt-3">
          
            <div key={id} className="card">
             <img className="card-img-top" src={d.url} alt ="Card image cap"></img>
             <div className="card-body d-flex flex-column">
                 <div className="row">
                     <div className="col-12">
                         <h4 className="card-title text-center">{d.movie}</h4>
                         </div>
                     <div className="row">  <i className="material-icons other_icon tleft">access_time</i> <h5 className="tleft">Box Office :  {d.boxoffice} </h5>
                     <h5 className="left card-text">Genre : {d.genre}</h5>
                        
                         </div>
                     </div>
                 
                 

                     <div className="row">
                     <div className="col-9">
                         <h4 className="card-text">
                             <span className="badge badge-primary delivery_badge">{d.hasteaser ? 'Has Teaser' :''}</span>
                         </h4>
                         </div>
                     </div>
                 


                     <div className="row">

                     <i className="material-icons other_icon">access_time</i> <h5 className=" uptext">Launched Date :  {d.relesedate}</h5>
               
                      
                     </div>
                 
                 <div className="row mb-2 btfooter">
                     <button className="btn btnleft btn-success left card-text mt-auto"> EDIT</button>

                     </div>
             
                 
                 
                 </div>
              
      
</div>
 </div>

        )})}

  </div>
  
       )         
      
        }

}
export default AdminHome
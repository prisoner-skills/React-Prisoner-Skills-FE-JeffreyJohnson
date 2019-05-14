import React from 'react';
import {withRouter} from 'react-router-dom';
import {connsect} from 'react-redux';
import{Route,Link,Redirect} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

class HomePage extends React.Component{
  state={
      loading:true,
      person:null
  }  
  //random api grab need to fill with prisoners api
    async componentDidMount(){
        const url='https://api.randomuser.me/';
        const response=await fetch(url);
        const data=await response.json();
        this.setState({person:data.results[0],loading:false});
    }
    render(){
        return(
            
            <div className="HomePage">
            <NavBar/>
                {this.state.loading||!this.state.person?(
                    <div>Loading...</div>
                ):(
                    <div>
                        <div>{this.state.person.name.title}</div>
                        <div>{this.state.person.name.first}</div>
                        <div>{this.state.person.name.last}</div>
                        <img src={this.state.person.picture.large}/>
                    </div>
                )}
            </div>
        )
    }
}
export default HomePage;
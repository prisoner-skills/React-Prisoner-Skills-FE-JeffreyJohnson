import React from 'react';
import {withRouter} from 'react-router-dom';
import {connsect} from 'react-redux';
import{Route,Link,Redirect} from 'react-router-dom';

class HomePage extends React.Component{
    /*componentDidMount(){
        this.willgrabthedatafunction
    }*/
    render(){
        return(
            <div className="HomePage">
                <h2>Home</h2>
            </div>
        )
    }
}
export default <HomePage/>;
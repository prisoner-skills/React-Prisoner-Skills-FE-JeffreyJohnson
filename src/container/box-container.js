import react from 'react';
import {connect}from 'react-redux';
import * as actionCreators from '../actions/index.js';
import App from '../App.js';

class BoxCon extends React.Component{
    render(){
        return(
            <App data={this.props.allData}></App>
        )
    }
}

const mapStateToProps=(state)=>{
    return state
};
export default connect (mapStateToProps,actionCreators)(BoxCon)
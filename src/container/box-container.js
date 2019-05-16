import react from 'react';
import {connect}from 'react-redux';
import * as actionCreators from '../actions/index.js';
import Prisons from '../components/prisons.js';

class BoxCon extends React.Component{
    render(){
        return(
            <Prisons prison={this.props.prisons}></Prisons>
        )
    }
}

const mapStateToProps=(state)=>{
    return state
};
export default connect (mapStateToProps,actionCreators)(BoxCon)
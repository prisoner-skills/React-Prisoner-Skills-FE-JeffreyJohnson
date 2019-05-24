import React,{Component} from 'react';
import{connect} from 'react-redux';
import {bindActionCreators}from 'redux';


class PrisonContainer extends Component{
    createListItems(){
        return this.props.prisons.prisons.map((prison)=>{
            return(
                <li key="prison.id">{prison.name} {prison.address}</li>
                
            )
        })
    }
    render(){
        return(
            <div>
            <ul>
                {this.props.prisons.prisons.name}
            </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        prisons: state.prisons
    }
}





export default connect(mapStateToProps)(PrisonContainer);
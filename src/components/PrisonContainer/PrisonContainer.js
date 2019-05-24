import React,{Component} from 'react';
import{connect} from 'react-redux';



class PrisonContainer extends Component{
    createListItems(){
        return this.props.prisons.map((prison)=>{
            return(
                <li key="prison.id">{prison.name} {prison.address}</li>
                
            )
        })
    }
    render(){
        return(
            <div>
            <ul>
                1
            </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        prisons:state.prisons
    }
}





export default connect(mapStateToProps)(PrisonContainer);
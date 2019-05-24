import React, {Component} from 'react';
import{connect}from 'react-redux';
import PrisonList from '../components/prisons/prisons';
import {fetchData }from '../actions/index';

class PrisonListView extends React.Component{
    componentDidMount(){
        this.props.fetchData();
    }
    render(){
        if(this.props.isFetching){
            return <h3>Loading Prisons...</h3>
        }
        return(
            <div className="PrisonListWrapper">
                <PrisonList prisons={this.props.data}/>
            </div>
        )
    }
}
const mapStateToProps=state=>{
    console.log('state',state.dataReducer.data)
    return{
       prisons:state.dataReducer.prisons,
       fetching:state.dataReducer.isfetching
    }
}
export default connect(
    mapStateToProps /* mapStateToProps replaces null here */,
    {
      /* action creators go here */
      fetchData
    }
  )(PrisonListView);
  

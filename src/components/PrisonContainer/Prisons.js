import React from 'react';
import PrisonContainer from './PrisonContainer';

class Prisons extends React.Component{
    render(){
        return(
            <div>
                {this.props.prisonsFetched ?(
                    this.props.prisons.map(prison=>(
                    <PrisonContainer key={prison.id}{...prison}/>
                ))
                ):(<h1>
                    Loading Prisons..
                   </h1>)}
            </div>
        );
    }
}
export default Prisons;
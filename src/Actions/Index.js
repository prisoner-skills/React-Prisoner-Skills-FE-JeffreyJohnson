import axios from 'axios';


export const FETCHING_DATA='FETCHING_DATA';
export const FETCHING_DATA_SUCCESS='FETCHING_DATA_SUCCESS';
export const FETCHING_DATA_FAILURE='FETCHING_DATA_FAILURE';
export const ERROR='ERROR';

export const getPrisons=()=>{
    const prisons=axios.get('https://prison-skills.herokuapp.com')
   return dispatch=>{
       dispatch({ type:FETCHING_DATA})
       prisons
        .then(res=>{
            dispatch({type:FETCHING_DATA_SUCCESS,payload:res.data})
        })
        .catch(err=>{
            dispatch({type:ERROR,payload:err})
        })
   }
}



import axios from 'axios';

export function allData(){
    return(dispatch)=>{
        return axios.get("https://prison-skills.herokuapp.com").then((response)=>{
            dispatch(allData(response.data));
        })
    }
})

export function allData(api){
    return{
        type:'ALL_DATA',
        color:color
    }
}
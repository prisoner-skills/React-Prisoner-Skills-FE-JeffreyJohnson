let defaultState={
    allData:[]
}
const mainReducer=(state=defaultState,action)=>{
    if(action.type==='ALL_DATA'){
        return{
            ...state,
            allData:action.data
        }
    }else{
            return{
                ...state
            }
        }
    }

export default mainReducer;
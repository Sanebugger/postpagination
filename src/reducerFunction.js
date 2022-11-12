//this function updates the initial state(and then keep on updating the current state)
// this fn is passed as a arguement in useReducer fn(that is also an important hook)

const reducer = (state,action) => {
    // if(action.type=== "GET_STORIES")
    //     return state;

    switch(action.type){
        case "GET_STORIES":
            return{
                ...state,
                hits: action.payload.hits,
                nbPages: action.payload.nbPages,
                isLoading: false,
            }
        case "SET_LOADING":
            return{
                ...state,
                isLoading: true,
            }
        case "SEARCH_POST":
            return{
                ...state,
                query:action.payload,
            }

    }
}
export default reducer;
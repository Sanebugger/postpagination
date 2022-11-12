import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer  from "./reducerFunction";


const AppContext = React.createContext();

const initialState = {
    isLoading:"true",
    query:"politics",
    nbPages:0,
    page:0,
    hits:[]
}

const AppProvider = ({ children }) => {

    //             const [isLoading, setIsLoading] = useState(true);
    //             const [isError, setIsError] = useState({ show: "false", msg: "" });
    //             const [movie, setMovie] = useState([]);

    //   const getMovie = async (url) => {
    //     try {
    //       const res = await fetch(url);
    //       const data = await res.json();
    //       console.log(data);

    //             if (data.Response === "True") {
    //               setIsLoading(false);
    //               setMovie(data.Search || data);
    //               setIsError({ show: "false", msg: "" });
    //             } else {
    //               setIsError({ show: "true", msg: data.Error });
    //             }

    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };

    //   useEffect(() => {
    //       getMovie(API_URL);
    //   }, []);
    
    // const [state, dispatch] = useReducer(reducer, initialState);

    const [state, dispatch] = useReducer(reducer, initialState);

    const API = 'http://hn.algolia.com/api/v1/search?'

    const getApiData = async (url) => {

        /////////////////////////////////////
        dispatch({type:"SET_LOADING"})
        /////////////////////////////////////

        try {
            const res = await axios.get(url);
            const usefuldata = await res.data;
            console.log(usefuldata);
            ///////////////////////////////////////
            dispatch({
                type:"GET_STORIES",
                payload:{
                    hits:usefuldata.hits,
                    nbPages:usefuldata.nbPages,
                }
            })
            ///////////////////////////////////////
        } catch (error) {
            console.log(error)
        };
    }
    
    //search
    const searchPost = (searchQuery) =>{
        dispatch({type:"SEARCH_POST",
        payload:searchQuery,                
    })
    }
    

    useEffect(() => {
        getApiData(`${API}query=${state.query}&page=${state.page}`);
    }, [state.query]);
    

    return (
        <>
            <AppContext.Provider value={{...state ,searchPost}}>
                {children}
            </AppContext.Provider>
        </>
    );
};

const useGlobalContext = () => {
    return useContext(AppContext);
};
export { AppContext ,AppProvider, useGlobalContext };
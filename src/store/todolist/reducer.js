import { CREATE_DATA, DELETE_DATA, GET_DATA, UPDATE_DATA } from "./const"


const initialValue = {
    data:[],
    loading: false
}

export default function Reducer(state = initialValue, action)
{
    switch(action.type){
        case GET_DATA:
            return{
                ...state,
                data: action.payload,
            }
        case CREATE_DATA:
            return{
                ...state,
                data: [...state.data, action.payload],
            }
        case UPDATE_DATA:
            return{
                ...state,
                data: state.data.map((item) => item.id == action.payload.id ? action.payload: item)
            }
        case DELETE_DATA:
            return{
                ...state,
                data: state.data.filter((item) => item.id !== action.payload),
            }
        default:
            return state;
    }
}
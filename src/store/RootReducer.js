import { combineReducers } from "redux"
import todolist from './todolist/reducer'
const RootReducer = combineReducers({
    todolist: todolist
})
export default  RootReducer
import Swal from "sweetalert2";
import { api } from "../../utils/api";
import { CREATE_DATA, DELETE_DATA, GET_DATA, UPDATE_DATA } from "./const";

export function getData() {
    return async (dispatch, getState) => {
        fetch(`${api}/to-do-list`)
            .then(res => res.json())
            .then(resJson => {
                dispatch({ type: GET_DATA, payload: resJson })
            })
            .catch((err) => {
                console.log(err)
            })
    };
}

export function createData(data, cb) {
    return async (dispatch, getState) => {
        let dataReducer = await getState().todolist.data
        const max = dataReducer.reduce(function (prev, current) {
            return (prev.id > current.id) ? prev.id : current.id
        }, 0)
        console.log(max)
        console.log(dataReducer)
        var currentdate = new Date();
        var date = (currentdate.getDate() + 1) < 10 ? '0' + (currentdate.getDate() + 1) + ' ' : (currentdate.getDate() + 1) + " ";
        var hour = (currentdate.getHours() + 1) < 10 ? '0' + (currentdate.getHours() + 1) + ':' : (currentdate.getHours() + 1) + ":"
        var month = (currentdate.getMonth() + 1) < 10 ? '0' + (currentdate.getMonth() + 1) + '-' : (currentdate.getMonth() + 1) + "-"
        var datetime = currentdate.getFullYear() + "-"
            + month
            + date
            + hour
            + currentdate.getMinutes()

        dispatch({ type: CREATE_DATA, payload: { ...data, id: max > 0 ? max + 1 : 1, createdAt: datetime } })
        cb(true, 'Created')

    };
}

export function updateData(data, cb) {
    return async (dispatch, getState) => {
        dispatch({ type: UPDATE_DATA, payload: data })
        cb(true, 'Updated')
    };
}
export function deleteData(id) {
    return async (dispatch, getState) => {
        dispatch({ type: DELETE_DATA, payload: id })
        Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
        )
    };
}
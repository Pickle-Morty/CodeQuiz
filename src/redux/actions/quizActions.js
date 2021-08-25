import { quizAPI } from "../../API";
import { cleanAnswerAC } from "../store";



// thunks

export const postResult = (body) => (dispatch) =>{
    quizAPI.postResult(body).then ( request => {
        dispatch(cleanAnswerAC())
        console.log( "Ответ сервера: ", request )
    })
}


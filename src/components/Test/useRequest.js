import * as axios from "axios"
import { useSelector, useDispatch } from 'react-redux';
import { setQuestionsAC } from "../../redux/store"


export const useRequest = (URL, type, params) => {
    const dispatch = useDispatch();
    switch (type) {
        case "GET": {
            return axios.get(URL)
                .then((request) => {
                    let questionsData = request.data.message[0].userAnswer.questions
                    let action = setQuestionsAC(questionsData)
                    dispatch(action)
                })
        }
    }

}
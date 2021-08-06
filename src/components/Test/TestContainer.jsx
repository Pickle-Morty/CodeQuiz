import "./styles.scss"
import Test from './Test';
import * as axios from "axios"
import { useSelector, useDispatch } from 'react-redux';
import { setQuestionsAC } from "../../redux/store"
import { useParams } from "react-router-dom";





const TestContainer = () => {
    const { id } = useParams()
    const dispatch = useDispatch();
    const question = useSelector(state => state.testData.questions[id])
    const request = (URL, type, params) => {
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
    const setQuestions = (s) => {
      request("https://thawing-brushlands-67997.herokuapp.com/api/", "GET") 
    }
    return <Test setQuestions={setQuestions} question={question} id={id} />
}



export default TestContainer
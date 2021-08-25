import "./styles.scss"
import Test from './Test';
import * as axios from "axios"
import { useSelector, useDispatch } from 'react-redux';
import { setAnswerAC, setQuestionsAC } from "../../redux/store"
import { useParams } from "react-router-dom";





const TestContainer = () => {
    const { id } = useParams()
    const dispatch = useDispatch();
    const answers = useSelector(state => state.testData.answer)
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
    const setAnswer = (answer) => {
        let action = setAnswerAC(answer)
        dispatch(action)
    }
    return <Test setQuestions={setQuestions} setAnswer = {setAnswer} question={question} id={id} second = {10} />
}



export default TestContainer
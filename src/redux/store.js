import { createStore, combineReducers, applyMiddleware } from 'redux';
import testReduser from "./reducers/quiz-reducer"
import thunk from "redux-thunk"

let redusers = combineReducers({
    testData : testReduser,
})

let store = createStore(redusers, applyMiddleware(thunk))

export default store


export const setQuestionsAC = (questions) => {
    return {
        type: "SET_QESTIONS",
        questions: questions
    } 
}

export const setAnswerAC = (answer) => {
    return {
        type: "SET_ANSWER",
        answer: answer
    } 
}

export const cleanAnswerAC = () => {
    return {
        type: "CLEAN_ANSWER",
        
    } 
}
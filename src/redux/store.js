import {combineReducers, createStore} from "redux"
import testReduser from "./test-reducer"

let redusers = combineReducers({
    testData : testReduser,
})

let store = createStore(redusers)

export default store
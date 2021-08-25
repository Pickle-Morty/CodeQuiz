let initialState = {
    questions: [
     
    ], 
    answer: [

    ]
  }

const testReduser = (state = initialState, action) => {
  switch (action.type) {
    case "SET_QESTIONS": {
        return {...state, 
           questions : [
            ...action.questions,
           ]
        }
    }
    case "SET_ANSWER": {
        let newState = {...state, 
          ...state.answer,
      }
        newState.answer.push(action.answer)
        return newState
    }
    case "CLEAN_ANSWER": {
      return {...state,
        answer: []
      }
    }
    default:
        return {...state}
}
}

export default testReduser
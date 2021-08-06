let initialState = {
    questions: [
     
    ]
  }
const SET_QESTIONS = "SET_QESTIONS"
const SET_CURRENTPAGE = "SET_CURRENTPAGE"

const testReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_QESTIONS: {
        return {...state, 
           questions : [
            ...action.questions,
           ]
        }
    }
    case SET_CURRENTPAGE: {
        return {...state, 
            currentPage: action.currentPage
        }
    }
    default:
        return {...state}
}
}

export default testReduser
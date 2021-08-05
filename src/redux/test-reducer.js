let initialState = {
    id: 10,
    text: "Как расшифровывается HTML?",
    variants : [
      { text: 'First', id: '1' },
      { text: 'Second', id: '2' },
      { text: 'third', id: '3' },
      { text: 'Fiadsasrst', id: '4' },
  ]
  }


const testReduser = (state = initialState, action) => {
    let newState = {...state}
    return newState
}

export default testReduser
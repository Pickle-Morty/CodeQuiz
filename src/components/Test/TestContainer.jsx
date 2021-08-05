import React from 'react';
import "./styles.scss"
import { connect } from "react-redux";
import Test from './Test';


let mapStateToProps = (state) => {
    return {
       question: state.testData
    }
    
}
let mapDispatchToProps = (dispatch) => {
    return 
}


let TestContainer = connect(mapStateToProps, mapDispatchToProps)(Test)

export default TestContainer
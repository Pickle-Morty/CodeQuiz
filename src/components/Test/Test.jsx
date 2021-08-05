import React from 'react';
import Answers from './Answers';
import ProgressBar from './ProgressBar';
import "./styles.scss"
import {Logo} from "../../assets/img"
import * as axios from "axios"



const Test = ({question}) => {
    const {id,text,variants} = question

    let questionData = {}
    axios.get("https://thawing-brushlands-67997.herokuapp.com/api/").then((request) => {
        console.log(request)
    })
    return (
        <div className="test container">
            <img src={Logo} alt="" className="test__logo"/>            
            <span className="test__number">{id}</span>
            <h1 className="test__text">{text}</h1>
            <span className="test__massage">выберите один ответ</span>
            <Answers variants={variants} />
            <ProgressBar value="45" />
        </div>
    )
}

export default Test
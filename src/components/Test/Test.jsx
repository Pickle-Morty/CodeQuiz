import React, { useEffect } from 'react';
import Answers from './Answers';
import ProgressBar from './ProgressBar';
import "./styles.scss"
import { Logo } from "../../assets/img"
import * as axios from "axios"
import { useSelector, useDispatch } from 'react-redux';
import { setQuestionsAC } from "../../redux/store"
import { useHistory, useParams } from "react-router-dom";



const Test = ({setQuestions, question, id}) => {
    useEffect( ()=> {setQuestions()}, [])
    return (
        <div className="test container">
            <img src={Logo} alt="" className="test__logo" />
            <span className="test__number"></span>
            <h1 className="test__text">{question?.text}</h1>
            <span className="test__massage">выберите один ответ</span>
            <Answers variants={question?.variants || []} />
            <ProgressBar  id={id} totalQuestionCount = {5} />
        </div>
    )
}

export default Test
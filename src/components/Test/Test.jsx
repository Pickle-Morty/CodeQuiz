import React, { useEffect, useState } from 'react';
import Answers from './Answers';
import ProgressBar from './ProgressBar';
import "./styles.scss"
import { Logo } from "../../assets/img"
import * as axios from "axios"
import { useSelector, useDispatch } from 'react-redux';
import { setQuestionsAC } from "../../redux/store"
import { useHistory, useParams } from "react-router-dom";
import { Timer } from '../common';


const Test = ({ setAnswer, setQuestions, question, id, second }) => {
    let [checked, setChecked] = useState(false)
    let history = useHistory();
    let [timerStatus, setTimerStatus] = useState("active")
    let totalQuestionCount = 5
    
    let [answerValue, setAnswerValue] = useState()
    const onSelectAnswer = (index) => {
        setAnswerValue(
            answerValue = index
        )
        let answer = Number(answerValue) + 1
        setAnswer(answer)
        setChecked( checked = true) //
        
    }
    const onСlean = () => {
        setChecked(checked = false)
        
    }
    const onRfreshTimer =() => {
        setTimerStatus ("refresh")
        let url = "/test/" + String((Number(id) + 1))
        history.push((id < totalQuestionCount )? url :("/complete/") );
    }

    const switchQuestion = () => {
        onRfreshTimer()
        setAnswer(0)
    }

    

    useEffect(() => {
        setQuestions()
        setChecked(checked = false)
    }, [])




    return (
        <div className="test container">
            <img src={Logo} alt="" className="test__logo" />
            <span className="test__number"><Timer seconds = {second} onRfreshTimer={onRfreshTimer} timerStatus = {timerStatus} setTimerStatus = {setTimerStatus} switchQuestion = {switchQuestion} /></span>
            <h1 className="test__text">{question?.text}</h1>
            <span className="test__massage">выберите один ответ</span>
            <Answers onSelectAnswer = {onSelectAnswer} answerValue = {answerValue} variants={question?.variants || []} setAnswer={setAnswer} id={id} checked={checked} setChecked={setChecked} />
            <ProgressBar id={id} totalQuestionCount={totalQuestionCount} onСlean={onСlean} checked={checked}  onRfreshTimer = {onRfreshTimer}/>
        </div>
    )
}

export default Test
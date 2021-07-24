import React from 'react';
import Answers from './Answers';
import ProgressBar from './ProgressBar';
import "./styles.scss"
import {Logo} from "../../assets/img"




const Test = ({qwestion}) => {
    const {id,text,variants} = qwestion
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
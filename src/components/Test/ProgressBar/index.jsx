import * as React from 'react';
import "./styles.scss"
import { ArrowPrev, ArrowNext } from "../../../assets/img"
import { NavLink } from 'react-router-dom';


const ProgressBar = ({  id, totalQuestionCount, onСlean, checked, onRfreshTimer }) => {
    let value = ((Number(id))/(Number(totalQuestionCount)))* 100
    let prevURL = Number(id) + 1
    return (
        <div className="progress__box">
          
            <div className="progress__bar">
                <div className="progress__bar--line" max="100" value={value} style={{ width: value + "%" }}></div>
                <div className="progress__bar--dot" max="100" value={value} style={{ left: value + "%" }}></div>
            </div>

            <NavLink to={(id < totalQuestionCount )? ("/test/" + prevURL ): ("/complete/") } 
            onClick = {()=>{onСlean()
                onRfreshTimer()}} className={(checked) ? ("btn__next"):('btn__next blocked')}>
                <span>следущий вопрос</span><img src={ArrowNext} alt="" />
            </NavLink>
        </div>
    )
}

export default ProgressBar
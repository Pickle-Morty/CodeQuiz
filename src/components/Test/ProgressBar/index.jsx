import * as React from 'react';
import "./styles.scss"
import { ArrowPrev, ArrowNext } from "../../../assets/img"
import { NavLink } from 'react-router-dom';


const ProgressBar = ({  id, totalQuestionCount }) => {
    let value = ((Number(id))/(Number(totalQuestionCount)))* 100
    let prevURL = Number(id) + 1
    return (
        <div className="progress__box">
            <NavLink to={(id>0)? ("/test/" + (Number(id) - 1)) : ("/test/0")} className="btn__prev">
                <img src={ArrowPrev} alt="" />
            </NavLink>
            <div className="progress__bar">
                <div className="progress__bar--line" max="100" value={value} style={{ width: value + "%" }}></div>
                <div className="progress__bar--dot" max="100" value={value} style={{ left: value + "%" }}></div>
            </div>

            <NavLink to={(id < totalQuestionCount )? ("/test/" + prevURL ): ("/complete/") } className="btn__next">
                <span>следущий вопрос</span><img src={ArrowNext} alt="" />
            </NavLink>
        </div>
    )
}

export default ProgressBar
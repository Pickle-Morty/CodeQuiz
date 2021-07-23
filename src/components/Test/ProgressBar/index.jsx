import * as React from 'react';
import "./styles.scss"
import { ArrowPrev, ArrowNext } from "../../../assets/img"


const ProgressBar = ({ value }) => {
    return (
        <div className="progress__box">
            <button className="btn__prev"><img src={ArrowPrev} alt="" /></button>
            <div className="progress__bar">
                <div className="progress__bar--line" max="100" value="50" style={{width: value + "%"}}></div>
                <div className="progress__bar--dot" max="100" value="50" style={{left: value + "%"}}></div>
            </div>
            <button className="btn__next"><span>следущий вопрос</span><img src={ArrowNext} alt="" /></button>

        </div>
    )
}

export default ProgressBar
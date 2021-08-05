import * as React from 'react';
import "./styles.scss"
import { ArrowPrev, ArrowNext } from "../../../assets/img"
import { NavLink } from 'react-router-dom';


const ProgressBar = ({ value }) => {
    return (
        <div className="progress__box">
            <NavLink to="/fail" className="btn__prev">
                <img src={ArrowPrev} alt="" />
            </NavLink>
            <div className="progress__bar">
                <div className="progress__bar--line" max="100" value="50" style={{ width: value + "%" }}></div>
                <div className="progress__bar--dot" max="100" value="50" style={{ left: value + "%" }}></div>
            </div>

            <NavLink to="/complete" className="btn__next">
                <span>следущий вопрос</span><img src={ArrowNext} alt="" />
            </NavLink>
        </div>
    )
}

export default ProgressBar
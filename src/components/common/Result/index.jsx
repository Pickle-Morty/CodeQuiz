import React, { useEffect } from 'react';
import "./styles.scss"
import {Logo,} from "../../../assets/img"
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { postResult } from '../../../redux/actions/quizActions';



const Result = ({data}) => {
    const dispatch = useDispatch()
    let answers = useSelector(state => state.testData.answer)
    const { title, subtitle, massage, fullScore, yourScore, imgAray } = data
    useEffect( ()=> {
        console.log ("Обрабатываем результаты")
        dispatch(postResult(answers))
    },[])
    return (
        <section className="result">
             {imgAray.map( img => <img src={img} alt="" className="result__img"/> )}
            <div className="result__title">
                <span>{subtitle}</span>
                <h1>{title}</h1>
            </div>
            <span className="result__massage">{massage}</span>
            <div className="result__score">
                <span>РЕЗУЛЬТАТ:</span>
                <div>{yourScore}/{fullScore}</div>
            </div>
            <NavLink className="btn__submit" to ="/" >Начать заново</NavLink>
        </section>
    )
}

export default Result
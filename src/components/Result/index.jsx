import React from 'react';
import "./styles.scss"
import {Logo, AmongAss, PackMan} from "../../assets/img"
import { NavLink } from 'react-router-dom';

let imgAray = [Logo, AmongAss, PackMan]

 const contant = {
     title: "GAME OVER", subtitle: "Ooops!", massage: "Время вышло",
     imgAray: [AmongAss, PackMan]
 } 



const Result = ({score, contant}) => {
    const {fullScore, yourScore} = score
    return (
        <section className="result">
            <img src={Logo} alt="" className="result__logo"/> 
             {contant.imgAray.map( img => <img src={img} alt="" className="result__img"/> )}
            <div className="result__title">
                <span>{contant.subtitle}</span>
                <h1>{contant.title}</h1>
            </div>
            <span className="result__massage">{contant.massage}</span>
            <div className="result__score">
                <span>РЕЗУЛЬТАТ:</span>
                <div>{yourScore}/{fullScore}</div>
            </div>
            <NavLink className="btn__submit" to ="/" >Начать заново</NavLink>
        </section>
    )
}

export default Result
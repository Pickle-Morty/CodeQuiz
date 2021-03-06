import { NavLink } from "react-router-dom"
import "./styles.scss"
import {StartBtn,StartImg1,StartImg2,StartImg3,PackMan,StartImg5,StartImg6,StartImg7,StartImgMobile1, StartImgMobile2,Logo } from "../../assets/img"




const Start = () => {
    return (
        <section className="start">
            
            <NavLink to="/test/0" className="start__link">НАЧАТЬ</NavLink>
            <img src={StartImg1} alt="" className="start__img"/>
            <img src={StartImg2} alt="" className="start__img"/>
            <img src={StartImg3} alt="" className="start__img"/>
            <img src={PackMan} alt="" className="start__img"/>
            <img src={StartImg5} alt="" className="start__img"/>
            <img src={StartImg6} alt="" className="start__img"/>
            <img src={StartImg7} alt="" className="start__img"/>
            <img src={StartImgMobile1} alt="" className="start__img"/>
            <img src={StartImgMobile2} alt="" className="start__img"/>
            <img src={Logo} alt="" className="start__img"/>
            <span className="start__massage">
                проверь свои знания
            </span>
        </section>
    )
}

export default Start
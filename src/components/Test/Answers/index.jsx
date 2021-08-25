import * as React from 'react'
import "./styles.scss"
import { useState , useEffect} from 'react';

const Answers = ({ variants, setAnswer, id, checked, onSelectAnswer, setChecked, answerValue }) => {
    
    return (
        <div className="answers">
            {variants.map((variant , index) => {
                return (
                    <label className="answers__input" >
                        <input onClick = {()=>{onSelectAnswer(index)}} className="answers__input--checkbox" type="radio" value={index} name="answer"  checked = {(index=== answerValue)?(checked):(false)} />
                        {variant}
                    </label>
                )
            })}
        </div>
    )
}

export default Answers
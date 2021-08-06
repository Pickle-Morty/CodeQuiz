import * as React from 'react'
import "./styles.scss"
import  { useState } from 'react';

const Answers = ({variants}) => {
    let [answer, setAnswer] = useState()
    return (
        <div className="answers">
            {variants.map((variant) => {
                return (
                    <label className="answers__input" >
                        <input className="answers__input--checkbox" type="radio" value={variant} name="answer"  />
                        {variant}
                    </label>
                )
            })}
        </div>
    )
}

export default Answers
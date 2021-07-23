import * as React from 'react'
import "./styles.scss"


const Answers = ({variants}) => {
    return (
        <div className="answers">
            {variants.map(({ text, id }) => {
                return (
                    <label className="answers__input" htmlFor={id}>
                        <input className="answers__input--checkbox" type="radio" value={text} name="answer" id={id} />
                        {text}
                    </label>
                )
            })}
        </div>
    )
}

export default Answers
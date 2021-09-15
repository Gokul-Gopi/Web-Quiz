import React from 'react'
import '../VerifyAnswer/VerifyAnswer.css'

const VerifyAnswer = ({ question }) => {
    return (
        <div className='verify-answer'>
            <div className='question'>
                {question.question}
            </div>

            <div className='options'>
                {question.options.map(({ option, isRight }, index) => {
                    return <div key={index} style={{
                        border: isRight && '2px solid green',
                        borderRadius: '5px',
                        padding: '0.5rem',
                        marginBottom: '0.5rem'
                    }} className="answer">{option}</div>
                })}
            </div>
        </div>
    )
}

export default VerifyAnswer

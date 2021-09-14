import React from 'react'
import '../QuizOption/QuizOption.css'

const QuizOption = ({ img }) => {
    return (
        <div className='quiz-option'>
            <img src={img} />
            <div className="overlay"></div>
        </div>
    )
}

export default QuizOption

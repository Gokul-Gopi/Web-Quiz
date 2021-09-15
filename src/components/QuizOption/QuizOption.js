import React from 'react'
import '../QuizOption/QuizOption.css'

const QuizOption = ({ img, quizName }) => {
    return (
        <div className='quiz-option'>
            <img src={img} />
            <div className="overlay">{quizName}</div>
        </div>
    )
}

export default QuizOption

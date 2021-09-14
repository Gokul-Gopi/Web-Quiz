import React, { useState, useEffect } from 'react'
import '../Question/Question.css'
import { GrLinkNext } from 'react-icons/gr'
import { useQuiz } from '../../context/quizContext'
import { Link } from 'react-router-dom'

const Question = ({ questions, questionIndex }) => {

    const { state, dispatch } = useQuiz()
    const [disableState, setDisableState] = useState(false)
    const [checkedState, setCheckedState] = useState(new Array(4).fill(false))

    useEffect(() => {
        setDisableState(false);
        setCheckedState((current) => current.map((i) => false));
    }, [questions.question]);

    const nextQuesHandler = () => {
        dispatch({ type: 'SET_CURRENT_QUES_INDEX' })
    }

    const markAnswer = (optionIndex) => {
        setDisableState(true)
        setCheckedState((current) =>
            current.map((e, index) => index === optionIndex && true)
        )
        dispatch({ type: 'MARK_ANSWER', payload: { questionIndex, optionIndex } })
    }

    return (
        <div className='quiz-question'>

            <div className='question'>{questions.question}</div>

            <div className='options'>
                {questions.options.map((option, index) => {
                    return (
                        <div className='option' key={index}>
                            <input type="radio" name="option"
                                onChange={() => markAnswer(index)}
                                disabled={disableState}
                                checked={checkedState[index]}
                            />
                            <label htmlFor="">{questions.options[index].option}</label>
                        </div>
                    )
                })}
            </div>

            <div className="next-btn">

                {state.currentQuiz.questions.length === questionIndex + 1
                    ? <Link to='/score'>
                        <button>Check your score</button>
                    </Link>
                    : <button onClick={() => nextQuesHandler()}><GrLinkNext /></button>
                }

            </div>
        </div>
    )
}

export default Question

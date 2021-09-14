import React, { useEffect } from 'react'
import '../Quiz/Quiz.css'
import { useParams } from 'react-router'
import { dataBase } from '../../database/database'
import Question from '../Question/Question'
import { useQuiz } from '../../context/quizContext'

const Quiz = () => {
    const { quizID } = useParams()
    const { state, dispatch } = useQuiz()
    const quiz = dataBase.find(quiz => quiz.id = quizID)

    useEffect(() => {
        dispatch({ type: 'SET_QUIZ', payload: quiz })
        state.currentQuesIndex === 0 && dispatch({
            type: 'SET_CURRENT_QUES_OPTIONS', payload: quiz.questions[state.currentQuesIndex]
        })
    }, [])


    return (
        <div className='quiz'>
            {state.currentQuiz?.length !== 0 &&
                <Question questions={state.currentQuiz?.questions[state.currentQuesIndex]} questionIndex={state.currentQuesIndex} />
            }
        </div>
    )
}

export default Quiz

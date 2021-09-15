import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import VerifyAnswer from '../../components/VerifyAnswer/VerifyAnswer'
import { useQuiz } from '../../context/quizContext'
import '../Score/Score.css'

const Score = () => {
    const { state } = useQuiz()
    const [quizFinished, setQuizFinished] = useState(false)
    const [scoreDetails, setScoreDetails] = useState({})
    const navigate = useNavigate()

    const onClickHandler = () => {
        navigate('/')
        window.location.reload()
    }

    useEffect(() => {
        if (state.currentQuesIndex !== state.currentQuiz?.questions?.length - 1) {
            setQuizFinished(false)
        } else {
            calculateScoreDetails()
            setQuizFinished(true)
        }
    }, [])

    const calculateScoreDetails = () => {
        const userScore = state.userScore
        const totalPossibleScore = state.currentQuiz.questions.length * 5
        const scorePercentage = userScore / totalPossibleScore * 100
        const attempted = state.userAnswers.length - 1
        let correctAns = 0
        state.userAnswers.map(({ question, answer }) => {
            if (state.currentQuiz.questions[question]?.options[answer].isRight) {
                correctAns += 1
            }
        })

        setScoreDetails(preState => ({ scorePercentage, attempted, correctAns }))
    }

    return (
        <div className='score'>
            {quizFinished ?
                <>
                    <div className='user-score-details'>
                        <div className='score-percentage'>
                            <span>You Scored</span>
                            <span>{scoreDetails.scorePercentage}%</span>
                        </div>

                        <div className='other-details'>
                            <div>
                                <span>Correct answers</span>
                                <span>{scoreDetails.correctAns}</span>
                            </div>
                            <div>
                                <span>Questions attempted</span>
                                <span>{scoreDetails.attempted}/{state.currentQuiz.questions.length}</span>
                            </div>
                        </div>
                    </div>

                    <div className='answers-to-ques'>
                        <h2>Correct answers</h2>
                        {state.currentQuiz.questions.map((ques, index) => {
                            return <VerifyAnswer key={index} question={ques} userAnsIndex={state.userAnswers[index + 1]?.answer} />
                        })}
                    </div>
                </> :
                <div className='no-score'>No Scores to display..</div>
            }

            <button className='back-to-home-btn' onClick={() => onClickHandler()}>Back to home</button>
        </div>
    )
}

export default Score

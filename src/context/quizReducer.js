export const initialState = {
    currentQuiz: [],
    currentQues: {},
    currentQuesIndex: 0,
    currentScore: 0,
    userAnswers: [{
        question: null,
        answer: null
    }],
    userScore: 0
}

export const quizReducer = (state, action) => {
    switch (action.type) {
        case 'SET_QUIZ':
            return { ...state, currentQuiz: action.payload }

        case 'SET_CURRENT_QUES_OPTIONS': return { ...state, currentQues: action.payload }

        case 'SET_CURRENT_QUES_INDEX': return { ...state, currentQuesIndex: state.currentQuesIndex + 1 }

        case 'SET_USER_ANSWERS': return { ...state }

        case 'MARK_ANSWER': let { questionIndex, optionIndex } = action.payload

            const answer = state.currentQuiz.questions[questionIndex].options[optionIndex].isRight

            return {
                ...state,
                userAnswers: [
                    ...state.userAnswers,
                    { question: questionIndex, answer: optionIndex },
                ],
                userScore: answer ? state.userScore + 5 : state.userScore,
            };

        default: return { ...state }
    }
}





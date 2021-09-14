import { createContext, useContext, useEffect, useReducer } from "react";
import { initialState, quizReducer } from "./quizReducer";

const QuizContext = createContext()

export const QuizProvider = ({ children }) => {
    const [state, dispatch] = useReducer(quizReducer, initialState)
    return (
        <QuizContext.Provider value={{ state, dispatch }}>
            {children}
        </QuizContext.Provider>
    )
}


export const useQuiz = () => useContext(QuizContext)
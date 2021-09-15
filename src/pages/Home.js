import React from 'react'
import '../pages/Home.css'
import QuizOption from '../components/QuizOption/QuizOption'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div className='home'>
            <Link to={`quiz/${1}`} >
                <QuizOption img={'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'} quizName='Javascript' />
            </Link>

            <Link to={`quiz/${2}`} >
                <QuizOption img={'https://img2.pngio.com/css3-png-download-css-icon-transparent-png-kindpng-css-logo-png-860_913.png'} quizName='CSS' />
            </Link>
        </div>
    )
}

export default Home

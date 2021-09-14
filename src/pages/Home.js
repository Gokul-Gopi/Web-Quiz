import React from 'react'
import '../pages/Home.css'
import QuizOption from '../components/QuizOption/QuizOption'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div className='home'>
            <Link to={`quiz/${1}`} >
                <QuizOption img={'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'} />
            </Link>
        </div>
    )
}

export default Home

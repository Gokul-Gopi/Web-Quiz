import React from 'react'
import '../../components/Header/Header.css'
import { FaLightbulb } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <FaLightbulb style={{ marginRight: '5px', fontSize: '1.7rem' }} />
            <Link to='/' style={{ textDecoration: 'none', color: 'initial' }}>
                <h2>Web Quiz</h2>
            </Link>
        </div>
    )
}

export default Header

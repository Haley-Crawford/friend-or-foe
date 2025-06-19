import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className='nav'>
            <ul className='nav-list'>
                <Link to='/' className='nav-link'>
                    <li className='nav-li'>Home</li>
                </Link>
                <Link to='study' className='nav-link'>
                    <li className='nav-li'>Study</li>
                </Link>
                <Link to='quiz' className='nav-link'>
                    <li className='nav-li'>Quiz</li>
                </Link>
            </ul>
        </nav>
    )
}
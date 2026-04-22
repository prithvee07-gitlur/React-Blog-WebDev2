import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav style={{ padding: '16px 0' }}>
            <ul style={{ listStyle: 'none', display: 'flex', gap: '16px', justifyContent: 'center', padding: 0, margin: 0 }}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/bollywood">Bollywood</Link></li>
                <li><Link to="/hollywood">Hollywood</Link></li>
                <li><Link to="/technology">Technology</Link></li>
                <li><Link to="/fitness">Fitness</Link></li>
                <li><Link to="/food">Food</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
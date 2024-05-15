import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar bg-body-tertiary sticky-top">
                <form className="container-fluid justify-content-start">
                    <div className='mx-2'>
                        <Link to='/'><button className="btn btn-outline-secondary" type="button">Home</button></Link>
                    </div>
                    <div className='mx-2'>
                        <Link to='/cars'><button className="btn btn-outline-secondary" type="button">Cars</button></Link>
                    </div>
                </form>
            </nav>
        </div>
    )
}

export default Navbar

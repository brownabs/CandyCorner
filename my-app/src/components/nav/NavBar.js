import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-primary fixed-top flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/">Stores</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/employees">Employees</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/candies">Candies</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar
import React from 'react'
import Navbars from '../../components/navbars'
import Sidebars from '../../components/sidebars'

function Dashboard() {
    return (
        <div className="containers">
            <Navbars />
            <Sidebars />
            <div className="contents"><h1>contents</h1></div>
        </div>
    )
}

export default Dashboard

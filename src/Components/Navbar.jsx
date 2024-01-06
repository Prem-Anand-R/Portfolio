import React, { useState } from 'react'
import "./main.css"
import { Link } from 'react-router-dom'
function Navbar() {
    const[nav,setnav]= useState("0")
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent  mt-2">
            <div className="container-fluid">
                <a className="navbar-brand text-light fs-3 mx-4 head_nav" href="#">Portfolio</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon bg-light p-1"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto gap-5 mt-3 ul">
                        <li className="nav-item li" style={{background: nav === "1" ? "red":"none",borderRadius:"7px" }}>
                            <Link to={'./Home'}
                            className="nav-link text-light a"

                            onClick={()=>{
                                setnav("1")
                            }}
                            >Home
                            </Link>                         
                        </li>
                        <li className="nav-item li" style={{background: nav === "2" ? "red":"none",borderRadius:"7px"  }}>
                        <Link to={'./About'}
                            className="nav-link text-light a"
                            onClick={()=>{
                                setnav("2")
                            }}
                            >About
                        </Link> 
                        </li>
                        <li className="nav-item li" style={{background: nav === "3" ? "red":"none",borderRadius:"7px"  }}>
                        <Link to={'Skills'}
                            className="nav-link text-light a"
                            onClick={()=>{
                                setnav("3")
                            }}
                            >Skills
                            </Link> 
                        </li>
                        <li className="nav-item li" style={{background: nav === "4" ? "red":"none",borderRadius:"7px"  }}>
                        <Link to={'projects'}
                            className="nav-link text-light a"
                            onClick={()=>{
                                setnav("4")
                            }}>Projects
                            </Link> 
                        </li>
                        <li className="nav-item li" style={{background: nav === "5" ? "red":"none",borderRadius:"7px"  }}>
                        <Link to={'contact'}
                            className="nav-link text-light a"
                            onClick={()=>{
                                setnav("5")
                            }}>Contact
                            </Link> 
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
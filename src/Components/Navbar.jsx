import React, { useState } from 'react'
import "./main.css"
import { Link } from 'react-router-dom'
function Navbar() {
    const[nav,setnav]= useState("0")
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent  mt-2">
            <div className="container-fluid">
                <a className="navbar-brand text-light fs-3 mx-4 head_nav" href="#">Portfolio</a>
                <button className="navbar-toggler bg-danger" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                     <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16" style={{color:'white'}}>
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg>
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

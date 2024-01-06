import React from 'react';
import "./main.css";
import Typed from "react-typed";
import { Link } from 'react-router-dom';
function Home() {

  return (
    <div>
      <div className="row overflow-hidden m-0 p-0  me-3 ms-2">
        <div className="col-lg-5 col-sm-12 mt-5  d-flex justify-content-center ">
          <div className='inner_circle mt-5 '>
            <div className="men-image">
              <img src='https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw' alt="" className='men-images' />
            </div>

          </div>

        </div>
        <div className='col-lg-7 col-sm-12 my-5 py-3'>
          <h1 className='text-light  mt-5 colors'>Hello,
            <Typed className='colors'
              strings={[
                "I'm Prem Anand"
              ]}
              color="red"
              typeSpeed={150}
              backSpeed={100}
              loop
            />
          </h1>
          <p className='text-light lead text-head '>I am a dedicated Frontend Developer with a passion for creating aesthetically pleasing, user-friendly websites and applications. My journey in the field of web development began with mastering the fundamentals - HTML, CSS, and JavaScript. These foundational languages allowed me to understand the building blocks of the web and how to manipulate them to create engaging user experiences.</p>

          <a href="/Prem_Anand.pdf" target="_blank" rel="noopener noreferrer" download>
            <button className="button mt-4">
              <span className="button-content">Download CV</span>
            </button>
          </a>

        </div>
      </div>



    </div>
  )
}

export default Home
import React from 'react'
import Typed from "react-typed";


function About() {
  return (
    <>
      <div className='row m-0 p-0 mx-3 mt-3'>
        <div className=' my-5 pt-3 col-sm-12  col-lg-7 d-flex justify-content-center '>
         <div>
         <p className='lead'>Hi, I'm Prem Anand, a passionate front-end developer with a strong foundation in HTML, CSS, Bootstrap, and JavaScript.</p>
          <p className='lead'>As a Fresher, I am eager to learn, grow, and contribute to building visually appealing and user-friendly web applications.</p>
          <p className='lead'>I have a keen eye for design and strive to create seamless user experiences. I am constantly exploring new technologies to enhance my skills and stay up to date with industry trends.</p>
          <h3 className='text-info'>Education:</h3>
          <p className='lead'>- Bachelor's Degree in Computer Science, Erode Sengunthar Engineering College, 2023 Graduated</p>
         </div>
        </div>
        <div className='col-4 col-lg-2 col-sm-12 mx-5 about-image mt-4 d-none d-lg-block'>
          <img src={require("../img/men.png")} alt='about-me' className='about_img' />
          <div className="images-description">
            <p className='about-img-write'>
              <Typed className='about-type'
                strings={[
                  "About Me.!"
                ]}
                typeSpeed={150}
                backSpeed={100}
                cursorChar={""}
                loop
              />
          </p>





          </div>
        </div>
      </div>
    </>
  )
}

export default About
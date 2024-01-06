import React from 'react'

function Project() {
 return (
  <div className='project-page'>
   <div className="project-card d-flex  justify-content-center gap-5 flex-wrap my-3 mx-3">

    <div className="card card-hover col-lg-3 col-sm-12 p-0 m-0">
     <div className=" card-header border">
      <p className="card-title">
       IoT Based Secure Lock/Unlock System Using Google Assistant
      </p>
     </div>

     <div className="card-body">
      <img src={require("../img/iot.png")} alt="Iot project" className='Project-img' />
      <p className='project-descrption mt-4'>
       A Door-Automation system based on a speech command pin is a good way of locking or unlocking the door using a voice module that recognises the voice.
      </p>
     </div>
    </div>
    <div className="card card-hover col-lg-3 col-sm-12 p-0 m-0">
     <div className=" card-header border  ">
      <p className="card-title">
       Social Network Mental Disorder Detection via Online Social Media
      </p>
     </div>

     <div className="card-body">
      <img src={require("../img/12.png")} alt="Iot project" className='Project-img' />
      <p className='project-descrption mt-4'>
       Mining online social behavior provides an opportunity to actively identify SNMDs at an early stage.
       Published in: International Journal Of Advance Research And Innovative Ideas In Education
      </p>
     </div>

    </div>
    <div className="card card-hover col-lg-3 col-sm-12 p-0 m-0">
     <div className=" card-header border">
      <p className="card-title">
       Inventory Management System Admin Panel Full Stack

      </p>
     </div>

     <div className="card-body">
      <img src={require("../img/inventory.png")} alt="Iot project" className='Project-img' />
      <p className='project-descrption'>
      I developed an Inventory Management Admin Panel using a stack of technologies including React.js, React Bootstrap, Node.js, Express.js, and MySQL. This project showcases my proficiency in building responsive web applications.

      </p>
     </div>
    </div>
   </div>
  </div>
 )
}

export default Project

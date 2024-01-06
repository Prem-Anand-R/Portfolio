import React from 'react'
import "../Components/contact.css"
function Contact() {
  return (
    <div>
      <section className="contact-page-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-map-marked"></i>
                  </div>
                  <div className="contact-info-text">
                    <h2>address</h2>
                    <span>Erode </span>
                    <span>TAMIL NADU, INDIA</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-info-text">
                    <h2>E-mail</h2>
                    <span>premanand484@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="contact-page-form" method="post">
                <h2 className='text-light'>Get in Touch</h2>
                <form action="contact-mail.php" method="post">
                  <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <input type="text" placeholder="Your Name" name="name" />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <input type="email" placeholder="E-mail" name="email" required />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <input type="text" placeholder="Phone Number" name="phone" />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <input type="text" placeholder="Subject" name="subject" />
                      </div>
                    </div>
                    <div className="col-md-12 message-input">
                      <div className="single-input-field">
                        <textarea placeholder="Write Your Message" name="message"></textarea>
                      </div>
                    </div>
                    <div className="single-input-fieldsbtn">
                      <input type="submit" value="Send Now" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
           
          </div>
        </div>
      </section>


    </div>
  )
}

export default Contact

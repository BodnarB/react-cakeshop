import React from 'react'
import './Contact.css'
import geoIcon from '../../Assets/geo-alt-fill.svg'
import phoneIcon from '../../Assets/telephone.svg'
import mailIcon from '../../Assets/envelope-at-fill.svg'

export default function Contact() {
  return (
    <section id='contact'>
      <h2 className='h2-contact'>Contact</h2>
      <div className='contact-w-map'>
        <div className='contact-container'>
          <div className='phone contact-info'>
            <img className='contact-icons' src={phoneIcon} alt="" />
            <p>+44 822 142 1158</p>
          </div>
          <div className='phone contact-info'>
            <img className='contact-icons' src={mailIcon} alt="" />
            <p>cake.shop@info.uk</p>
          </div>
          <div className='phone contact-info'>
            <img className='contact-icons' src={geoIcon} alt="" />
            <p>78 Broad St, Birmingham</p>
          </div>
        </div>
        <iframe className='google-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155455.27832596673!2d-2.0284358496915655!3d52.497443701163746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870942d1b417173%3A0xca81fef0aeee7998!2zQmlybWluZ2hhbSwgRWd5ZXPDvGx0IEtpcsOhbHlzw6Fn!5e0!3m2!1shu!2shu!4v1673098453488!5m2!1shu!2shu"
          loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='google map'></iframe>
      </div>
      <div className='form-w-title'>
        <div className='backdrop'>
          <h3 className='contact-h3'>Write to us!</h3>
          <form className='form-container' action="#" method='get'>
            <div className='form-sub-container'>
              <label className='form-label' htmlFor="form-name">Name</label>
              <input type="text" className="form-input" name="name" id='form-name' required />
            </div>
            <div className='form-sub-container'>
              <label className='form-label' htmlFor="form-mail">E-mail</label>
              <input type="email" className="form-input" name="email" id='form-mail' required />
            </div>
            <div className='form-sub-container'>
              <label className='form-label' htmlFor="form-phone">Telephone</label>
              <input type="tel" className="form-input" name='Telephone' id='form-phone' />
            </div>
            <div className='form-sub-container'>
              <label className='form-label' htmlFor="form-message">Message</label>
              <textarea name="message" className="form-input form-textarea" id='form-message' required></textarea>
            </div>
            <button type="submit" className="btn-submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  )
}

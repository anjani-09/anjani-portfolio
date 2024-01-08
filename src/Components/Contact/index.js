import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import BlinkingLight from '../BlinkingLight'
const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_ytfurwn', 'template_qbgr148', form.current, 'e7f63udM5h7N4b--t')
    .then(
        () => {
          alert('Message successfully sent, Anjani will get back to you shortly!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
};


  return (
    <>
      <div className="container contact-page">
        
      <BlinkingLight text="Actively Seeking Software Dev Position"></BlinkingLight>
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>I'm currently on the lookout for full-time opportunities as a recent graduate. If you believe my skills and experiences align with your job opening, I welcome you to reach out to me here. I'm eager to explore how I can be a valuable addition to your team.</p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="from_name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="user_email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Anjani Rajanala,
          <br />
          Tempe, Arizona
          <br />
         United States of America <br/>
         <br></br>
          <span>vrajana1@asu.edu</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[33.427204,  -111.9939896]} zoom={10}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[33.41414833285255, -111.90648367172882]}>
              <Popup>Anjani currently lives here, but willing to relocate</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact

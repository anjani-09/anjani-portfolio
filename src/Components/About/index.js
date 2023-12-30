
import { useState,useEffect } from 'react'
import {
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
    faAndroid,
    faDocker
   
    
  } from '@fortawesome/free-brands-svg-icons'
  import Loader from 'react-loaders'
  import AnimatedLetters from '../AnimatedLetters'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import './index.scss'
import BlinkingLight from '../BlinkingLight'

const About = () => {
 
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])
  return (
    <>
      <div className="container about-page">
      <BlinkingLight text="Actively Seeking New Grad Dev Position"></BlinkingLight>

        <div className="text-zone">
          <h1>
            <AnimatedLetters
            letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
            </h1>
            <p style={{ fontSize: '18px' }}>
My journey through <strong>Arizona State University</strong> culminated in the attainment of a Masters in Information Technology, a testament to my fervor for technology's transformative power. Through rigorous academic pursuits, I delved into diverse IT methodologies, cultivating a robust skill set and an unwavering passion for innovation.
            </p>
            <p style={{ fontSize: '18px' }}>
            My tenure at <strong>Amazon</strong> as a <strong>Software Development Engineer</strong> was a defining chapter. I spearheaded a gripping Full Stack project, immersing myself in the intricate landscape of React. This experience fueled my evolution as I seamlessly maneuvered between frontend intricacies and backend complexities. <strong>Graduating in December of 2023</strong> marked a pivotal moment, propelling me into a world of fresh opportunities. I now embark on a quest for new graduate developer roles, driven by an insatiable curiosity and an unyielding commitment to contribute meaningfully to groundbreaking tech endeavors. My aspiration is to merge academic insights with practical finesse, crafting solutions that resonate within the dynamic tech sphere.
            </p>
          </div>

          <div className="stage-cube-cont">
          <div id="stars">
          </div>
            <div id="stars2"></div>
            <div id="stars3"></div>
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face2">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faDocker} color="#28A4D9" />
            </div>
            <div className="face4">
            <FontAwesomeIcon icon={faAndroid} color="#3DDC84" />
            </div>
            <div className="face5">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
          </div>
          <Loader type = "pacman"/>
    </>
  )
}

export default About

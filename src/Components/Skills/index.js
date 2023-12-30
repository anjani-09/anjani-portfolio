import './index.scss'
import React, { useState,useEffect } from 'react';
import BlinkingLight from '../BlinkingLight'
import AnimatedLetters from '../AnimatedLetters'
import TagCloudComponent from '../TagCloud';
import { Button } from 'react-bootstrap';

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    setTimeout(() => {
     setLetterClass('text-animate-hover')
   }, 3000)
 }, [])
 const onClickHandlerResumeButton = () => {
  window.open('https://drive.google.com/file/d/1W_xQj9t4uXXfO7gRsmiuK800JFvSyiqf/view?usp=drive_link', '_blank');
 }
 
   return (
  
  <div className='container skills-page'>
    <BlinkingLight text="Actively Seeking New Grad Dev Position"></BlinkingLight>
    <div className='text-zone'>
        <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'k', 'i', 'l', 'l', 's', ' ', '&', ' ', 'E','x','p','e','r','i','e','n','c','e']}
              idx={15}
            />
        </h1> 
        <p style={{ fontSize: '18px' }}>
          My Skillset include Full Stack Development with <strong>React, TypeScript and JavaScript, Mobile App Development with Android Studio, Kotlin and Java</strong>. I have solid experience in utilizing <strong>SQL and NoSQL </strong> Databases for developing applications. Experienced in designing User Interface using <strong> Figma</strong>.<br></br><br></br>Please have a look at my resume for further information.
        </p>
        <Button className='flat-button' onClick={onClickHandlerResumeButton}> Download RESUME</Button>
  </div>
  <div className='skills-cloud'> <TagCloudComponent/></div>
  </div>

  )

};


export default Skills
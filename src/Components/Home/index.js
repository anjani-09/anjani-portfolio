import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import './index.scss'
import BlinkingLight from '../BlinkingLight'
import Avatar from '../../assets/images/avatar.svg'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['A','n','j','a','n','i',' ', 'R', 'a', 'j', 'a', 'n', 'a', 'l', 'a']
  const jobArray = [
    'S',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    ' ',
    'E',
    'n',
    'g',
    'i',
    'n',
    'e',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
      <BlinkingLight text="Actively Seeking Software Dev Position"></BlinkingLight>
        <div className= "text-zone" >
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i</span>
            <span className={`${letterClass} _12`}>,</span>
            <br/>
            
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <span> </span>      
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={18}
            />
          </h1>
          <h2>Experienced in Full Stack Development and Mobile App Development</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <img src= {Avatar}/>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home

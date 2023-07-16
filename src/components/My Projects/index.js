import { useState, useEffect, useRef } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'

function Project() {
  const [letterClass, setLetterClass] = useState('text-animate')

  const [hoverLeft, setHoverLeft] = useState(false)
  const [hoverRight, setHoverRight] = useState(false)

  const handleMouseEnterLeft = () => {
    setHoverLeft(true)
  }

  const handleMouseLeaveLeft = () => {
    setHoverLeft(false)
  }

  const handleMouseEnterRight = () => {
    setHoverRight(true)
  }

  const handleMouseLeaveRight = () => {
    setHoverRight(false)
  }
  // console.log(handleMouseLeaveRight)

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <>
      <div className="container my-project">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't']}
              idx={15}
            />
          </h1>
        </div>
        <div
          className={`container1 ${hoverLeft ? 'hover-left' : ''} ${
            hoverRight ? 'hover-right' : ''
          }`}
        >
          <div
            className="split left project-left"
            onMouseEnter={handleMouseEnterLeft}
            onMouseLeave={handleMouseLeaveLeft}
          >
            <h1>Reactjs-Project</h1>
            <a
              href="https://azhad-nasim.github.io/deepthought-SkillsTest/"
              className="btn"
              target="_blank"
            >
              Link-1
            </a>
            <a
              href="https://azhad-nasim.github.io/Mountain-Tour/"
              className="btn"
              target="_blank"
            >
              Link-2
            </a>
            <a
              href="https://azhad-nasim.github.io/Weather-App/"
              className="btn"
              target="_blank"
            >
              Link-3
            </a>
          </div>

          <div
            className="split right"
            onMouseEnter={handleMouseEnterRight}
            onMouseLeave={handleMouseLeaveRight}
          >
            <h1>HTML,CSS,JS Project</h1>
            <a
              href="https://searcher-no1-platform-for-job.netlify.app/"
              className="btn"
              target="_blank"
            >
              Link-1
            </a>{' '}
            <a
              href="https://two-projects.netlify.app/"
              className="btn"
              target="_blank"
            >
              Link-2
            </a>{' '}
            <a
              href="https://confuseonurchoices.netlify.app/"
              className="btn"
              target="_blank"
            >
              Link-3
            </a>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Project

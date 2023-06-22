import { useState } from 'react'
import './App.css'
import { Footer } from './Footer'
import { useMultistepForm } from './useMultistepForm'
import { Services } from './Services'
import { Service } from './Service'
import { Home } from './Home'
import { services } from './data'
import { BiChevronRight } from 'react-icons/bi'
import { BsChevronLeft } from 'react-icons/bs'

function App() {
  const [id, setId] = useState(0)
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <Home />,
      <Service serviceId={id} />
    ])

  return (
    <div className="App">
      <div className='header'>
        <h4>Chose Service</h4>
        <div className="steps">
          <p>Step
            <span> {currentStepIndex + 1} / {steps.length}</span>
          </p>
        </div>
        {!isFirstStep && (
          <button className="back-button" onClick={back}>
            <BsChevronLeft />
            <p>Back</p>
          </button>
        )}
      </div>
      {currentStepIndex !== 1 ? (
        <div className="services">
          <div className="service-list">
            {services.map((s) => (
              <div className='service-item' key={s.id} onClick={(e) => {
                setId(s.id)
                next()
              }}>
                <div className="logo">
                  <img src={s.photo} alt="" width={50} />
                </div>
                <h3>{s.name}</h3>
                <BiChevronRight className='right-arrow' />
              </div>
            ))}
          </div>

          <div className="contact">
            <p>Not sure about consulting type? Please, call <span className='number'>0203 7959063</span></p>
          </div>
        </div>
      ) : step}
      <Footer />
    </div>
  )
}

export default App

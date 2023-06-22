
import { Footer } from "./Footer"
import { services } from "./data"
import { Link } from "react-router-dom"
import { BiChevronRight } from 'react-icons/bi'
import { useMultistepForm } from "./useMultistepForm"

export function Services() {

    return (
        <>
            <div className="services">
                <div className="service-list">
                    {services.map((s) => (
                        <Link to={`/service/${s.id}`} className='service-item' key={s.id}>
                            <div className="logo">
                                <img src={s.photo} alt="" width={50} />
                            </div>
                            <h3>{s.name}</h3>
                            <BiChevronRight className='right-arrow' />
                        </Link>
                    ))}
                </div>

                <div className="contact">
                    <p>Not sure about consulting type? Please, call <span className='number'>0203 7959063</span></p>
                </div>
            </div>
        </>
    )
}
import { Header } from "./Header"
import { services } from './data'
import pabau from './assets/pabau.png'

type ServiceProps = {
    serviceId: number
}

export function Service({serviceId}:ServiceProps) {

    return (
        <div className='service-page'>
            <div className="single-service">
                {services.map(ss => (
                    <div key={ss.id}>
                        {ss.id === serviceId && (
                            <>
                                <img src={ss.photo} />
                                <h3 className='ss-text'>{ss.name}</h3>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
import pabau from './assets/pabau.png'

export function Footer() {
    return (
        <div className='footer'>
            <span>Powered By</span> <img src={pabau} width={40} /> <span>Pabau</span>
        </div>
    )
}
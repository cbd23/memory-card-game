import './../styles/Footer.css'

export function Footer() {
    return (
        <div className='footer-container'>
            <div className="footer-elements-container">
                <a href="https://www.theodinproject.com" target='_blank'>
                    <img src="https://github.com/cbd23/weather-app/blob/main/src/odin-icon.png?raw=true" alt="The Odin Project logo" className='odin-icon' />
                </a>
                <span className="footer-text">The Odin Project made me do it.</span>
            </div>
        </div>
    )
}
import './../styles/Card.css'

export function Card({ id, name, profilePath }) {
  
    // store the base URL for images inside a const
    const IMAGE_URL = 'https://image.tmdb.org/t/p/original'

    return (
        <div className='card-container'>
            <img className='actor-pic' src={IMAGE_URL + profilePath} alt="actor/actress image" />
            <p className='actor-name'>{name}</p>
        </div>
    )
}
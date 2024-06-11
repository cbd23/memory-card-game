/* eslint-disable react/prop-types */
import './../styles/Main.css'
import { Card } from './Card'

export function Main({ cards }) {

    const listCards = cards.map(card => <Card key={card.id} id={card.id} name={card.name} profilePath={card.profile_path}></Card>)

    return (
        <div className='main-container'>
            {listCards}
        </div>
    )
}
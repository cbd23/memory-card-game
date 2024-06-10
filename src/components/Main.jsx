/* eslint-disable react/prop-types */
import './../styles/Main.css'
import { Card } from './Card'

export function Main({ cards }) {

    const listCards = cards.map(card => <Card key={card.id}>{card.name}</Card>)

    return (
        <div className='main-container'>
            {listCards}
        </div>
    )
}
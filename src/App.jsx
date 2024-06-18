import { Fragment, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Footer } from './components/Footer'

function App() {

  const [cards, setCards] = useState([])
  const [clickedCards, setClickedCards] = useState([])
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Yjk1ZGI3Zjc2M2FjMjA0NzBiZTdiYWI5N2QxYzY5ZiIsInN1YiI6IjY1YzNhNmI0OGMwYTQ4MDE2NDg1YWUwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rTWg4CfQZHMbgjAz5Znn5-5daI5seOIaaiVfi5B7qXk'
    }
  };

  // fetch data from API on load & store the first 12 actors (objects) needed to populate each card into an array
  useEffect(() => {
    
    fetch('https://api.themoviedb.org/3/person/popular?language=en-US&page=1', options)
      .then(response => response.json())
      .then(response => {
        const firstTwelveCards = response.results.slice(0, 12)
        setCards(firstTwelveCards)
      })
      .catch(err => console.error(err))
    }, [])

    // log the cards array whenever it changes
    useEffect(() => {
      console.log(cards)
    }, [cards])

    function handleClick(id) {
      console.log(id)
    }

  return (
    <div className='app-container'>
      <Header></Header>
      <Main cards={cards} handleClick={handleClick}></Main>
      <Footer></Footer>
    </div>
  )
}

export default App

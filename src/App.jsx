import { useEffect, useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Footer } from './components/Footer'

function App() {
  const [cards, setCards] = useState([])
  const [clickedCards, setClickedCards] = useState([])
  let [score, setScore] = useState(0)
  let [bestScore, setBestScore] = useState(0)
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Yjk1ZGI3Zjc2M2FjMjA0NzBiZTdiYWI5N2QxYzY5ZiIsInN1YiI6IjY1YzNhNmI0OGMwYTQ4MDE2NDg1YWUwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rTWg4CfQZHMbgjAz5Znn5-5daI5seOIaaiVfi5B7qXk'
    }
  };

  // fetch data from API on app load & store the first 12 actors (objects) needed to populate each card
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/person/popular?language=en-US&page=1', options)
      .then(response => response.json())
      .then(response => {
        const firstTwelveCards = response.results.slice(0, 12)
        setCards(firstTwelveCards)
      })
      .catch(err => console.error(err))
  }, [])

  // change cards' order & update the list of clickedCards after each click
  function handleClick(id) {
    shuffleCards()
    addToClicked(id)
  }

  // verify whether a card was already clicked or not and update/reset the score & best score
  function addToClicked(card) {
    if (clickedCards.includes(card)) {
      setClickedCards([])
      setScore(0)
    } else {
      setClickedCards([...clickedCards, card])
      setScore(score => score + 1)
    }
  }

  // update bestScore whenever score increases & it's bigger than the actual bestScore
  useEffect(() => {
    score > bestScore ? setBestScore(score) : null
  }, [score])

  // message the player when they reach the max score
  useEffect(() => {
    score === 12 ? alert('Congrats! You clicked them all!') : null
  }, [score])

  // shuffle the array that stores the cards using the Fisher-Yates algorithm
  function shuffleCards() {
    const shuffled = [...cards];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setCards(shuffled);
  }

  return (
    <div className='app-container'>
      <Header score={score} bestScore={bestScore}></Header>
      <Main cards={cards} handleClick={handleClick}></Main>
      <Footer></Footer>
    </div>
  )
}

export default App

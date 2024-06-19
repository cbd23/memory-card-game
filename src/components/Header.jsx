import './../styles/Header.css'

export function Header({ score, bestScore }) {
    return (
        <div className="header-container">
            <p className='rules'>Click as many actors as you can without clicking the same actor twice!</p>
            <div className='best-score'>BEST SCORE: {bestScore}</div>
            <div className='current-score'>SCORE: {score}</div>
        </div>
    )
}
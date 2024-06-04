import './../styles/Header.css'

export function Header() {
    return (
        <div className="header-container">
            <p className='rules'>Click as many actors as you can without clicking the same actor twice!</p>
            <div className='best-score'>BEST SCORE: 4</div>
            <div className='current-score'>SCORE: 0</div>
        </div>
    )
}
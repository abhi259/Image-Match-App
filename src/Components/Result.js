import './Result.css'

export default function Result({score, setScore, setTimer, setShowResult}) {
  const onPlayAgain = () => {
    setScore(0)
    setTimer(60)
    setShowResult(prevState => !prevState)
  }
  return (
    <div className="result-container">
      <div className="result-inner-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="trophy-size"
        />
      </div>
      <div className="score">
        <p>YOUR SCORE</p>
        <h1>{score}</h1>
        <button type="button" onClick={onPlayAgain}>
          <div className="result-button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
              alt="reset"
            />
            <p>PLAY AGAIN</p>
          </div>
        </button>
      </div>
    </div>
  )
}

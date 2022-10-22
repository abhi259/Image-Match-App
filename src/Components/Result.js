import "./Result.css"
export default function Result({ score, setScore, setTimer, setShowResult }) {
  const onPlayAgain = () => {
    setScore(0)
    setTimer(60)
    setShowResult((prevState) => !prevState)
  }
  return (
    <div className="result-container">
      <div className="result-inner-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophyr"
          className="trophy-size"
        />
      </div>
      <div className="score">
        <h1>YOUR SCORE</h1>
        <h1>{score}</h1>
        <button type="button">
          <div className="result-button" onClick={onPlayAgain}>
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

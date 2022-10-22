import "./Navbar.css"

export default function Navbar({ score, timer }) {
  return (
    <div className="navbar-wrapper">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="logo"
        />
      </div>
      <div className="navbar-inner-right">
        <p>{`Score: ${score}`}</p>
        <div className="navbar-inner-right">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="clock-size"
          />
          <p>{`${timer} sec`}</p>
        </div>
      </div>
    </div>
  )
}

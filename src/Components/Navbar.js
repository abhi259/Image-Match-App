import './Navbar.css'

export default function Navbar({score, timer}) {
  return (
    <ul className="navbar-wrapper">
      <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="logo"
        />
      </li>
      <li className="navbar-inner-right">
        <p>{`Score: ${score}`}</p>
        <div className="navbar-inner-right">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="clock-size"
          />
          <p>{`${timer} sec`}</p>
        </div>
      </li>
    </ul>
  )
}

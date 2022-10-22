import { useState } from "react"

import Body from "./Body"
import Navbar from "./Navbar"
import Result from "./Result"

export default function MainPage({ tabsList, imagesList }) {
  const [score, setScore] = useState(0)
  const [timer, setTimer] = useState(60)
  const [showResult, setShowResult] = useState(false)
  return (
    <div>
      <Navbar score={score} timer={timer} />
      {!showResult && (
        <Body
          tabsList={tabsList}
          imagesList={imagesList}
          setScore={setScore}
          setTimer={setTimer}
          timer={timer}
          showResult={showResult}
          setShowResult={setShowResult}
        />
      )}
      {showResult && (
        <Result
          score={score}
          setScore={setScore}
          setTimer={setTimer}
          setShowResult={setShowResult}
        />
      )}
    </div>
  )
}

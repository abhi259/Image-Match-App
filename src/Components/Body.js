import { useState, useEffect } from "react"
import "./Body.css"

export default function Body({
  tabsList,
  imagesList,
  setScore,
  setTimer,

  timer,
  showResult,
  setShowResult,
}) {
  const [category, setCategory] = useState("FRUIT")
  const [randomNumber, setRandomNumber] = useState(0)

  const onCategorySelection = (eachItem) => {
    setCategory(eachItem.tabId)
  }

  const updatedImagesList = imagesList.filter(
    (eachItem) => eachItem.category === category
  )

  const onThumbnailClick = (eachItem) => {
    if (eachItem.imageUrl === imagesList[randomNumber].imageUrl) {
      setScore((prevState) => prevState + 1)
      setRandomNumber(Math.floor(Math.random() * 30 + 1))
    } else if (eachItem.imageUrl !== imagesList[randomNumber].imageUrl) {
      setShowResult(!showResult)
    }
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((seconds) => seconds - 1)
    }, 1000)
    if (timer === 0) {
      clearInterval(interval)
      setShowResult(!showResult)
    }
    return () => clearInterval(interval)
  }, [timer, setShowResult, setTimer, showResult])

  console.log(showResult)

  return (
    <div className="body-container">
      <div>
        <img
          src={imagesList[randomNumber].imageUrl}
          alt="match"
          className="main-image"
        />
      </div>
      <ul className="selector">
        {tabsList.map((eachItem) => (
          <li>
            <button
              type="button"
              key={eachItem.tabId}
              id={eachItem.tabId}
              onClick={() => onCategorySelection(eachItem)}
            >
              {eachItem.displayText}
            </button>
          </li>
        ))}
      </ul>
      <ul className="thumbnails-container">
        {updatedImagesList.map((eachItem) => (
          <li>
            <button
              type="button"
              key={eachItem.id}
              id={eachItem.id}
              onClick={() => onThumbnailClick(eachItem)}
            >
              <img
                src={eachItem.thumbnailUrl}
                alt="thumbnail"
                className="thumbnail"
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

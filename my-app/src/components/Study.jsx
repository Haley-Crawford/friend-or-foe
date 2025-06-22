import { useState } from 'react'
import { Flashcard } from './Flashcard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faShuffle } from '@fortawesome/free-solid-svg-icons'

export const Study = ({cards}) => {
    const [index, setIndex] = useState(0)
    const [flashcards, setFlashcards] = useState(cards)

    const prev = () => {
        setIndex(index-1)
    }

    const next = () => {    
        setIndex(index+1)
    }

    const shuffle = () => {
        const dupe = [...cards]
  
        for (let i = dupe.length-1; i >= 0; i--) {
            const j = Math.floor(Math.random() * (i+1))
            const temp = dupe[i]
            dupe[i] = dupe[j]
            dupe[j] = temp
        }
        setFlashcards(dupe)
    }

    return (
        <>
            <h1>Study Break!</h1>
            <Flashcard person={flashcards[index]} mode='study'/>
            <div className='controls-div'>
                <button onClick={prev} className='btn' disabled={index === 0}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button onClick={next} className='btn' disabled={index === cards.length-1}>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
                <button onClick={shuffle} className='shuffle-btn btn'>
                    <p>Shuffle <FontAwesomeIcon icon={faShuffle} /></p> 
                </button>
            </div>
        </>
    )
}
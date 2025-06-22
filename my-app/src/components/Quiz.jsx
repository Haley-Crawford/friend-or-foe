import { useState } from 'react'
import { Flashcard } from './Flashcard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export const Quiz = ({cards}) => {
    const [streak, setStreak] = useState(0)
    const [index, setIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [guessed, setGuessed] = useState(false)

    const guess = (answer) => {

        if (!answer || !['programmer', 'criminal'].includes(answer.toLowerCase())) {
            alert('Please choose \'programmer\' or \'criminal\'!')
            return
        }

        setGuessed(true)

        const correct = cards[index].verdict === answer.toLowerCase()
        
        document.querySelector('.card').classList.add('flip')

        if (correct) {
            setScore(prev => prev + 1)
        } else {
            setScore(0)
        }

        if (score >= streak) {
            setStreak(score)
        }
        
        document.getElementById('input').style.borderColor = correct ? 'green' : 'red'
        document.getElementById('input').style.backgroundColor = correct ? 'lightgreen' : 'red'
    }

//TODO - make streak counter. increment index randomly

    const next = () => {
        document.querySelector('.card').classList.remove('flip')
        setTimeout(() => {
            setGuessed(false)     
            setIndex(Math.floor(Math.random() * cards.length))
            document.getElementById('input').style.borderColor = 'inherit'
            document.getElementById('input').style.backgroundColor = 'inherit'
            document.getElementById('input').value = '' 
        }, 1000)
    }

    return (
        <>
            <h1>Quiz Time!</h1>
            <div className='stats'>
                <p>Current Score: <strong><em>{score}</em></strong></p>
                <p>Longest Streak: <strong><em>{streak}</em></strong></p>
            </div>
            <Flashcard person={cards[index]} mode='quiz'/>
            <div className='flex-gap'>
                <div className='guess-div'>
                    <button onClick={(e) => guess(e.target.value)} value='programmer' disabled={guessed} className='btn'>Programmer</button>
                    <button onClick={(e) => guess(e.target.value)} value='criminal' disabled={guessed} className='btn'>Criminal</button>
                </div>
                <div className='guess-input'>
                    <p>Type your answer here: </p>
                    <input type='text' id='input' disabled={guessed} required/>
                    <button type='submit' onClick={() => guess(document.getElementById('input').value)} disabled={guessed} className='guess-btn'>Submit Guess</button>
                </div>
            </div>
            {
                guessed && <div className='controls-div'>
                    <button onClick={next} className='btn'>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            }
        </>
    )
}